import React from 'react'
import { useParams } from 'react-router-dom';

import Btn from '../../components/Btn'; 
import api from '../../services/api';

import { ProdContainer } from './styles';

export default function DelProd() {

    const {id} = useParams();

    function handleDetete() {

        api.get('/products/delete/'+id).then( (response) => {

            if ( response.data.status === true ) {

                return window.location.href = "/produtos#deletado";
                
            }

        } );

    }

    return(

        <ProdContainer>
            <div className="alert-area">
                <h1>Deseja realmente excluir este produto?</h1>
            </div>
                <div className="btn-area">
                    <Btn name={"Sim"} background={"#28A745"} click={handleDetete} />
                    <Btn name={'Não'} background={"#007BFF  "} link={'/produtos/'+id} />
                </div>
        </ProdContainer>
    );

}