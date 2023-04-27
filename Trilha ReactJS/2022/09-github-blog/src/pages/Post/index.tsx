import { ArrowLeft, Calendar, ChatCircle, GithubLogo, Share } from "phosphor-react"
import { CodeText, PostContent, PostHeaderContainer, PostHeaderFooter, PostHeaderLinks, PostHeaderTitle } from "./styles"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Loader } from "../../components/Loader"

interface IssueData {
    title: string;
    html_url: string;
    updated_at: string;
    comments: string;
    user: {
        login: string;
    };
}

export function Post() {

    const [loading, setLoading] = useState(true)
    const [issueData, setIssueData] = useState<IssueData>({} as IssueData)
    const {issueNumber} = useParams()

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                await axios.get(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${issueNumber}`)
                    .then(res => setIssueData(res.data))
                setLoading(false)                
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const code = `
    let foo = 42;   // foo is now a number
    foo = ‘bar’;    // foo is now a string
    foo = true;     // foo is now a boolean
    `

    return (
        <>
            <PostHeaderContainer>
                {(loading)  ? <Loader /> :
                    <>
                        <PostHeaderLinks>
                            <Link to={"/"}><ArrowLeft weight="bold"/> VOLTAR</Link>
                            <Link to={issueData.html_url} target="_blank" >VER NO GITHUB <Share weight="bold" /></Link>
                        </PostHeaderLinks>
                        <PostHeaderTitle>
                            <h2>{issueData.title}</h2>
                        </PostHeaderTitle>
                        <PostHeaderFooter>
                            <span title="Github"><GithubLogo /> {issueData.user?.login}</span>
                            <span>
                                <Calendar />
                                <time 
                                    title={format(new Date(issueData.updated_at), "d 'de' LLLL 'às' HH:mm'h'", {
                                                locale: ptBR,
                                          })}
                                    dateTime={issueData.updated_at}
                                >
                                    {formatDistanceToNow(new Date(issueData.updated_at), {
                                        locale: ptBR,
                                        addSuffix: true
                                    })}
                                </time>
                            </span>
                            <span title="Comments"><ChatCircle /> {issueData.comments} comentários</span>
                        </PostHeaderFooter>
                    </>
                }
            </PostHeaderContainer>

            <PostContent>
                <p><b>Programming languages all have built-in data structures, but these often differ from one language to another.</b> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are draw.</p>
                <h4>Dynamic Tiping</h4>
                <p>JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:</p>

                <CodeText>
                    <pre>
                        <code>
                            {code}
                        </code>
                    </pre>
                </CodeText>
            </PostContent>
        </>
    )
}