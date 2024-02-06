import React from 'react'
import { useState } from 'react';
import './Product.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareIcon from '@mui/icons-material/Compare';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartReducer';
import { addFav } from '../../redux/wishlistReducer';
import { styles } from './styles';


const Product = () => {
  
  const id = useParams().id;

  const {data, loading} = useFetch(`/products/${id}?populate=*`);  // ?populate=* is necessary else aint gonna fetch images

  const [img,setImg] = useState('img3');

  const [currentQuantity,setCurrentQuantity] = useState(1);

  const dispatch = useDispatch();


  return (
    
    <div className={styles.mainDiv}>
    
    {loading ? 'loading' : (<>
      <div className='flex flex-1 justify-between'>              {/*left*/}
      
          <div className='flex flex-col flex-1 w-full h-full '>          {/*side img container*/}
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img3?.data?.attributes?.url} alt='' className={styles.sideImg} onClick={()=>{setImg('img3')}}/>
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img1?.data?.attributes?.url} alt='' className={styles.sideImg} onClick={()=>{setImg('img1')}}/>
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt='' className={styles.sideImg} onClick={()=>{setImg('img2')}}/>
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img4?.data?.attributes?.url} alt='' className={styles.sideImg} onClick={()=>{setImg('img4')}}/>
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img5?.data?.attributes?.url} alt='' className={styles.sideImg} onClick={()=>{setImg('img5')}}/>
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img6?.data?.attributes?.url} alt='' className={styles.sideImg} onClick={()=>{setImg('img6')}}/>
          </div>
          
          <div className='main-image ml-[20px] my-auto '>
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.[img]?.data?.attributes?.url} alt='' className='product-mainimg'></img>
          </div>
          
      </div>
      
      
      <div className={styles.infoDiv}>              {/*right*/}
        <h1 className='text-[30px]'>{data?.attributes?.title}</h1>
        <span className='text-[30px] text-[#2879fe] text-[500]'>₹{data?.attributes?.newprice}</span>
        
        <p className='text-[13px] text-[300] text-justify '>
          {data?.attributes?.desc}
        </p>
        
        <div className='flex items-center gap-[10px]'>
          <button className={styles.currentQuantity} onClick={()=>setCurrentQuantity((prev)=>(prev === 1 ? 1 : prev-1))}>-</button>
          {currentQuantity}
          <button className={styles.currentQuantity} onClick={()=>setCurrentQuantity((prev)=>(prev+1))}>+</button>
        </div>
        
        {/* passing an object */}
        <button onClick={()=>dispatch(addItem({
          id:data.id,
          title:data.attributes.title,
          desc:data.attributes.desc,
          newprice:data.attributes.newprice,
          img:data.attributes.img1.data.attributes.url,
          currentQuantity,
        }))} className={styles.cartButton}>
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        
        <div className='flex gap-[20px] '>
          <button onClick={()=>dispatch(addFav({
            id:data.id,
            title:data.attributes.title,
            desc:data.attributes.desc,
            newprice:data.attributes.newprice,
            img:data.attributes.img1.data.attributes.url,
            currentQuantity,
          }))} className={styles.wishlistButton}>
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </button>
          <div className={styles.compare}>
            <CompareIcon/> ADD TO COMPARE
          </div>
        </div>
        
        <div className={styles.extraInfo}>
          <span className={styles.extroInfoTitle}>VENDOR</span>
          <hr className={styles.hr}/>
          <span className={styles.extroInfoTitle}>PRODUCT TYPE</span>
          <hr className={styles.hr}/>
          <span className={styles.extroInfoTitle}>TAGS</span>
        </div>
        
        <hr className={styles.hr}/>
        
        <div className={`${styles.extraInfo} mb-[10px]`}>
          <span className={styles.extroInfoTitle}>DESCRIPTION</span>
          <hr className={styles.hr}/>
          <span className={styles.extroInfoTitle}>ADDITIONAL INFORMARTION</span>
          <hr className={styles.hr}/>
          <span className={styles.extroInfoTitle}>FAQ</span>
        </div>
        
      </div>
    </>) }
    
    </div>
  )
}

export default Product
