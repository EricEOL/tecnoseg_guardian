import {ContentContainer, ImageContainer} from './styles';
import Card from '../Card';

function Content() {
    return (
        <ContentContainer id="produtos">
            <h2>Sua melhor escolha para equipamentos anti-furto com qualidade e inovação</h2>

            <ImageContainer>
                <Card image="/Tag Garrafa.jpg" title="Tag Garrafa" />
                <Card image="/Antena AM 58k.jpg" title="Antena AM 58k" />
                <Card image="/Antena-RF-Henry.png" title="Antena RF Henry" />
                <Card image="/Tag MD07 RF 8,2.jpg" title="Tag MD07 RF 8,2" />
                <Card image="/Tag RF Golfe.jpg" title="Tag RF Golfe" />
                <Card image="/Tag MD07 RF8,2 preta.jpg" title="Tag MD07 RF8,2 preta" />
                <Card image="/Tag RF Mini 8,2.jpg" title="Tag RF Mini 8,2" />
            </ImageContainer>
        </ContentContainer>
    )
}

export default Content;