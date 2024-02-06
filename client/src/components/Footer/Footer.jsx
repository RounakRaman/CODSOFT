import React from 'react'
import Contact from '../Contact/Contact'
import { Link } from 'react-router-dom'
import { styles } from './styles'

const Footer = () => {
  return (
  <div>
    <Contact/>
    
    <div className={styles.mainDiv}>
    

      <div className='flex  gap-[10px] '>         {/*top*/}

        <div className={styles.subDiv}>          {/*categories*/}
          <h1 className='foot-heading'>CATEGORIES</h1>
          <span className='foot-comp'><Link to='/product/1'>LAPTOPS</Link></span>
          <span className='foot-comp'>PHONES</span>
          <span className='foot-comp'>HEADPHONES</span>
          <span className='foot-comp'>ACCESSORIES</span>
          <span className='foot-comp'>NEW ARRIVALS</span>
        </div>

        <div className={styles.subDiv}>                  {/*div*/}
          <h1 className='foot-heading' >LINKS</h1>
          <span className='foot-comp'>STORES</span>
          <span className='foot-comp'>COMPARE</span>
          <span className='foot-comp'>PAGES</span>
          <span className='foot-comp'>FAQs</span>
          <span className='foot-comp'>COOKIES</span>
        </div>

        <div className={styles.subDiv}>                   {/*about*/}
          <h1 className='foot-heading'>ABOUT</h1>
          <span className='foot-about'>Estd in 1998</span>
          <span className='foot-about break-all'>We are here to assist you in finding the most perfect gadget to meet your needs.</span>
          <span className='foot-about break-all'>We offer expert advice, detailed product information, and recommendations ensuring that you make valuable decisions.</span>
        </div>

      </div>



      <div className='flex flex-1 items-center justify-between relative top-3  '>                          {/*bottom*/}

        <div className="flex items-center  ">                                                     {/*left*/}
          <div className='flex flex-col items-center -mt-5 sm:mt-0'>
            <span className={styles.banner}>GADGOZONE</span>
            <span className='foot-contactdet'>xyz@gmail.com</span>
            <span className='foot-contactdet'>9799XXXXXX</span>
          
          </div>
          <span className={styles.copyright}>©Copyright 2023. All Right Reserved</span>
        </div>

        <div className="w-80">                                       {/*right*/}
          <img src = '/img/footerbanner.png' alt=''/>
        </div>

      </div>

    </div>

  </div>
  )
}

export default Footer
