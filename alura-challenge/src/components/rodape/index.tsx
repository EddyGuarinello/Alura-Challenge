import React from 'react';
import './style.scss';
import Contato from './contato';
export default function Rodape(){
    return(
        <footer>
    <div className='footerWrap'>
        <div className='footerLogo'>
            <img className='logoContato' src="imgs/Logo.png" alt="" />
        </div>
        <div className='footerLinks'>
            <a href="www.google.com.br">Quem somos nós</a>
            <a href="www.google.com.br">Política de privacidade</a>
            <a href="www.google.com.br">Programa fidelidade</a>
            <a href="www.google.com.br">Nossas Lojas</a>
            <a href="www.google.com.br">Quero ser franqueado</a>
            <a href="www.google.com.br">Anuncie aqui</a>
        </div>
        <div className='footerContato'>
            <Contato></Contato>
        </div>
    </div>
</footer>
    )

}