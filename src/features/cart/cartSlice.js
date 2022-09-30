import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total : 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((e) => e.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((e) => e.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((e) => e.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals : (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((e) => {
        amount += e.amount;
        total += e.amount * e.price;
      });
      state.amount = amount;
      state.total = total;
  },
},
});

// console.log(cartSlice)
export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions;
export default cartSlice.reducer;