import React from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './Imgshifter.css';
import { useEffect, useState } from 'react';
import { styles } from './styles';

//setInterval :  method which returns an interval ID which uniquely identifies interval , so you can remove it later on by calling clearInterval()


const Imgshifter = () => {

    const pics=[
        'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/12/razer-blade-18-2916502.jpg?tf=3840x',
        '/img/headphone.jpg',
        '/img/phn.jpg',
        '/img/lap3.png',
        '/img/airpod.jpg',
        'https://gizchina.it/wp-content/uploads/2020/08/Asus-rog-phone-3-1200x675.jpg',
        '/img/lap1.jpg',
    ]
    
    const [currentPic,setCurrentPic] = useState(0);

    
    const prevPic = () => {
            setCurrentPic(currentPic => currentPic === 0 ? pics.length-1 : currentPic - 1 )
        }

    const nextPic = () => {
            setCurrentPic(currentPic => currentPic === pics.length-1 ? 0 : currentPic+1);
        }


        useEffect(()=>{
            console.log("effect")
            const interval = setInterval(() => {
                setCurrentPic(currentPic => currentPic === pics.length-1 ? 0 : currentPic+1)
            },15000);

            
            
            
            return () => {
                clearInterval(interval)
            }
        },[])

return (
    <div className={styles.mainDiv}>
        <div style={{transform:`translateX(-${currentPic*100}vw)`, width:`${pics.length*100}vw`}} className= {styles.imgDiv} >                                 {/* container */}
        {pics.map((pic, i) => (
       <img src={pic} alt="product" key={i} className={styles.img}  />) )}                  {/* <img src={pic[currentPic]} alt="" /> could be replaced here if dont wanna make it slide using translateX  */}
        
        {console.log(currentPic)}
            
        </div>
        <div className={styles.navigationDiv}>                        {/* iconbox */}
        <div className="flex justify-center px-1 sm:px-6  " >                     {/*icon */}
            <ArrowCircleLeftIcon className='cursor-pointer text-[#f3f3ec]' onClick={prevPic}/>
        </div>
        <div className="flex justify-center px-1 sm:px-6  " >                      {/* icon */}
            <ArrowCircleRightIcon className='cursor-pointer text-[#f3f3ec]' onClick={nextPic}/>
            {console.log(currentPic)}
        </div>
        </div>
    </div>
)
}

export default Imgshifter
