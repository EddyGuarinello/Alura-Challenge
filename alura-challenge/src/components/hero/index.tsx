import React from 'react';
import './style.scss';

function Hero(){
    return (
        <section style={{ backgroundPosition:'center center', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundImage: `url(imgs/Hero.jpg)` }}>
           <div id='heroWrapper' >
            <h1>Dezembro Promocional</h1>
            <p>Produtos selecionados com 33% de desconto</p>
            <a id='verConsoles' href="www.google.com.br">Ver Consoles</a>
           </div>
        </section>
    )
}

export default Hero;