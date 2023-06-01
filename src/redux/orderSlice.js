import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: { items: [] },
  reducers: {
    addOrderItem: (state, action) => {
      return { ...state, items: [...state.items, action.payload] };
    },
    deleteOrderItem: (state, action) => {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    },
  },
});

export const { addOrderItem, deleteOrderItem } = orderSlice.actions;

export default orderSlice.reducer;
