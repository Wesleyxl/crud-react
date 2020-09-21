import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

import api from '../../services/api';
import Card from '../../components/Card';
import Btn from '../../components/Btn';

export default function Show() {

    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect( () => {

        async function fetchData() {
                
            const response = await api.get('/products/'+id);
            const datas = response.data;

            setData(datas);

        }

        fetchData();

    },[id] );

    return(

        <Container>
            <div className="card-area">
                <Card  props={data} showText={true} link={"/produtos"} />
                <div className="btn-area">
                    <Btn link={"/produtos"} name={"Voltar"} />
                    <Btn link={"/produtos/editar/"+data.id} name={"Editar"} background="blue" />
                </div>
            </div>
        </Container>

    );

}