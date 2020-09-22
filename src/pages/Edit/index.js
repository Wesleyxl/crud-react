import React from 'react';

import { FormContainer } from './styles';
import { FormEditProd } from '../../components/Form';
import Btn, { BtnSubmit } from '../../components/Btn';

export default function Edit() {

    return(
        
        <FormContainer>
            <form>
                <FormEditProd />
                <div className="btn-area">
                    <BtnSubmit width={140} height={40} background={'green'} fontSize={20} name={"Editar"}  />
                    <Btn width={140} height={40} background={'blue'} fontSize={20} 
                        link={"/produtos"} name={"Voltar"}/>
                </div>
            </form>
        </FormContainer>
    );

}