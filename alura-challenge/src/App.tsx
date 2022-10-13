import React from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import Catalogo from './components/catalogo';

function App() {
  return (
    <div className="App">
      <header>
        <Nav></Nav>
        <Hero></Hero>
      </header>
      <span>
      <Catalogo></Catalogo>
      </span>
    </div>
  );
}

export default App;
