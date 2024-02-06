import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { resetFav, removeFav } from '../../redux/wishlistReducer';
import { styles } from './styles';


const Wishlist = () => {
  
  const productsWishlist= useSelector(state=>state.wishlist.productsWishlist);
  const dispatch = useDispatch();
    

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>Products in your Wishlist</h1>
      {productsWishlist.length===0 ? <h1 className='relative top-[30px]'>Your wishlist is empty. Add products to favourite first.</h1> 
      : productsWishlist?.map((item)=> (
        <div className='flex  items-center gap-[20px] mb-[30px]  ' key={item.id}>
            <img src= {process.env.REACT_APP_UPLOAD_URL +item.img} className={styles.itemImg} alt=''/>
            <div className=''>
                <h1 className={styles.itemTitle}>{item.title}</h1>
                <p className={styles.itemDesc}>{item.desc?.substring(0,100)}</p>
                <div className={styles.price}>₹{item.newprice}</div>
            </div>
            <DeleteIcon onClick={()=>dispatch(removeFav(item.id))} className={styles.deleteIcon} />
        </div>
      ))}
      <div className={styles.subDiv}>
        <span onClick={()=>dispatch(resetFav())} className={styles.resetCart}>Reset Wishlist</span>
      </div>
    </div>
  )
}


export default Wishlist
