import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	
	* {
      margin: 0;
      padding: 0;
			border: 0;

			font-smoothing: antialiased;

			background-color: #FBF6EF;
			
			box-sizing: border-box;
	
			font-family: 'Montserrat', sans-serif;
		}

`
export const HeaderContainer = styled.header`
  width: 100%;
	padding: 30px 30px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	div {
		ul {
			margin-top: 50px;
			list-style: none;
			display: flex;

			li + li {
				margin-left: 50px;
			}
		}
	}
` 

export const Logo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;

	h3 {
		color: #2C494E;
		font-size: 50px;
	}

	span {
		font-style: italic;
		color: #497A83;
		font-size: 20px;
	}
}
`