import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from '@mui/icons-material/Info';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
//import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { useSelector } from "react-redux";
import { styles } from "./styles";

const Navbar = () => {

  const products = useSelector((state)=>state.cart.products)
  const productsWishlist = useSelector((state)=>state.wishlist.productsWishlist)

  const [shouldDisplayCloseButtonLeft, setShouldDisplayCloseButtonLeft] = useState(false);
  const [shouldDisplayCloseButtonRight, setShouldDisplayCloseButtonRight] = useState(false);

  const [shouldDisplayCart,setShouldDisplayCart] = useState(false);
  const [shouldDisplayWishlist,setShouldDisplayWishlist] = useState(false);

  const [shouldDisplayCartBigScr,setShouldDisplayCartBigScr] = useState(false);
  const [shouldDisplayWishlistBigScr,setShouldDisplayWishlistBigScr] = useState(false);

  const toggleWishlistBigScr = () => {
    setShouldDisplayWishlistBigScr(!shouldDisplayWishlistBigScr)
    setShouldDisplayCartBigScr(false)
  }

  const toggleCartBigScr = () => {
    setShouldDisplayCartBigScr(!shouldDisplayCartBigScr)
    setShouldDisplayWishlistBigScr(false)
  }

  const toggleRightMenu=()=>{
    setShouldDisplayCloseButtonRight(!shouldDisplayCloseButtonRight)
    shouldDisplayCart===true ? setShouldDisplayCart(false) : setShouldDisplayCart(false)
    shouldDisplayCart===true ? setShouldDisplayWishlist(false) : setShouldDisplayWishlist(false)
  }

  const toggleWishlist = () => {
    setShouldDisplayWishlist(!shouldDisplayWishlist) 
    setShouldDisplayCart(false)
  }
  const toggleCart = () => {
    setShouldDisplayCart(!shouldDisplayCart) 
    setShouldDisplayWishlist(false)
  }




  return (
    <div className="bg-white sticky z-10 top-[0px]">          {/*nav*/}
      <div className="px-4 py-2 flex flex-1 justify-between">       {/*wrapper*/}

        {/*LEFT SIDE*/}

        <div className="hidden sm:flex items-center gap-2 bg-white ">             
          <div className="w-10  ">
            <img src="/img/aclogo.png" alt="" />
          </div>
          <div className={`${styles.catTitle} text-[14px]`}>
            <Link to="/products/1">LAPTOPS</Link>
          </div>
          <div className={`${styles.catTitle} text-[14px]`}>
            <Link to="/products/2">MOBILES</Link>
          </div>
          <div className={`${styles.catTitle} text-[14px]`}>
            <Link to="/products/3">HEADPHONES</Link>
          </div>
        </div>


        <div className=" flex flex-1 justify-left items-center sm:hidden">             {/*leftmenu*/}
          <div
            className="w-[28]px h-[28]px cursor-pointer object-contain"
            onClick={() => setShouldDisplayCloseButtonLeft(!shouldDisplayCloseButtonLeft)}
          >
            {
              shouldDisplayCloseButtonLeft ? <CloseIcon /> 
              : <div className="w-6 "><img src="/img/aclogo.png" alt="" /></div>
            }
          </div>

          <div
            className={`${
              shouldDisplayCloseButtonLeft ? "flex" : "hidden"
            } ${styles.leftCloseIcon}`}
          >
            <div className="flex justify-left items-start flex-col gap-4">                      {/*left*/}
              <div className={`${styles.catTitle} mr-1`}>
                <Link to="/products/1">LAPTOPS</Link>
              </div>
              <div className={`${styles.catTitle}`}>
                <Link to="/products/2">MOBILES</Link>
              </div>
              <div className={`${styles.catTitle}`}>
                <Link to="/products/3">HEADPHONES</Link>
              </div>
            </div>
          </div>
        </div>



        <div className=" flex items-center h-[100px] w-[300px] overflow:hidden  ">                            {/*center*/}
          <div className=" hidden sm:block h-full w-full ">
            <Link to="/">
              <img src="/img/homepic.png" alt="" className="object-cover" />
            </Link>
          </div>
          <div className="  h-[100px] sm:hidden">
            <Link to="/">
              <img src="/img/homepic.png" alt="" />
            </Link>
          </div>
        </div>


        {/*RIGHT SIDE*/}

        <div className="hidden sm:flex items-center bg-white gap-8 -mt-1">                   
          <div className="flex text-[#777] gap-12">                               {/*icons*/}
            <GTranslateIcon className="hover:text-black cursor-pointer " />

            <div className={`${styles.icon} hover:text-rose-500`}  onClick={toggleWishlistBigScr}>               {/*cart*/}
              <FavoriteIcon/>
              <span className= {`${styles.iconQuantity} -mt-2 `}>
                {productsWishlist.length}
              </span>
            </div>

            

            <div className={`${styles.icon} hover:text-blue-500 `}  onClick={toggleCartBigScr}>               {/*cart*/}
              <ShoppingCartIcon/>
              <span className= {`${styles.iconQuantity} -mt-2 `}>
                {products.length}
              </span>
            </div>

            <InfoIcon className="hover:text-black cursor-pointer " />

          </div>
        </div>


        <div className=" flex flex-1 justify-end items-center z-[300] sm:hidden">                       {/*rightmenu*/}
          <div
            className="w-[28]px h-[28]px mt-1.5 cursor-pointer object-contain"
            onClick={toggleRightMenu} 
          >
            {shouldDisplayCloseButtonRight ? <CloseIcon /> : <MenuOpenIcon />}{" "}
          </div>
          <div
            className={`${
              shouldDisplayCloseButtonRight ? "flex" :"hidden"
            } ${styles.rightCloseIcon}`}
          >
            <div className={styles.GTranslateIcon}>      {/*icons*/}
              <GTranslateIcon />

              <div className=" " onClick={toggleWishlist}>                                              {/*cart*/}
                <FavoriteIcon className="text-rose-500"/>
                <span className={`${styles.iconQuantity} -mt-8 `}>
                  {productsWishlist.length}
                </span>
              </div>

              

              <div className=" " onClick={toggleCart}>                                              {/*cart*/}
                <ShoppingCartIcon className="hover:text-blue-500" />
                <span className={`${styles.iconQuantity} -mt-8 `}>
                  {products.length}
                </span>
              </div>
              
            </div>
            
            <InfoIcon />

          </div>
        </div>


      </div>
      
      {/* big screen logic */}
      {shouldDisplayCartBigScr && <Cart/>}
      {shouldDisplayWishlistBigScr && <Wishlist/>}

      {/* small screen logic */}
      {shouldDisplayCloseButtonRight && shouldDisplayCart && <Cart/>}  
      {shouldDisplayCloseButtonRight && shouldDisplayWishlist && <Wishlist/>}  
      
    </div>
  );
};

export default Navbar;
