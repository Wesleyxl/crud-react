import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

import api from '../../services/api';
import Card from '../../components/Card';
import Btn from '../../components/Btn';
import { LoadSimple } from '../../components/Loadings';

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
    
    var url = window.location.href;
    url = url.split('/');
    url = url[4];
    url = url.split('#');   
    url = url[1];

    return(
        
        <Container>

            {url === 'editado' ? <div className="alert-success">Produto editado com sucesso</div> : ''}
            { data.length < 1 ? <LoadSimple/> :
                <div className="card-area">
                    <Card  props={data} showText={true} link={"/produtos"} />
                    <div className="btn-area">
                        <Btn link={"/produtos"} name={"Voltar"} />
                        <Btn  width={100} height={30} background={'red'} fontSize={20} color={'#FFF'} link={'/produtos/delete/'+data.id} name={"Apagar"} />
                        <Btn link={"/produtos/editar/"+data.id} name={"Editar"} background="blue" />
                    </div>
                </div>
            }
        </Container>

    );

}