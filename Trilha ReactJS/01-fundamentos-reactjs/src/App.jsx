import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Post 
        author="Kevin Marchi" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ducimus veritatis adipisci repudiandae illo ullam quo maxime voluptatum, saepe iste sit autem sequi at? Cum in ratione iusto vero at." 
      />
      <Post 
        author="Autor Desconhecido" 
        content="Post Desconhecido" 
      />
    </div>
  )
}

