import styled from 'styled-components';

const CardContainer = styled.div`
    
    width: 200px;
    height: 300px;

    background-color: transparent;

    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        margin-bottom: 16px;
        border-bottom: 2px solid #1C211D;
	}
    
    img {
        width: 100%;
        height: 250px;
        border-radius: 8px 8px 0px 0px; 
    }

    span {
        color: #1C211D;
        background-color: transparent;
    }

`;

export default CardContainer;