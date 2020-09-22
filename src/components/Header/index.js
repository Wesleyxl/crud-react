import React from 'react'

import { HeaderContainer } from './styles';

export default function Header() {

    return(

        <HeaderContainer>
            <nav>
                <ul>
                    <li><a href="/produtos" title="Produtos">Produtos</a></li>
                    <li><a href="/cadastro" title="Cadastro">Cadastro</a></li>
                </ul>
            </nav>
        </HeaderContainer>

    );

}