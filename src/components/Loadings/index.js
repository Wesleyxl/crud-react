import React from 'react';

import { LoadContainer, Container } from './styles';
import img from '../../img/loading.png';

export function LoadSimple () {

    return (
        
        <Container>
            <LoadContainer>
                <div className="img-area">
                    <img src={img} alt="Wesley Alves"/>
                </div>
            </LoadContainer>
        </Container>

    );

}