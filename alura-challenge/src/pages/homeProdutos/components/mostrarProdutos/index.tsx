import teste from "../../../../data/produtos.json";
import "./style.scss";
import {MdDelete} from 'react-icons/md';
import {MdEdit} from 'react-icons/md';

export default function MostrarProdutos(){
    return(
        <section id="todosProdutosSection">
            <div id="TPWrap">
                <div id="todosProdutosTituloWrap">
                    <h2 id="h2TodosProd">Todos os produtos</h2>
                    <button id="buttonAddProd">Adicionar produto</button>
                </div>
                <div id="listarProdWrap">       
                        {teste.map((item, index)=>(
                            <div className="produtoContainer">
                                <MdDelete className="iconeProdutos"></MdDelete>
                                <MdEdit className="iconeProdutos"></MdEdit>
                                <img className="imgsProd" src={item.img} alt="" />
                                <span>
                                <h3 className="h3Prod">{item.nome}</h3>
                                <h3 className="h3Prod">{item.preço}</h3>
                                <h3 className="h3Prod">{item.id}</h3>
                                </span>
                            </div>
                        ))}
                   
                </div>
            </div>
        </section>
        
    )
}