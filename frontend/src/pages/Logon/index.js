import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import {FiLogIn} from './node_modules/react-icons/fi';


import './styles.css';

import LogoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return(
       <div className="logon-container">
          <section className="form">
             <img src={LogoImg} alt="Be The Hero"/>

             <form>
                 <h1>Faça seu Logon</h1>

                 <input placeholder="Sua ID"/>
                 <button className="button" type="submit">Entrar</button>
                 <Link className=".back-link" to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                     Nao tenho cadastro
                 </Link>
             </form>
            </section>

            <img src= {heroesImg} alt="heroes"/>

       </div>
    );
}