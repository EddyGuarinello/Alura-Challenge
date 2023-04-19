import { IProduto } from "../../../../types/produto";
import "./style.scss"
import { v4 as uuidv4 } from 'uuid';
export default function InfoAddProduto(){
    function enviarDados() {
        interface Produto {
            NOME: string;
            CATEGORIA: string;
            PRECO: string;
            IMG: string;
            ID: number;
          }
        const produto = {
            categoria: (document.querySelector('input[name="categoria"]') as HTMLInputElement).value,
            nome: (document.querySelector('input[name="nome"]') as HTMLInputElement).value,
            preco: (document.querySelector('input[name="preco"]') as HTMLInputElement).value,
            link: "",
            id: uuidv4(),
            img: (document.querySelector('input[name="img"]') as HTMLInputElement).value
          };
        fetch('https://api-challenge-eight.vercel.app/produtos', {
          method: 'POST',
          body: JSON.stringify(produto),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
    return(
        <section id="sectionInfoProduto">  
        <div id="infoProdutoWrap">
            <span id="addProdutoTitulo">
                <h2>Adicionar novo produto</h2>
            </span>
            <div id="produtoFormWrap">
            <form action="">
                <input className="inputInfoProduto" placeholder="   URL da imagem" type="text" name="img"/>
                <input className="inputInfoProduto" placeholder="   Categoria" type="text" name="categoria"/>
                <input className="inputInfoProduto" placeholder="   Nome do produto" type="text" name="nome"/>
                <input className="inputInfoProduto" placeholder="   Preço do produto" type="text" name="preco"/>
                <input className="inputInfoProduto" placeholder="   Descrição do produto" type="text" />
                <input className="inputInfoProduto" value="Adicionar Produto" type="button" onClick={enviarDados} />
            </form>
            </div>
        </div>
        </section>     
    )
}