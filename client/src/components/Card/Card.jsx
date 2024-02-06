import React from 'react'
import { Link } from 'react-router-dom'
import {Tilt} from 'react-tilt'
import { useState } from 'react'
import { styles } from './styles'


const Card = ({item}) => {
  
  const [toggle , setToggle] = useState(false);

  const showSecondImg = () => {
    setToggle(true)
  }
  const showFirstImg = () =>{
    setToggle(false)
  }


  return (
    
      <Link to = {`/product/${item.id}`}>
        <Tilt className={styles.mainContainer} onMouseEnter={showSecondImg} onMouseLeave={showFirstImg} >                                                                               {/*Card container*/}
            <div className={styles.imgDiv}  >                                                                    {/*Image thumbnails*/}
              {item?.attributes.isNew && <span className={styles.season}>New Season</span>}
              {!toggle && <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img1?.data?.attributes?.url} alt='' className={styles.img} />}
              {toggle && <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img2?.data?.attributes?.url} alt='' className={styles.img}  />}
            </div>


            <h2 className='text-[16px] text-[400] text-center '>{item?.attributes.title}</h2>

            <div className='flex gap-[20px] justify-'>                                                                                              {/*Prices*/}
              <h3 className='text-[18px] text-[500] text-center text-gray-400 line-through'>₹{item?.attributes.oldPrice}</h3>
              <h3 className='text-[18px] text-[500] text-center'>₹{item?.attributes.newprice}</h3>
            </div>
        </Tilt>
      </Link>
    
  )
}

export default Card
