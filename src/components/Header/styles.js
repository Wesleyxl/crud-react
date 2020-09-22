import styled from 'styled-components';

export const HeaderContainer = styled.div`
  
    width: 100%;
    height: 80px;
    background: #343434;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;

    nav ul {
        list-style: none;
        display: flex;
        width: 100%;
        height: 80px;
        justify-content: center;
        align-items: center;
    }
    
    nav ul li {
        margin: 0 10px;
    }
    
    nav ul li a {
        color: #FFF;
        text-decoration: none;
        font-size: 18px;
    }

    nav ul li a:hover {
        font-weight: bold;
    }

`;
