import React from 'react';

function SearchForm() {
  return(
    <div>
      <h2>Refine sua busca</h2>
      <form>Por preço
        <input type="radio" name="limit_price" id="under40" value="Até R$40,00" />
        <label htmlFor="under40">Até R$40,00</label>
        <input type="radio" name="limit_price" id="40a60" value="R$40 A R$60"/>
        <label htmlFor="40a60">R$40 A R$60</label>
        <input type="radio" name="limit_price" id="100a0120" value="R$100 A R$200"/>
        <label htmlFor="100a0120">R$100 A R$200</label>
        <input type="radio" name="limit_price" id="200a500" value="R$200 A R$500"/>
        <label htmlFor="200a500">R$200 A R$500</label>
        <input type="radio" name="limit_price" id="upper500" value="Acima de R$500"/>
        <label htmlFor="upper500">Acima de R$500</label>
      </form>
    </div>
  )
}

export default SearchForm;
