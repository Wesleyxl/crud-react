import styled from 'styled-components';

export const Container = styled.div`

    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 50px;
    @media(max-width: 760px) {
        justify-content: center;
    }
    .card-area {
        border: 1px solid #000;
        margin: 20px 15px; 
    }
    .card-area .btn-area {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
`;
