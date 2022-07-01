import React from 'react';
import { Wine } from '../../types/wine';

function WineCard({ id, image, name, price, discount, priceMember, priceNonMember }: Wine ) {
  return(
    <div key={id}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <div>
          <p>{price}</p>
          <p>{discount}</p>
        </div>
        <div>
          <h5>SÓCIO WINE</h5>
          <h5>{`R$${priceMember}`}</h5>
        </div>
        <div>
          <h5>NÃO SÓCIO</h5>
          <h5>{`R$${priceNonMember}`}</h5>
        </div>
    </div>
  )
}

export default WineCard;
