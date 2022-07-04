import React, { useEffect, useState } from 'react';
import { Requests } from '../../utils/Request';
import { Wine } from '../../types/wine';
import WineCard from '../WineCard';
import DivWrapper from './Style';

export default function WinesList(props: { sortSl: string }) {
  const [listWines, setListWines] = useState<Wine[]>([]);
  useEffect(() => {
    async function getWines() {
      try {
        const { data: { items } } = await Requests.requestWines()
        setListWines(items);
      } catch(err) {
        console.error("Error 500")
        setListWines([]);
      }
    };
    getWines()
  });



  return(
    <DivWrapper>
      { listWines && listWines.map((product) => <WineCard {...product} />) }
    </DivWrapper>
  );
}