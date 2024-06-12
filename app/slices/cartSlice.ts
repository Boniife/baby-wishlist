import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  img: string;
  name: string;
  estimate: number;
  quantity: number;
  addedToCart: boolean;
  link: string;
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
        state.cartItems.push({ ...item, quantity, addedToCart: true }); // Set addedToCart to true
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(cartItem => cartItem.name !== action.payload);
    },
    updateItemQuantity: (state, action: PayloadAction<{ name: string, quantity: number }>) => {
      const { name, quantity } = action.payload;
      const item = state.cartItems.find(cartItem => cartItem.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
