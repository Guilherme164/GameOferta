import React from "react";
import CardJogos from '../CardJogos/CardJogos';

function ListaJogos({jogo,pagina,log}) {    
    //var pagina = 1; 
    /*const startIndex = ( pagina - 1 ) * 8;
    const selectedUsers = jogo.slice(startIndex, startIndex + 8);*/
    return jogo.map(jogo => (
        <CardJogos log={log}key={jogo.id} jogo={jogo}/>
    ))
  }
  
  export default ListaJogos;