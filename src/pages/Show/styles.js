import styled from 'styled-components';

export const Container = styled.div`
    
    max-width: 1300px;
    height: 100vh;
    align-items: center;
    margin: 0 auto;
    display: flex;
    justify-content:center;

    .card-area {
        max-width: 350px;
        width: 100%;
        border: 1px solid #000;
        margin: 20px 15px; 
    }

    .btn-area {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 20px;
    }

    .alert-success {
        max-width: 500px;
        width: 100%;
        background-color:#28A745;
        padding: 20px 30px;
        position: fixed;
        top: 100px;
        left: 50%;
        margin-left: -250px;
        z-index: 2000;
        border-radius: 10px;
        color: #FFF;
    }

`;
