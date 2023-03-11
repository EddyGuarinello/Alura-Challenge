import React from 'react';
import './style.scss';
import Lista from '../lista';
import { v4 as uuidv4 } from 'uuid';
import {AiOutlineArrowRight} from 'react-icons/ai'

import { useState, useEffect } from 'react';

const id = uuidv4;

interface nomeDoProduto{
    nomeProduto : string
}
interface Produto {
    NOME: string;
    CATEGORIA: string;
    PRECO: string;
    IMG: string;
  }

export default function ListarProduto(props: nomeDoProduto){
    const [produtos, setProdutos] = useState<Produto[]>([]);
    useEffect(() => {
        async function obterDadosDaApi() {
          const response = await fetch('https://api-challenge-kohl.vercel.app/produtos');
          const data = await response.json();
          setProdutos(data);
        }
        obterDadosDaApi();
      }, []);


    const nomeDoProduto = props.nomeProduto;
    
    let produto = produtos.filter(function(elemento:any){
        return (elemento.CATEGORIA == nomeDoProduto)
    }) 
    console.log(produto)

    return(
        <section id='sectionProduto'>
        <span className='productTitle'>
        <h2>{props.nomeProduto}</h2> <h2><a className='verTudoProduto' href="">Ver tudo<AiOutlineArrowRight className='arrow'></AiOutlineArrowRight></a></h2>
        </span>
        <div id='produtoWrap'>
        <div className='produtosWrap'>         
            {produto.map((item, index) =>(
                <div key={uuidv4()}>
                <img src={item.IMG} alt="" />
                <span className='produtoInfos'>
                <h3 className='produtoNome'>{item.NOME}</h3>
                <h3 className='produtoPreço'>{item.PRECO}</h3>
                <a href="">Ver produto</a>
                </span>
                </div>
            ))}          
        </div>
        </div>
    </section>
    )

}