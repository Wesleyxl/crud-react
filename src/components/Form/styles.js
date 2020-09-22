import styled from 'styled-components';

export const FormArea = styled.div`
    

    .title {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 35px;
    }
    
    .input {
        max-width: 500px;
        width: 100%;
        margin: 0 auto 20px;
    }

    .input input {
        width: 100%;
        height: 35px;
        border: 1px solid #DDD;
        border-radius: 10px;
        padding-left: 15px;
    }

    .text-area {
        max-width: 500px;
        width: 100%;
        margin: 0 auto 20px;
    }
    .text-area textarea {
        width: 100%;
        border: 1px solid #DDD;
        border-radius: 10px;
        padding: 10px 15px;
    }

    label {
        font-weight: bold;
    }


`;


export const FormAreaEdit = styled(FormArea)``;
