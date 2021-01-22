import Head from '../Head';
import {GlobalStyle, HeaderContainer, Logo} from './styles';

function Header() {
    return (
        <>
        <Head title="Tecnoseg Guardian"/>

        <HeaderContainer>
            <Logo>
                <h3>TECNOSEG</h3>
                <span>Guardian</span>
            </Logo>

            <div>
                <ul>
                    <li>Produtos</li>
                    <li>Contato</li>
                </ul>
            </div>
        </HeaderContainer>

        <GlobalStyle />
        </>
    )
}

export default Header;