import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    
    form {
        max-width: 700px;
        width: 100%;
        border: 1px solid #000;
        min-height: 500px;
        height: auto;
        padding: 20px;
        border-radius: 10px;
    }

    .btn-area {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`;
