import React from 'react'
import BestSall from '../Components/BestSall';
import Items from '../Components/Items';
import Naav from '../Components/Naav';
import Purchase from '../Components/Purchase';
import Slide from '../Components/Slide';
import Vintage from '../Components/Vintage';

const Home = () => {
  return (
    <div className='mt-5 pt-2' style={{backgroundColor: 'black'}}>
      <Naav />
      <Slide />
      <Items />
      <BestSall />
      <Purchase />
      <Vintage />
    </div>
  )
}

export default Home;
