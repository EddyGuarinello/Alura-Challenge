import teste from "./produtos.json";

function testando(valor?:any){

}

export default function MostrarProdutos(){
    return(
        <section>
            <div>
                <h2>Todos os produtos</h2>
                <button>Adicionar produto</button>
            </div>
            <div>
                {teste.map((item, index)=>(
                    <div>
                    <img src={item.img} alt="" />
                    <span>
                    <h3>{item.nome}</h3>
                    <h3>{item.preço}</h3>
                    </span>
                    </div>
                ))}
            </div>
        </section>
        
    )
}