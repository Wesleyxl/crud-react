import React from 'react';

import { BtnContainer } from './styles'

export default function Btn(props)  {

    return (
        <BtnContainer width={props.width} height={props.height} background={props.background} >
            <a href={props.link} >{props.name ? props.name : "Button"}</a>
        </BtnContainer>
    );

}
export function BtnSubmit(props) {
    return (
        <BtnContainer width={props.width} height={props.height} background={props.background} color={props.color} >
            <button type="submit">{props.name ? props.name : "Submit" }</button>
        </BtnContainer>
    );
}