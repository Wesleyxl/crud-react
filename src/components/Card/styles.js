import styled from 'styled-components';

export const CardContainer = styled.div`
    max-width: 350px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-radius: 10px;
    padding: 20px;

    .title {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    .img-area {
        max-width: 350px;
        width: 100%;
        border-radius: 10px;
    }

    .img-area img {
        max-width: 350px;
        width: 100%;
        border-radius: 10px;
    }

    .description {
        border: 1px solid #EEE;
        padding: 10px;
        margin: 10px 0 20px;
        border-radius: 10px;
    }

    .description p {
        word-break: break-all;
    }

    .text {
        border: 1px solid #EEE;
        padding: 10px;
        margin: 10px 0;
        border-radius: 10px;
    }

    .text p {
        word-break: break-all;
    }

`;