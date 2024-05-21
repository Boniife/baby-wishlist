'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  img: string;
  name: string;
  estimate: number;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<{ quantity: number, item: CartItem }>) => {
      const { quantity, item } = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ ...item, quantity });
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(cartItem => cartItem.name !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find(cartItem => cartItem.name === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find(cartItem => cartItem.name === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
