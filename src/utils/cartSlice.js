import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  //this function takes a configuration

  name: "cart",
  initialState: {
    //inital value of slice
    //this is state
    items: [],
  },
  reducers: {
    //some reducers which modify the state
    //what is a action and reducer
    addItem: (state, action) => {
      //this is reducer function which modify the slice of our store
      //mutating the state over here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
      //this will make my item list as 0
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
