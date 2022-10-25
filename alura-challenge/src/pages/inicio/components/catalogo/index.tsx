import React from 'react';
import ListarProduto from './ListarProduto';
import './style.scss';

function Catalogo(){
    return(
        <>
        <ListarProduto nomeProduto='Star Wars'></ListarProduto>
        <ListarProduto nomeProduto='Consoles'></ListarProduto>
        <ListarProduto nomeProduto='Diversos'></ListarProduto>
        </>
    )
}

export default Catalogo;