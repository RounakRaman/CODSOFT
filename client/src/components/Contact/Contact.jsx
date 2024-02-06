import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styles } from './styles';

const Contact = () => {
  return (
    <div className={styles.mainDiv}>                                                                        {/*contact container*/}
      <div className={styles.subDiv}>                                                     {/*wrapper*/}          

        <span className={styles.banner}>GET IN TOUCH WITH US</span>

        <div>                                                   
            <input className={styles.inputbox} type='text' placeholder='Enter your E-Mail'/>
            <button className={styles.buttonContainter}><h3 className={styles.buttonText}>JOIN US</h3></button>
        </div>

        <div className={styles.iconContainer}>                                                  {/*icons*/}
            <LinkedInIcon className='cursor-pointer'/>
            <TwitterIcon className='cursor-pointer'/>
            <GitHubIcon className='cursor-pointer'/>
            <InstagramIcon className='cursor-pointer'/>
            <FacebookIcon className='cursor-pointer'/>
        </div>

      </div>
    </div>
  )
}

export default Contact
