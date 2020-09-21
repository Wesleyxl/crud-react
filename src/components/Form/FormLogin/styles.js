import styled from 'styled-components';

export const FormArea = styled.div`
    max-width: 700px;
    width: 100%;
    border: 1px solid #000;
    height: 400px;
    padding: 20px;

    .title {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
    }

    .input {
        max-width: 300px;
        width: 100%;
        height: 50px;
        border-radius: 10px;
        margin: 0 auto 30px;
    }

    .input input {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: 1px solid #EEE;
        padding-left: 15px;
    }

    .input input:focus {
        border: 1px solid #000;
    }

    .btn-area {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .btn-area .btn {
        width: 100px;
        height: 40px;
        border: 1px solid #EEE;
        margin-bottom: 20px;
    }
    .btn-area .btn:hover {
        transform: scale3d(1.1,1.1,1.1);
    }
    .btn-area .btn button {
        width: 100%;
        height: 100%;
        border: none;
        background: none;
    }
    .btn-area .btn button:hover {
        cursor: pointer;
        transform: scale3d(1.1,1.1,1.1);
    }

    

`;
