import React from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'
import { styles } from './styles'

const Categories = () => {
  return (
    <div className={styles.mainDiv}>              {/*categories*/}


      <div className="category-columnsmall">                        {/*column1*/}
        <div className="category-row">                                 {/*category-row1.1*/}
          <img src='https://images.indianexpress.com/2021/03/Gaming-Laptops-1.jpg' alt='' className={styles.img}/>
          <button className={styles.button}><Link to = '/products/1'>LAPTOPS</Link></button>    
        </div>                                                 
        <div className="category-row">                                 {/*category-row1.2*/}
          <img src='https://cdn.arstechnica.net/wp-content/uploads/2021/10/Razer-Kraken-V3-Pro.jpg' alt='' className={styles.img}/>
          <button className={styles.button}><Link to = '/products/3'>HEADPHONES</Link></button>    
        </div>                                                  
      </div>               


      <div className="category-columnsmall">                        {/*column2*/}
        <div className="category-row ">                                 {/*category-row2.1*/}
          <img src='https://cdn.mos.cms.futurecdn.net/SKsjmHPYDT8ptsN69LbJWa.jpg' alt='' className={styles.img}/>
          <button className={styles.button}><Link to = '/products/2'>PHONES</Link></button>    
        </div>                                                  
      </div>  


      <div className="columnLarge gap-[10px] flex flex-col">                                                      {/*columnLarge*/}

        <div className="category-row">                                                         {/*category-rowL1*/}
            <div className="category-columnsmall">                                                                     {/*columnL1.1*/}
                <div className="category-row">                                                 {/*category-rowL1.1.1*/}
                  <img className={styles.img} src='https://www.cnet.com/a/img/resize/52bb4194a5a2383379d7e1271cfb28d759e2ae87/hub/2019/02/07/1d30d581-7dc2-4d50-a40e-f9a11ab50359/razer-asus-xiaomi-nubia-gaming-phones-3.jpg?auto=webp&fit=crop&height=1200&width=1200' alt='' />                                                    
                  <button className={styles.button}><Link to = ''>SALE</Link></button>    
                </div>                                          
            </div>
            <div className="category-columnsmall">                                              {/*columnL1.2*/}
                <div className="category-row">                                                     {/*category-rowL1.2.1*/}
                  <img src='https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/05/ASUS-ROG-FLow-X16-with-XG-mobile.jpg' alt='' className={styles.img}/>
                  <button className={styles.button}><Link to = ''>ACCESSORIES</Link></button>    
                </div>                                          
            </div>
        </div>

        <div className="category-row">                                                         {/*category-rowL2*/}
          <img src='https://ptechktm.com/pub/media/magefan_blog/Best-Gaming-Laptops.jpg' alt='' className={styles.img}/>
          <button className={styles.button}><Link to = ''>NEW SEASON</Link></button>    
        </div>                                                

      </div>   

  
    </div>
  )
}

export default Categories
