import CardContainer from './styles';
import Image from 'next/image';

function Card({image, title}) {
    return (
        <CardContainer>
            <Image 
                src={image}
                width={200}
                height={250}
            />
            <span>{title}</span>
        </CardContainer>
    )
}

export default Card;