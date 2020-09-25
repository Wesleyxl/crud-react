import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { FormContainer } from './styles';
import { FormEditProd } from '../../components/Form';
import Btn, { BtnSubmit } from '../../components/Btn';

export default function Edit() {


    const {id} = useParams();
    const [ product, setProduct ] = useState([]);
    const [error, setError] = useState(null);

    useEffect( () => {

        async function fetchData() {

            const response = await api.get('/products/'+id);
            const data = response.data;
            setProduct(data);
        }

        fetchData();
    },[id]);

    function handleChange(ev) {

        const { name, value } = ev.target;
        
        setProduct( { ...product, [name]: value } );

        console.log(product)
    }

    function handleSubmit(ev) {
        ev.preventDefault();

        api.post('/products/edit/'+id, product).then( (response) => {
           
            if ( response.data.errors ) {

                setError(response.data.errors);

            } else {

                // return window.location.href = "/produtos/"+id+'#editado';

            }

        })

    }

    return(
        
        <FormContainer>
            <form onSubmit={handleSubmit}>
            { error === null ? <div className="none"></div> : 
                <div className="error-area">
                    <span>{error.text}</span>
                    <span>{error.description}</span>
                    <span>{error.name}</span>
                </div>
            }
                <FormEditProd props={product} change={handleChange} />
                <div className="btn-area">
                    <BtnSubmit width={140} height={40} background={'green'} fontSize={20} name={"Editar"}/>
                    <Btn width={140} height={40} background={'blue'} fontSize={20} 
                        link={"/produtos"} name={"Voltar"}/>
                </div>
            </form>
        </FormContainer>
    );

}