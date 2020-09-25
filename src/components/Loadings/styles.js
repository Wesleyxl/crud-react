import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 70vh;
`;

export const LoadContainer = styled.div`
    max-width: 100px;
    width: 100%;
    animation: ${rotation} 1.5s infinite;
    img {
        max-width: 100px;
        width: 100%;
    }
`;
