import styled from 'styled-components';

export const ContentContainer = styled.div`

	margin-top: 40px;

	text-align: center;


	h2 {
		font-size: 25px;
		font-weight: normal;
		font-style: italic;

		text-shadow: 2px 2px 4px #BDC7BF;

		margin-bottom: 30px;
	}
`

export const ImageContainer = styled.div`
	display: flex;

	justify-content: space-evenly;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
	}

	background-color: #fff;

	padding: 15px;
`

export const Contact = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	margin-top: 40px;

	h3 {
		font-size: 30px;
		font-weight: normal;

		margin-bottom: 20px;
	}

	table {
		font-size: 20px;
		margin-bottom: 80px;

		@media (max-width: 768px) {
			font-size: 16px;
		}

		thead tr th {
			background: #2C494E;
			color: #fff;
			padding: 10px;
		}

		tbody tr td {
			padding: 10px;
			background: #fff;
		}
	}
`