import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    //this reducer is big reducer for the whole store, it also combines all the reducers in the slices
    cart: cartReducer, // this is big reducer for our whole app because we only have 1 reducer in our app
  },
});

export default appStore;
