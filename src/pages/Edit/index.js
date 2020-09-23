import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { FormContainer } from './styles';
import { FormEditProd } from '../../components/Form';
import Btn, { BtnSubmit } from '../../components/Btn';

export default function Edit() {


    const {id} = useParams();
    const [ product, setProduct ] = useState([]);

    useEffect( () => {

        async function fetchData() {

            const response = await api.get('/products/'+id);
            const data = response.data;
            setProduct(data);
        }

        fetchData();
    },[id]);

    return(
        
        <FormContainer>
            <form>
                <FormEditProd props={product}/>
                <div className="btn-area">
                    <BtnSubmit width={140} height={40} background={'green'} fontSize={20} name={"Editar"}  />
                    <Btn width={140} height={40} background={'blue'} fontSize={20} 
                        link={"/produtos"} name={"Voltar"}/>
                </div>
            </form>
        </FormContainer>
    );

}