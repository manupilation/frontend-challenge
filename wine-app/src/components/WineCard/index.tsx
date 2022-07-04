import React from 'react';
import { Wine } from '../../types/wine';
import WineDiv from './Styles';

function WineCard({ id, image, name, price, discount, priceMember, priceNonMember }: Wine ) {
  return(
    <WineDiv key={id}>
      <div className="wine-box">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <div className="normal-prices">
          <p className='normal-price'>R$ {price}</p>
          <p className='price-off'>{discount}% OFF</p>
        </div>
        <div className='is-member'>
          <h5 className='is-member-title'>SÓCIO WINE</h5>
          <h5 className="price-member">{`R$${priceMember}`}</h5>
        </div>
        <div className="not-member">
          <h5>NÃO SÓCIO</h5>
          <h5>{`R$${priceNonMember}`}</h5>
        </div>
      </div>
      <button type='button'>ADICIONAR</button>
    </WineDiv>
  )
}

export default WineCard;
