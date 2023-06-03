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
        if (existingItem.amount >= 99) {
          return;
        }
        existingItem.amount += 1;
        existingItem.totalPrice += action.payload.price;
      } else {
        const newItem = {
          ...action.payload,
          totalPrice: action.payload.price,
          amount: 1,
        };
        state.items.push(newItem);
      }
    },

    updateOrderItemAmount: (state, action) => {
      const { itemId, amount } = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        item.amount = amount;
        item.totalPrice = item.price * amount;
      }
    },

    deleteOrderItem: (state, action) => {
      const existingItem = state.items.find(
        item => item.name === action.payload.name
      );

      if (existingItem.amount <= 1) {
        return;
      }
      existingItem.amount -= 1;
      existingItem.totalPrice -= action.payload.price;
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

export const {
  addOrderItem,
  updateOrderItemAmount,
  deleteOrderItem,
  deleteOrder,
  confirmOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
