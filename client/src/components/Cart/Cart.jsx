import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch, useSelector} from 'react-redux'
import { removeItem, resetAll } from '../../redux/cartReducer';

import {loadStripe} from '@stripe/stripe-js';
import { axiosBaseReqAdd } from '../../axiosBaseReqAdd';
import { styles } from './styles';

const Cart = () => {

  const products = useSelector((state)=>state.cart.products)     // .CARTNAME = cart AND .STATENAME = products
  const dispatch= useDispatch();
  
  
  const totalAmount = () => {
    let total=0;
    products.forEach((item)=>{total += item.currentQuantity * item.newprice});
    return total.toFixed(2);
  }
  
  
  const stripePromise = loadStripe(
    'pk_test_51NMDEtSBqs28VJIfIO1acTGiF5lvHbzxvU487VsfVrvaGuoB5zBmyTPgOIjH9YhLeIXHuDVh5Rx4MgIDzwzuGdbd00lAz6cVyi'
  );
  
  const handlePayment = async () =>{
    try{
      const stripe = await stripePromise;
      
      const res = await  axiosBaseReqAdd.post('/orders',{
        products,
      });
      
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    }
    catch(err){
      console.log(err);
    }
  }
  
  
  
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>Products in your cart</h1>
      {products.length===0 ? <h1 className='relative top-[30px]'>Your cart is empty. Add products to cart first.</h1>
      : products?.map((item)=> (
        <div className='flex  items-center gap-[20px] mb-[30px]  ' key={item.id}>
            <img src= {process.env.REACT_APP_UPLOAD_URL + item.img} className={styles.itemImg} alt=''/>
            <div className=''>
                <h1 className={styles.itemTitle}>{item.title}</h1>
                <p className={styles.itemDesc}>{item.desc?.substring(0,100)}</p>
                <div className={styles.itemPrice}>{item.currentQuantity} x {item.newprice}</div>
            </div>
            <DeleteIcon onClick={()=>dispatch(removeItem(item.id))} className={styles.deleteIcon} />
        </div>
      ))
      }
      
      <div className='absolute bottom-[20px]' >
      <div className='flex justify-between text-[500] text-[11px] sm:text-[18px] mb-[20px] '>
        <span>SUBTOTAL</span>
        <span>₹{totalAmount()}</span>   {/* function gonna run everytime */}
      </div>
      <div className='gap-[50px] sm:gap-[0px] flex flex-row justify-between sm:justify-none sm:flex-col'>
        <button onClick={handlePayment} className={styles.checkoutButton}>PROCEED TO CHECKOUT</button>
        <span onClick={()=>dispatch(resetAll())} className={styles.resetCart}>Reset Cart</span>
      </div>
      </div>
      
    </div>
  )
}


export default Cart
