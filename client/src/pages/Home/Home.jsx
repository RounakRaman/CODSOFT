import React from 'react';
import HomePro from '../../components/HomePro/HomePro';
import Imgshifter from '../../components/Imgshifter/Imgshifter';
import Categories from '../../components/Categories/Categories';

const Home = () => {
  return (
    <div className='flex flex-col w-full  '>
      <Imgshifter/>
      <HomePro type= 'Featured' />
      <Categories/>
      <HomePro type= 'Trending' />
    </div>
  )
}

export default Home
