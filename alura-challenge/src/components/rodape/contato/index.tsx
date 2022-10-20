import React from "react";
import './style.scss';

export default function Contato(){
    return(
        <>
       <h2 className="tituloContato">Fale conosco</h2>
       <form action="">
        <input className="inputFooter" type="text" placeholder="Nome" />
        <input className="inputFooter" type="text" placeholder="Escreva sua mensagem"/>
        <button>Enviar Mensagem</button>
       </form>
       </>
    )
}