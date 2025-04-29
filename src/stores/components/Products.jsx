import React from 'react'
import Computers from "./Computers";
import Ac from './Ac';
import Mobiles from './Mobiles';
import TV from './TV';
import Fridge from './Fridge';
import Watch from './Watch';
import Men from './Men';
import Women from './Women';
import Kitchen from './Kitchen';
import Books from './Books';
import Speakers from './Speakers';
import Furniture from './Furniture';
import Offers from './Offers';
import PsOffers from './PsOffers';
import ClothsOffer from './ClothsOffer';

const Products = () => {
  return (
    <div className='productss'>
      <h3> CEO & FOUNDER SIDDARTHA KONE</h3>
      <Offers/>
      <TV />
      <Computers />
      <Ac />
      <Mobiles />
      <Fridge />
      <Watch />
      <Men />
      <Women />
      <ClothsOffer />
      <Kitchen />
      <Books />
      <Speakers />
      <Furniture />
      <PsOffers />
      
 </div>
  );
};

export default Products;