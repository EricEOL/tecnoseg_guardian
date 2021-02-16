import styled from 'styled-components';

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 40px;

	text-align: center;


	h2 {
		font-size: 25px;
		font-weight: normal;
		font-style: italic;

		text-shadow: 2px 2px 4px #BDC7BF;

	}

	h3 {
		font-size: 25px;
		font-weight: normal;

		background: linear-gradient(to left, #497A83 50%, #2C494E);
		color: #fff;

		margin-top: 40px;
		margin-bottom: 20px;
		padding: 5px;

		border-radius: 8px;
	}
`

export const ImageContainer = styled.div`
	display: flex;
	width: 95%;
	padding: 15px;

	justify-content: space-evenly;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
	}

	background-color: #fff;
	box-shadow: 0 0 20px #999;
	border-radius: 8px;
`

export const Contact = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	border-radius: 8px;

	width: 80%;
	height: 400px;

	margin-bottom: 40px;

	background: #fff;
	box-shadow: 0 0 20px #999;

	@media (max-width: 768px) {
		width: 95%;

		font-size: 12px;
	}

	.contactImage {
		border-radius: 8px 0 0 8px;
	}

	> div {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: flex-start;

		border-radius: 8px;

		background: #fff;

		width: 50%;
		height: 400px;

		div {
			text-align: left;
			margin: 30px;

			background: #fff;
			strong, p {
				background: #fff;
			}

			strong {
				background: #497A83;
				color: #fff;
				padding: 4px;
				border-radius: 4px;
				font-size: 16px;
			}

			p {
				margin-top: 8px;
			}

			@media (max-width: 768px) {
				.email {
					font-size: 9px;
				}
			}
		}
	}

`