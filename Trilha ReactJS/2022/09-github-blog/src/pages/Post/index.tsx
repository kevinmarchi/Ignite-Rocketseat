import { ArrowLeft, Calendar, ChatCircle, GithubLogo, Share } from "phosphor-react"
import { CodeText, PostContent, PostHeaderContainer, PostHeaderFooter, PostHeaderLinks, PostHeaderTitle } from "./styles"
import { Link } from "react-router-dom"

export function Post() {

    const code = `
    let foo = 42;   // foo is now a number
    foo = ‘bar’;    // foo is now a string
    foo = true;     // foo is now a boolean
    `

    return (
        <>
            <PostHeaderContainer>
                <PostHeaderLinks>
                    <Link to={"/"}><ArrowLeft weight="bold"/> VOLTAR</Link>
                    <a href="/post" target="_blank">VER NO GITHUB <Share weight="bold" /></a>
                </PostHeaderLinks>
                <PostHeaderTitle>
                    <h2>JavaScript data types and data structures</h2>
                </PostHeaderTitle>
                <PostHeaderFooter>
                    <span title="Github"><GithubLogo /> cameronwll</span>
                    <span title="Time ago"><Calendar /> Há 1 dia</span>
                    <span title="Comments"><ChatCircle /> 5 comentários</span>
                </PostHeaderFooter>
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