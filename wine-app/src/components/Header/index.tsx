import React from 'react';

function WineHeader() {
  return(
    <header>
      <img src="wine.svg" alt="Wine logo" />
      <nav>
        <ul>
          <li>Clube</li>
          <li>Loja</li>
          <li>Produtores</li>
          <li>Ofertas</li>
          <li>Eventos</li>
        </ul>
      </nav>
      <img src="winebag.svg" alt="Ícone de usuário" />
      <img src="user.svg" alt="Ícone de usuário" />
      <img src="search.svg" alt="Ícone de usuário" />
    </header>
  );
}

export default WineHeader;
