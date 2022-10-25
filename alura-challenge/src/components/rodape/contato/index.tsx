import React from "react";
import './style.scss';

export default function Contato(){
    return(
        <>
       <h2 className="tituloContato">Fale conosco</h2>
       <form className="formFooter" action="">
        <input className="inputFooter" type="text" placeholder="Nome" />
        <input className="inputFooter" type="text" placeholder="Escreva sua mensagem"/>
        <button className="inputButton">Enviar Mensagem</button>
       </form>
       </>
    )
}