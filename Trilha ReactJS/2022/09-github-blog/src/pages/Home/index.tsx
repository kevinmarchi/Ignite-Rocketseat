import { CardContainer, FilterContainer, FilterHeader, InformationContainer, ProfileContainer, ProfileContent, ProfileFooter, ProfileHeader } from "./styles";
import cameronImg from '../../assets/cameron.png'
import { Buildings, GithubLogo, Share, Users } from "phosphor-react";
import { Card } from "./components/Card";

export function Home() {
    return (
        <>
            <ProfileContainer>
                <img src={cameronImg} alt="" />
                <InformationContainer>
                    <ProfileHeader>
                        <h2>Cameron Williamson</h2>
                        <a href="#" target="_blank">GITHUB <Share weight="bold" /></a>
                    </ProfileHeader>
                    <ProfileContent>
                        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                    </ProfileContent>
                    <ProfileFooter>
                        <span title="Github"><GithubLogo /> cameronwll</span>
                        <span title="Company"><Buildings /> Rocketseat</span>
                        <span title="Followers"><Users /> 32 seguidores</span>
                    </ProfileFooter>
                </InformationContainer>
            </ProfileContainer>

            <FilterContainer>
                <FilterHeader>
                    <h3>Publicações</h3>
                    <p>6 publicações</p>
                </FilterHeader>
                <input type="text" placeholder="Buscar Conteúdo" />
            </FilterContainer>

            <CardContainer>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardContainer>
        </>
    )
}