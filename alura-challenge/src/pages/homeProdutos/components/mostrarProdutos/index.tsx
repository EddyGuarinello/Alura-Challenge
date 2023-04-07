import "./style.scss";
import {MdDelete} from 'react-icons/md';
import {MdEdit} from 'react-icons/md';
import { useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Produto {
    NOME: string;
    CATEGORIA: string;
    PRECO: string;
    IMG: string;
    ID: number;
  }


export default function MostrarProdutos(){
const navigate = useNavigate();
const [produtos, setProdutos] = useState<Produto[]>([]);
    useEffect(() => {
        async function obterDadosDaApi() {
          const response = await fetch('https://api-challenge-eight.vercel.app/produtos');
          const data = await response.json();
          setProdutos(data);
        }
        obterDadosDaApi();
      }, []);
      
    return(
        <section id="todosProdutosSection">
            <div id="TPWrap">
                <div id="todosProdutosTituloWrap">
                    <h2 id="h2TodosProd">Todos os produtos</h2>
                    <button onClick={()=> navigate('/addproduto')} id="buttonAddProd">Adicionar produto</button>
                </div>
                <div id="listarProdWrap">       
                        {produtos.map((item, index)=>(
                            <div className="produtoContainer" key={uuidv4()}>
                                <MdDelete className="iconeProdutos"></MdDelete>
                                <MdEdit onClick={()=> navigate('/updateproduto')} className="iconeProdutos"></MdEdit>
                                <img className="imgsProd" src={item.IMG} alt="" />
                                <span>
                                <h3 className="h3Prod">{item.NOME}</h3>
                                <h3 className="h3Prod">{item.PRECO}</h3>
                                </span>
                            </div>
                        ))}
                   
                </div>
            </div>
        </section>
        
    )
}