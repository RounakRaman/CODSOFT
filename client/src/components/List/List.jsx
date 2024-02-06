import React from 'react'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch';


const List = ({catId , subCatVizSelected, upperPriceLimit, sort }) => {
    
    // const data = [{
    //     id:1,
    //     img1:'https://m.media-amazon.com/images/I/81FW9aoVHfL._SX679_.jpg',
    //     img2:'https://m.media-amazon.com/images/I/81HmFORJ7TL._SX679_.jpg',
    //     title:'Acer Predator Neo16',
    //     isNew:true,
    //     oldPrice:'₹1,48,999',
    //     price:'₹1,29,990',
    //   },
    //   {
    //     id:2,
    //     img1:'https://m.media-amazon.com/images/I/41eSQvTbsaL._SX300_SY300_QL70_FMwebp_.jpg',
    //     img2:'https://m.media-amazon.com/images/I/71Mgi5phPNL._SX679_.jpg',
    //     title:'OnePlus 11 5G',
    //     isNew:true,
    //     oldPrice:'₹56999',
    //     price:'₹41990',
    //   },
    //   {
    //     id:3,
    //     img1:'https://m.media-amazon.com/images/I/31Ri-FAMBUL._SY445_SX342_QL70_FMwebp_.jpg',
    //     img2:'https://m.media-amazon.com/images/I/71djnhmfy-L._SX679_.jpg',
    //     title:'Apple Airpods (2nd Gen)',
    //     isNew:true,
    //     oldPrice:'₹14990',
    //     price:'₹9999',
    //   },
    //   {
    //     id:4,
    //     img1:'https://m.media-amazon.com/images/I/81cETcwV-jL._SX522_.jpg',
    //     img2:'https://m.media-amazon.com/images/I/81QUH8FJeSL._SX522_.jpg',
    //     title:'Asus TUF F15',
    //     isNew:true,
    //     oldPrice:'₹1,44,000',
    //     price:'₹1,13,990',
    //   },
    // ]


  const { data , loading , error} = useFetch( `/products?populate=*&[filters][category][id]=${catId}${subCatVizSelected.map((item)=>(`&filters[sub_categories][id][$eq]=${item}`))}&[filters][newprice][$lte]=${upperPriceLimit}&sort=newprice:${sort}` )  //subCatVizSelected is an array which changes according to our options which are checked
  //filters url format can be seen from strapi documentation --> restApi --> parameters

  return (
    <div>
      <div className='flex relative mx-auto my-[50px] justify-center gap-[50px] flex-wrap xl:flex-nowrap'>
        {error ? 'Something went wrong' : loading ? 'Loading..'
          : data.map((item)=>{
            return(<Card item={item} key={item.id}/>)
        })}
      </div>
    </div>
  )
}

export default List
