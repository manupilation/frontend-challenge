import React from 'react';
import HeaderWrapper from './Style';



function WineHeader() {
  return(
    <HeaderWrapper>
      <span>
        <a href="/"><img src="wine.svg" alt="Wine logo" /></a>
        <nav>
          <ul>
            <li><a href="https://www.wine.com.br/clubewine/">Clube</a></li>
            <li><a href="https://www.wine.com.br/loja-vinhos">Loja</a></li>
            <li><a href="https://www.wine.com.br/loja/produtor/">Produtores</a></li>
            <li><a href="https://www.wine.com.br/vinhos-promocao">Ofertas</a></li>
            <li><a href="https://we.wine.com.br/">Eventos</a></li>
          </ul>
        </nav>
      </span>
      <div>
        <img src="search.svg" alt="Ícone de usuário" />
        <img src="user.svg" alt="Ícone de usuário" />
        <img src="winebag.svg" alt="Ícone de usuário" />
      </div>
    </HeaderWrapper>
  );
}

export default WineHeader;
