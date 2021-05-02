import React, { Fragment, useState, useEffect } from "react";
import ListaJogos from "../components/ListaJogos/ListaJogos";
import Paginacao from "../components/Paginacao";
import {connect} from '../connect';

function Home() {    
  const [jogo, setJogo] = useState([]); 
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  
  async function carregajogosini(){    
    const results = await connect.get();       
    setJogo(results.data);           
    setTotalPages(Math.ceil(results.data.length/ 5));
  };

    useEffect(() => {
    carregajogosini();
  }, []); 

  const handleClick = num => {
    setPage(num);
  }
  if (jogo.length>0) {
    return(
      <Fragment>
     <ListaJogos jogo={jogo} pagina={page}/>
    <Paginacao totalPages={totalPages} handleClick={handleClick}/>
    </Fragment>);              
    } else {
    return (<Fragment><h1>Carregando</h1></Fragment>);
  }
}

export default Home;