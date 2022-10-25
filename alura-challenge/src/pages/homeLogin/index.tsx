import Nav from '../../components/nav';
import Rodape from '../../components/rodape';
import IniciarSessao from './components/iniciarSessao';


export default function HomeLogin(){
    return(
        <>
            <Nav></Nav>
            <IniciarSessao></IniciarSessao>
            <Rodape></Rodape>
        </>
    )
}