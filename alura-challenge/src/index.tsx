import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './pages/inicio';
import HomeLogin from './pages/homeLogin';
import HomeProdutos from './pages/homeProdutos';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>
);