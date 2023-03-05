import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],

  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existedItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      // if exist
      if (existedItemIndex >= 0) {
        state.cartItems[existedItemIndex].cartQuantity += 1;
        toast.info("Quantitiy increased!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        // add to cart
        const assembled = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembled);
        toast.success("Product added!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      // add to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // ----------------------------------------------------------------------------------------//
    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = updatedCartItems;

      toast.error("Removed cart!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // updated local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // ---------------------------------------------------------------------------------------------//
    // clear cart
    clearCart(state, action) {
      state.cartItems = [];

      toast.warn("Cart cleared!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // updated local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // ----------------------------------------------------------------------------------------------//

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // if exist
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.error('Decreased cart!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = updatedCartItems;

        toast.error("Removed cart!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // -----------------------------------------------------------------------------------------------------------//
    getSubTotal(state, action) {
      const subTotal = state.cartItems.reduce((acc, items) => {
        const { price, cartQuantity } = items;
        const totalItem = price * cartQuantity;

        acc += totalItem;
        return acc;
      }, 0);
      state.cartTotalAmount = subTotal;
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseCart,
  getSubTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
