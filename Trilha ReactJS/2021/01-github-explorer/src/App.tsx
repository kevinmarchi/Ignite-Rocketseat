import { Counter } from './components/Counter'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export function App() {

    /* throw new Error('Deu ruim!'); 

    return <h1>Hello World</h1>*/

    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}