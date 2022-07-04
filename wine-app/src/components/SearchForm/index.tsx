import React from 'react';
import SectionWrapper from './Style';

function SearchForm(props: { sortOp: React.Dispatch<React.SetStateAction<string>> }) {
  function handleValue(event: React.FormEvent<HTMLFormElement>) {
    const target = event.target as HTMLFormElement;
    props.sortOp(target.value)
    return;
  }

  return(
    <SectionWrapper>
      <h2>Refine sua busca</h2>
      <form onChange={ (event) => handleValue(event) }>
        <h4>Por preço</h4>
        <div>
          <input type="radio" name="limit_price" id="under40" value="<40"/>
          <label htmlFor="under40">Até R$40,00</label>
        </div>
        <div>
          <input type="radio" name="limit_price" id="40a60" value="40-60"/>
          <label htmlFor="40a60">R$40 A R$60</label>
        </div>
        <div>
          <input type="radio" name="limit_price" id="100a0120" value="100-200"/>
          <label htmlFor="100a0120">R$100 A R$200</label>
        </div>
        <div>
          <input type="radio" name="limit_price" id="200a500" value="200-500"/>
          <label htmlFor="200a500">R$200 A R$500</label>
        </div>
        <div>
          <input type="radio" name="limit_price" id="upper500" value="500>"/>
          <label htmlFor="upper500">Acima de R$500</label>
        </div>
      </form>
    </SectionWrapper>
  )
}

export default SearchForm;
