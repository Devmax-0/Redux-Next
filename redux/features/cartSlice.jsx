"use client";

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    clearCart: (state) => {
      state.length = 0;
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
