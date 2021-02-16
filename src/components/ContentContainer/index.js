import {ContentContainer, ImageContainer, Contact} from './styles';
import Card from '../Card';
import Image from 'next/image';

function Content() {
    return (
        <ContentContainer id="produtos">
            <h2>Sua melhor escolha para equipamentos anti-furto com qualidade e inovação</h2>

            <h3>Nossos Produtos</h3>
            <ImageContainer>
                <Card image="/Antena_AM_58k.png" title="Antena AM 58k" />
                <Card image="/Antena_RF_Henry.png" title="Antena RF Henry" />
                <Card image="/Tag_MD07_RF_8_2.png" title="Tag MD07 RF 8,2" />
                <Card image="/Tag_RF_Golfe.png" title="Tag RF Golfe" />
                <Card image="/Tag_MD07_RF8_2_preta.png" title="Tag MD07 RF8,2 preta" />
                <Card image="/Tag_RF_Mini_8_2.png" title="Tag RF Mini 8,2" />
                <Card image="/Tag_Garrafa.png" title="Tag Garrafa" />
            </ImageContainer>

            <h3>Fale Conosco</h3>

            <Contact id="contato">
                <div style={{ position: 'relative' }}>
                    <Image 
                        className="contactImage"
                        src="/contact.jpg" 
                        layout="fill" 
                        objectFit="cover"
                    />
                </div>
                <div>
                    <div>
                        <strong>Responsável</strong>
                        <p>Carlos Abílio</p>
                    </div>
                    <div>
                        <strong>Telefone</strong>
                        <p>(21)99968-8350</p>
                    </div>
                    <div>
                        <strong>Email</strong>
                        <p className="email">carlosabiliolopes@gmail.com</p>
                    </div>
                </div>
            </Contact>

        </ContentContainer>
    )
}

export default Content;