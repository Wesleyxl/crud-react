import React, { useState, useEffect } from 'react';

import api from "../../services/api";
import Card from '../../components/Card';
import Btn from '../../components/Btn';
import { LoadSimple } from '../../components/Loadings';

import { Container } from './styles';

export default function Main (){

    const [data, setData] = useState([]);
    // const [config, setConfig ] = useState([]);

    useEffect( () => {

        async function fetchData() {
            
            
            const response = await api.get('/products');
            const data = response.data.data;
            // const config = response.data;

            setData(data);
            // setConfig(config);
        }
        
        fetchData()

    }, [] );

    var url = window.location.href;
    
    url = url.split('/');
    url = url[3];
    url = url.split('#');
    url = url[1];
    


    return (

        <Container>
            {url === 'deletado' ? <div className="alert-delete">Produto deletado com sucesso</div> : <div className="none"></div>}
            {url === 'cadastrado' ? <div className="alert-success">Produto cadastrado com sucesso</div> : <div className="none"></div>}
            { data.length > 1 ? 
                
                data.map( prod => (
                    <div className="card-area" key={prod.id}>
                        <Card key={prod.id} props={prod} showText={false} />
                        <div className="btn-area">
                            <Btn key={prod.id} link={"/produtos/"+prod.id} name={"Detalhe"} />
                        </div>
                    </div>
                
        ) ) : <LoadSimple/> }
        </Container>
        
    );  
}