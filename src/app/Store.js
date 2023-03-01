import { configureStore } from "@reduxjs/toolkit";
import productsReducer,{productsFetching } from "../feature/products/ProductsSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
store.dispatch(productsFetching())