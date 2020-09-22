import React from 'react';

import { FormArea, FormAreaEdit } from './styles';

export function FormRegisterProd() {

    return(

        <FormArea>
            <div className="title">
                <h1>Cadastrar Produtos</h1>
            </div>

            <div className="input-area">
                <div className="input">
                    <label htmlFor="text">Titulo: </label>
                    <input type="text" name="name" id="name" placeholder="Titulo do produto" />
                </div>
                <div className="text-area">
                    <label htmlFor="text">Descrição: </label>
                    <textarea name="description" id="description" rows="3" placeholder="Descrição do produto"></textarea>
                </div>
                <div className="text-area">
                    <label htmlFor="text">Texto: </label>
                    <textarea name="text" id="text" rows="5" placeholder="Texto do produto"></textarea>
                </div>
            </div>

        </FormArea>

    );

}


export function FormEditProd(props) {

    return(

        <FormAreaEdit>

            <div className="title">
                <h1>Editar Produtos</h1>
            </div>

            <div className="input-area">
                <div className="input">
                    <label htmlFor="text">Titulo: </label>
                    <input type="text" name="name" id="name" placeholder="Titulo do produto" />
                </div>
                <div className="text-area">
                    <label htmlFor="text">Descrição: </label>
                    <textarea name="description" id="description" rows="3" placeholder="Descrição do produto"></textarea>
                </div>
                <div className="text-area">
                    <label htmlFor="text">Texto: </label>
                    <textarea name="text" id="text" rows="5" placeholder="Texto do produto"></textarea>
                </div>
            </div>

        </FormAreaEdit>

    );

}