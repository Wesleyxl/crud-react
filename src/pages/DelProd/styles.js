import styled from 'styled-components';

export const ProdContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .alert-area {
        background-color: #FFC107;
        padding: 20px;
        border-radius: 20px;
    }
    .alert-area h1 {
        font-size: 20px;
    }

    .btn-area {
        margin-top: 20px;
        width: 300px;
        display: flex;
        justify-content: space-between;        
    }

`;
