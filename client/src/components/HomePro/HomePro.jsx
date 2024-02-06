import React from 'react'
import useFetch from '../../hooks/useFetch'   
import Card from '../Card/Card'
import './HomePro.css'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios'

const HomePro = ({type}) => {
  //format for filters is &[filters][field][id][operator]=value 
  const {data , loading , error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);  


  return (
    <div className='my-[200px] mx-[50px]'>                                             
      
        <div className='flex justify-center sm:justify-between items-center mb-[50px]'>                                         
          <h3 className='flex text-[22px] font-bold flex-1 sm:text-[30px] ml-[35px] font-serif '>{type} Products</h3>
          <p className='flex text-gray-500 flex-1 hidden md:block'>
            sfda dsflkjj dfskjld dslkjds dsfkjl jlkds dksjlf jkdfsa kjldfsa
            fdslkj ddkslfj dfsjlk fdsakjds dkjd dklas dfs jk lkdjfs ;lkj'll
            lkkljjlk; dfskjl; jlk s;ajldk kld; dskjl ds;fjlk ;jlkdsf ;lkdjfsd
            lk;jfds fdskjl;dsjk dslkj;
          </p>
        </div>
          




        <div className='flex relative mx-auto justify-center gap-[50px] flex-wrap xl:flex-nowrap'>                                          
          {error ? 'Something went wrong..' : loading ? 'loading' : data.map((item)=>{
            return(<Card item={item} key={item.id}/>)
          })}
        </div>

    </div>
  
  )
}

export default HomePro
