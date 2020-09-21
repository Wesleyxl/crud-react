import styled from 'styled-components';

export const BtnContainer= styled.div`

    width: ${ props => props.width ? `${props.width}px` : '100px'};
    height: ${props => props.height ? `${props.height}px` : '30px'};
    background: ${ props => props.background ? `${props.background}`: "#000"};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    :hover {
        transform: scale3d( 1.05, 1.05, 1.05 );
        cursor: pointer;
    }

    a {
        width: 100%;
        height: 100%;
        color: ${ props => props.color ? `${props.color}px` : "#FFF"};
        text-decoration: none;
        text-align: center;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a:hover {
        font-weight: bold;
    } 
`;
