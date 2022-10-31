import { useNavigate} from 'react-router-dom';

import './style.scss'
export default function IniciarSessao() {
    const navigate = useNavigate();
    return (
        <section id="sectionHomeLogin">
            <div id="loginFormWrap">
                <h2 id='tituloForm'>Iniciar Sessão</h2>
                <form action="">
                    <input className='inputHomeLogin' placeholder="   Escreva seu E-mail" type="email" />
                    <input className='inputHomeLogin' placeholder="   Escreva sua Senha" type="password" />
                    <input onClick={()=>navigate("/produtoscadastrados")} className='inputHomeLogin' id='buttonHomeLogin' value={'Entrar'} type="button" />
                </form>
            </div>
        </section>
    )
}