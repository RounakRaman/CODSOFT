import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  //Step 1 apply useDispatch and store action.payload via addItem by clicking on 'Add to Cart'
  //Step 2 come here and make different actions
  reducers: {
    addItem: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      //item.id is the id of the ones in products array
      //while action.payload.id is the id of the one we store in addItem action when we click 'Add to Cart' button

      if (!item) {
        state.products.push(action.payload); //action.payload is the object stored upon clicking 'Add to Cart'
      } else {
        item.currentQuantity += action.payload.currentQuantity;
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetAll: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, resetAll } = cartSlice.actions;

export default cartSlice.reducer;
