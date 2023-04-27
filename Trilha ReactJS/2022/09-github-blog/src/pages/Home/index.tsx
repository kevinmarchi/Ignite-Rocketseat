import { CardContainer, FilterContainer, FilterHeader, InformationContainer, ProfileContainer, ProfileContent, ProfileFooter, ProfileHeader } from "./styles";
import { Buildings, Car, GithubLogo, Share, Users } from "phosphor-react";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../../components/Loader";

export function Home() {

    const [profileData, setProfileData] = useState({} as any)
    const [repositoryIssues, setRepositoryIssues] = useState({} as any)
    const [loading, setLoading] = useState(false)
    const [searchField, setSearchField] = useState('');
    const [repositoryIssuesFiltered, setRepositoryIssuesFiltered] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                await axios.get('https://api.github.com/users/rocketseat-education').then(res => setProfileData(res.data))
                await axios.get('https://api.github.com/search/issues?q=%20repo:rocketseat-education/reactjs-github-blog-challenge')
                    .then(res => setRepositoryIssues(res.data))
                setLoading(false)                
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    function handleChangeSearchField(event: any) {
        setSearchField(event.target.value)
    }

    useEffect(() => {
        
        const issueFiltered = repositoryIssues.items?.filter((issue: any) => {
            if(issue.title.includes(searchField)) {
                return issue
            }
        })
        setRepositoryIssuesFiltered(issueFiltered)

    }, [searchField])

    return (
        <>
            <ProfileContainer>
                {loading ? <Loader /> :
                    <>
                        <img src={profileData.avatar_url} alt="" />
                        <InformationContainer>
                            <ProfileHeader>
                                <h2>{profileData.name}</h2>
                                <a href="https://github.com/rocketseat-education" target="_blank">GITHUB <Share weight="bold" /></a>
                            </ProfileHeader>
                            <ProfileContent>
                                <p>{profileData.bio}</p>
                            </ProfileContent>
                            <ProfileFooter>
                                <span title="Github"><GithubLogo /> {profileData.login}</span>
                                <span title="Company"><Buildings /> Rocketseat</span>
                                <span title="Followers"><Users /> {profileData.followers} seguidores</span>
                            </ProfileFooter>
                        </InformationContainer>
                    </>
                }
            </ProfileContainer>

            <FilterContainer>
                <FilterHeader>
                    <h3>Publicações</h3>
                    <p>
                        {
                            repositoryIssuesFiltered === undefined ? repositoryIssues.total_count : repositoryIssuesFiltered.length
                        }
                    </p>
                </FilterHeader>
                <input type="text" placeholder="Buscar Conteúdo" value={searchField} onChange={handleChangeSearchField} />
            </FilterContainer>

            <CardContainer>
                {loading ? <Loader /> : (
                        repositoryIssuesFiltered === undefined ? (
                            repositoryIssues.items?.map((issue: any) => {
                                return <Card key={issue.id} issue={issue}/>
                            })
                        ) : (
                            repositoryIssuesFiltered.map((issue: any) => {
                                return <Card key={issue.id} issue={issue}/>
                            })
                        )                                         
                    )
                }
            </CardContainer>
        </>
    )
}