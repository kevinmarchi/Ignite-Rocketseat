import { Header } from "./components/Header"
import { Post } from "./Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Kevin Marchi" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ducimus veritatis adipisci repudiandae illo ullam quo maxime voluptatum, saepe iste sit autem sequi at? Cum in ratione iusto vero at." 
        />
        <Post 
          author="Autor Desconhecido" 
          content="Post Desconhecido" 
        />
        </main>
      </div>
    </div>
  )
}

