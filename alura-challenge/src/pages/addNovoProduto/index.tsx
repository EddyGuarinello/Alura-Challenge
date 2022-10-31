import Rodape from "../../components/rodape";
import Nav from "../../components/nav";
import InfoAddProduto from "./components/infoAddProduto";


export default function AddNovoProduto(){
    return (
        <>
        <Nav logado={false}></Nav>
        <InfoAddProduto></InfoAddProduto>
        <Rodape></Rodape>
        
        </>
    )
}