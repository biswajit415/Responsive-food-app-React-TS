/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../hooks/useRestraMenu';

export interface CounterState {
  cartItems: Item[];
}

const initialState: CounterState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.cartItems.push(action.payload);
    },

    removeItem: (state) => {
      state.cartItems.pop();
    },

    clearCart: (state) => {
      state.cartItems.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
