import React from 'react';

import { FormArea } from './styles'

const FormLogin = () => {

    function toLink() {

        window.location.href = "/produtos";

    }

    return (

        <FormArea>
            <div className="title">
                <h1>Login</h1>
            </div>
            <div className="input">
                <input type="text" name="email" id="email" placeholder="Seu Email" />
            </div>
            <div className="input">
                <input type="password" name="password" id="password" placeholder="Sua Senha" />
            </div>

            <div className="btn-area">
                <div className="btn">
                    <button onClick={toLink}>Logar</button>
                </div>
                <a href="/">Esqueceu a senha?</a>

            </div>

        </FormArea>

    )

}

export default FormLogin;