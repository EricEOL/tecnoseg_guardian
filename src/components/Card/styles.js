import styled from 'styled-components';

const CardContainer = styled.div`
    
    width: 200px;
    height: 300px;

    border-radius: 8px;
    background-color: #fff;

    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
    }
    
    img {
        width: 100%;
        height: 250px;
        border-radius: 8px 8px 0px 0px; 
    }

    span {
        color: #1C211D;
        background-color: #fff;
    }

`;

export default CardContainer;