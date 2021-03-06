import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';

import LogoImg from '.src/pages/assets/logo.svg';

export default function Register(){
    return (
        <div className="register-container">
                <div className="content">
                <section>
                <img src={LogoImg} alt="Be The Hero"/>
                    <h1>Faça seu cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
                    <Link className=".back-link" to="/register">
                    <FiArrowLeft size={16} color="#E02041"/>
                     Nao tenho cadastro
                 </Link>
                </section>
                <form>
            <input placeholder="Nome da ONG"/>
            <input type="email" placeholder="email" />
            <input placeholder="Whatsapp"/>

            <div className="input-group">
                <input placeholder="cidade"/>
                <input placeholder="UF" style={{width: 80 }}/>
            </div>
<button className="button" type="submit">Cadastra</button>
                </form>
                </div>

        </div>
    )
}