import Nav from "../../components/nav";
import Rodape from "../../components/rodape";
import MostrarProdutos from "./components/mostrarProdutos";

export default function HomeProdutos(){
    return(
        <>
        <Nav logado={false} ></Nav>
        <MostrarProdutos></MostrarProdutos>
        <Rodape></Rodape>
        </>
    )
}