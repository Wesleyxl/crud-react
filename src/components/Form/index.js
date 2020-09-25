import React, { useState } from 'react';

import api from '../../services/api';

import { FormArea, FormAreaEdit } from './styles';
import Btn, { BtnSubmit } from '../../components/Btn';

const initialValue = {
    name: "",
    description:"",
    text:""
}

export function FormRegisterProd() {

    const [ values, setValues ] = useState([initialValue]);
    const [error, setError] = useState(null);

    function handleChange(ev) {

        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });
    }


    function handleSubmit(ev) {

        ev.preventDefault();

        api.post('/products/create', values).then( (response) => {

            if ( response.data.errors ) {

                setError(response.data.errors);

            } else {

                return window.location.href = "/produtos#sucesso";
            }

        } )
        

    }
    return(

        <form onSubmit={handleSubmit}>
            <FormArea>
            { error === null ? <div className="none"></div> : 
                <div className="error-area">
                    <span>{error.texto}</span>
                    <span>{error.descrição}</span>
                    <span>{error.nome}</span>
                </div>
            }
                <div className="title">
                    <h1>Cadastrar Produtos</h1>
                </div>
            
                <div className="input-area">
                    <div className="input">
                        <label htmlFor="text">Titulo: </label>
                        <input type="text" name="nome" id="name" onChange={handleChange} placeholder="Titulo do produto" />
                    </div>
                    <div className="text-area">
                        <label htmlFor="text">Descrição: </label>
                        <textarea name="descrição" id="description" onChange={handleChange} rows="3" placeholder="Descrição do produto"></textarea>
                    </div>
                    <div className="text-area">
                        <label htmlFor="text">Texto: </label>
                        <textarea name="texto" id="text" rows="5" onChange={handleChange} placeholder="Texto do produto"></textarea>
                    </div>
                    <div className="btn-area">
                        <BtnSubmit width={140} height={40} background={'green'} fontSize={20} name={"Cadastrar"}  />
                        <Btn width={140} height={40} background={'blue'} fontSize={20} 
                            link={"/produtos"} name={"Voltar"}/>
                    </div>
                </div>
            </FormArea>
        </form>

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
                    <input type="text" name="name" id="name" placeholder="Titulo do produto" onChange={props.change} defaultValue={props.props.name}  />
                </div>
                <div className="text-area">
                    <label htmlFor="text">Descrição: </label>
                    <textarea name="description" id="description" rows="3" placeholder="Descrição do produto" onChange={props.change} defaultValue={props.props.description}></textarea>
                </div>
                <div className="text-area">
                    <label htmlFor="text">Texto: </label>
                    <textarea name="text" id="text" rows="5" placeholder="Texto do produto" onChange={props.change} defaultValue={props.props.text}></textarea>
                </div>
            </div>

        </FormAreaEdit>

    );

}