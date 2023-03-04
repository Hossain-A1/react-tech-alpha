import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  productsFetching,
} from "../feature/products/ProductsSlice";

import cartReducer from "../feature/products/CartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
store.dispatch(productsFetching());
