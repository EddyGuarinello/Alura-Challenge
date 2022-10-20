import React from 'react';
import './style.scss';
import Contato from './contato';
export default function Rodape(){
    return(
        <footer>
    <div className='footerWrap'>
        <div className='footerLogo'>
            <img src="imgs/Logo.png" alt="" />
        </div>
        <div className='footerLinks'>
            <a href="">Quem somos nós</a>
            <a href="">Política de privacidade</a>
            <a href="">Programa fidelidade</a>
            <a href="">Nossas Lojas</a>
            <a href="">Quero ser franqueado</a>
            <a href="">Anuncie aqui</a>
        </div>
        <div className='footerContato'>
            <Contato></Contato>
        </div>
    </div>
</footer>
    )

}