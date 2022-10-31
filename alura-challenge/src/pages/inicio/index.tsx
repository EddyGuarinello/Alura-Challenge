import React from 'react';
import Nav from '../../components/nav';
import Hero from '../inicio/components/Hero';
import Rodape from '../../components/rodape';
import Assinatura from '../../components/rodape/assinatura';
import Catalogo from './components/catalogo';

function Inicio() {
  return (
    <div className="App">
      <header>
        <Nav logado={true}></Nav>
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
