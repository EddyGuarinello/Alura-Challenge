import React from 'react';
import './style.scss';
import Lista from '../lista';
import {AiOutlineArrowRight} from 'react-icons/ai'
import listaProdutos from "../../../../../data/produtos.json"

interface nomeDoProduto{
    nomeProduto : string
}

export default function ListarProduto(props: nomeDoProduto){
    const nomeDoProduto = props.nomeProduto;
    
    let produto = listaProdutos.filter(function(elemento:any){
        return (elemento.categoria == nomeDoProduto)
    })

  
    // let produto = Lista(nomeDoProduto);  
    
    return(
        <section id='sectionProduto'>
        <span className='productTitle'>
        <h2>{props.nomeProduto}</h2> <h2><a className='verTudoProduto' href="">Ver tudo<AiOutlineArrowRight className='arrow'></AiOutlineArrowRight></a></h2>
        </span>
        <div id='produtoWrap'>
        <div className='produtosWrap'>         
            {produto.map((item, index) =>(
                <div>
                <img src={item.img} alt="" />
                <span className='produtoInfos'>
                <h3 className='produtoNome'>{item.nome}</h3>
                <h3 className='produtoPreço'>{item.preço}</h3>
                <a href="">Ver produto</a>
                </span>
                </div>
            ))}          
        </div>
        </div>
    </section>
    )

}