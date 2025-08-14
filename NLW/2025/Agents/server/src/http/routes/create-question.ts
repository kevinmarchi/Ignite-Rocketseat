import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { db } from '../../db/connection.ts'
import { schema } from '../../db/schema/index.ts'
import { generateAnswer, generateEmbeddings } from '../../services/gemini.ts'
import { and, eq, sql } from 'drizzle-orm'

export const createQuestionRoute: FastifyPluginAsyncZod = async (app) => {
  app.post('/rooms/:roomId/questions',
    {
      schema: {
        params: z.object({
          roomId: z.string()
        }),
        body: z.object({
          question: z.string().min(1),
        })
      }
    },
    async ({ body, params }, reply,) => {
      const { question } = body
      const { roomId } = params

      const embeddings = await generateEmbeddings(question)

      const embeddingsAsString = `[${embeddings.join(',')}]`

      const chunks = await db
        .select({
          id: schema.audioChunks.id,
          transcription: schema.audioChunks.transcription,
          similarity: sql<number>`1 - (${schema.audioChunks.embeddings} <=> ${embeddingsAsString}::vector)`
        })
        .from(schema.audioChunks)
        .where(
          and(
            eq(schema.audioChunks.roomId, roomId),
            sql`1 - (${schema.audioChunks.embeddings} <=> ${embeddingsAsString}::vector ) > 0.7`
          )
        )
        .orderBy(sql`1 - (${schema.audioChunks.embeddings} <=> ${embeddingsAsString}::vector ) > 0.7`)
        .limit(3)

      let answer: string | null = null

      if (chunks.length > 0) {
        const transcriptions = chunks.map(chunk => chunk.transcription)

        answer = await generateAnswer(question, transcriptions)
      }

      const result = await db.insert(schema.questions).values({
        question,
        roomId,
        answer
      }).returning()

      const insertedQuestion = result[0]

      if (!insertedQuestion) {
        throw new Error('Failed to create new question.')
      }

      return reply.status(201).send({ questionId: insertedQuestion.id, answer })
    }
  )
}