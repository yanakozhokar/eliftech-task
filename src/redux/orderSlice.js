import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: { items: [] },
  reducers: {
    addOrderItem: (state, action) => {
      const existingItem = state.items.find(
        item => item.name === action.payload.name
      );

      if (existingItem) {
        existingItem.amount += 1;
        existingItem.price += action.payload.price;
      } else {
        const newItem = { ...action.payload, amount: 1 };
        state.items.push(newItem);
      }
    },

    deleteOrderItem: (state, action) => {
      const existingItem = state.items.find(
        item => item.name === action.payload.name
      );
      existingItem.amount -= 1;
      existingItem.price -= action.payload.price;
    },

    deleteOrder: (state, action) => {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    },

    confirmOrder: (state, action) => {
      fetch('https://64748ef77de100807b1b337b.mockapi.io/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
      });
    },
  },
});

export const { addOrderItem, deleteOrderItem, deleteOrder, confirmOrder } =
  orderSlice.actions;

export default orderSlice.reducer;
