import {ContentContainer, ImageContainer, Contact} from './styles';
import Card from '../Card';

function Content() {
    return (
        <ContentContainer id="produtos">
            <h2>Sua melhor escolha para equipamentos anti-furto com qualidade e inovação</h2>

            <ImageContainer>
                <Card image="/Antena_AM_58k.png" title="Antena AM 58k" />
                <Card image="/Antena_RF_Henry.png" title="Antena RF Henry" />
                <Card image="/Tag_MD07_RF_8_2.png" title="Tag MD07 RF 8,2" />
                <Card image="/Tag_RF_Golfe.png" title="Tag RF Golfe" />
                <Card image="/Tag_MD07_RF8_2_preta.png" title="Tag MD07 RF8,2 preta" />
                <Card image="/Tag_RF_Mini_8_2.png" title="Tag RF Mini 8,2" />
                <Card image="/Tag_Garrafa.png" title="Tag Garrafa" />
            </ImageContainer>

            <Contact>
                <h3>Fale Conosco</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Telefone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(21)999688350</td>
                            <td>carlosabiliolopes@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </Contact>

        </ContentContainer>
    )
}

export default Content;