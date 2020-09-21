import React from 'react';

import { BtnContainer } from './styles'

export default function Btn(props)  {

    return (
        <BtnContainer width={props.width} height={props.height} background={props.background} >
            <a href={props.link} >{props.name}</a>
        </BtnContainer>
    );

}