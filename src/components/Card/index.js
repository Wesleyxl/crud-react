import React from 'react';

import { CardContainer } from './styles';


export default function Card({props, showText, link}) {

    return(
        <CardContainer>
            <div className="title">
                <h1>{props ? props.name : ''}</h1>
            </div>
            <div className="description">
                <p><strong>Descrição: </strong>{props ? props.description : ''}</p>
            </div>
            {showText === true ? 
                <div className="text">
                    <strong>Texto: </strong><p>{props.text}</p>
                </div>
                :
                <div></div>
            }

        </CardContainer>
    )
}