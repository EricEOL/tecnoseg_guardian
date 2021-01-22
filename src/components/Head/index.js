import NextHead from 'next/head';

function Head({title}) {
    return (
        <NextHead>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;1,400&display=swap" rel="stylesheet" /> 
            <title>
                {title}
            </title>
        </NextHead>
    );
}

export default Head;