import React from 'react';
import './style.scss';

export default function Hero(){
    return (
        <section className='heroSection' style={{ backgroundPosition:'center center', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundImage: `url(imgs/Hero.jpg)` }}>
           <div id='heroWrapper' >
            <h1>Dezembro Promocional</h1>
            <p>Produtos selecionados com 33% de desconto</p>
            <a id='verConsoles' href="heroSection">Ver Consoles</a>
           </div>
        </section>
    )
}