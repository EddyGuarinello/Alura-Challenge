import React from 'react';
import Nav from '../../components/nav';
import Hero from './components/hero';
import Rodape from '../../components/rodape';
import Assinatura from '../../components/rodape/assinatura';
import Catalogo from './components/catalogo';

function Inicio() {
  return (
    <div className="App">
      <header>
        <Nav></Nav>
        <Hero></Hero>
      </header>
      <main>
      <Catalogo></Catalogo>
      </main>
      <footer style={{marginTop:"70px"}}>
        <Rodape></Rodape>
      </footer>
      <Assinatura></Assinatura>
    </div>
  );
}

export default Inicio;
