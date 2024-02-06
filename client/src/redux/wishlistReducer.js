import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productsWishlist:[]
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addFav: (state,action) => {

        const item = state.productsWishlist.find(item=>item.id === action.payload.id)
        
        if(!item){
          state.productsWishlist.push(action.payload);
        }

    },
    removeFav: (state,action) => {
      state.productsWishlist = state.productsWishlist.filter(item=>item.id !== action.payload)
    },
    resetFav: (state) => {
      state.productsWishlist = [];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFav, removeFav, resetFav } = wishlistSlice.actions;  

export default wishlistSlice.reducer;