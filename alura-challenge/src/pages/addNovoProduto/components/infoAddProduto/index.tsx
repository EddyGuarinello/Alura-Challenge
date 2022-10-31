import "./style.scss"
export default function InfoAddProduto(){
    return(
        <section id="sectionInfoProduto">  
        <div id="infoProdutoWrap">
            <span id="addProdutoTitulo">
                <h2>Adicionar novo produto</h2>
            </span>
            <div id="produtoFormWrap">
            <form action="">
                <input className="inputInfoProduto" placeholder="   URL da imagem" type="text" />
                <input className="inputInfoProduto" placeholder="   Categoria" type="text" />
                <input className="inputInfoProduto" placeholder="   Nome do produto" type="text" />
                <input className="inputInfoProduto" placeholder="   Preço do produto" type="text" />
                <input className="inputInfoProduto" placeholder="   Descrição do produto" type="text" />
                <input className="inputInfoProduto" value="Adicionar Produto" type="button" />
            </form>
            </div>
        </div>
        </section>     
    )
}