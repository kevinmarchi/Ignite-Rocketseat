import { format, formatDistanceToNow } from "date-fns";
import { CardHeader, Container } from "./styles";
import { ptBR } from "date-fns/locale";

interface CardProps {
    issue: {
        title: string;
        body: string;
        number: number;
        updated_at: string;
    }
}

export function Card({issue} : CardProps) {

    const publishedDateFormatted = format(new Date(issue.updated_at), "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    return (
        <Container to={`/post/${issue.number}`}>
            <CardHeader>
                <h3>{issue.title}</h3>
                <time title={publishedDateFormatted} dateTime={issue.updated_at}>
                    {formatDistanceToNow(new Date(issue.updated_at), {
                        locale: ptBR,
                        addSuffix: true
                    })}
                </time>
            </CardHeader>
            <p>{issue.body}</p>
        </Container>

    )
}