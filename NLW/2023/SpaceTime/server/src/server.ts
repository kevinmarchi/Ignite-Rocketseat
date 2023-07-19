import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoute } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
    origin: true,
})
app.register(jwt, {
    secret: 'spacetime',
})

app.register(memoriesRoute)
app.register(authRoutes)

app.listen({
    port: 3333,
    host: '0.0.0.0',
}).then(() => {
    console.log('HTTP server runing on http://localhost:3333')
})