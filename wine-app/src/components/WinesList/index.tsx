import React, { useEffect, useState } from 'react';
import { Requests } from '../../utils/Request';
import { Wine } from '../../types/wine';
import WineCard from '../WineCard';

export default function WinesList() {
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
    <div>
      { listWines && listWines.map((product) => <WineCard {...product} />) }
    </div>
  );
}