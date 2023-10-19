import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ORDERS, OrderStateType, OrderType } from "./types";

const productInitialState: OrderStateType = {
  orders: {
    data: null,
    isLoading: false,
    errors: "",
  },
};

export const orderSlice = createSlice({
  name: ORDERS,
  initialState: productInitialState,
  reducers: {
    getOrderAction: (state: OrderStateType) => {
      console.log("here");
      state.orders.isLoading = true;
      state.orders.errors = "";
    },
    getOrderSuccessAction: (
      state: OrderStateType,
      { payload: orders }: PayloadAction<OrderType[]>
    ) => {
      console.log("here in success");

      state.orders.isLoading = false;
      state.orders.data = orders;
    },
    getOrderErrorAction: (
      state: OrderStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.orders.isLoading = false;
      state.orders.errors = error;
    },
    updateOrderAction: (
      state: OrderStateType,
      { payload: order }: PayloadAction<OrderType>
    ) => {
      console.log(order);
      state.orders.isLoading = true;
      state.orders.errors = "";
    },
    updateOrderSuccessAction: (
      state: OrderStateType,
      { payload: order }: PayloadAction<OrderType>
    ) => {
      state.orders.isLoading = false;
      const orders = state.orders.data?.map((p) => {
        if (p.id === order.id) return { ...p, ...order };
        else return p;
      });

      state.orders.data = orders as OrderType[];
    },
    updateOrderErrorAction: (
      state: OrderStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      console.log(error);
      state.orders.isLoading = false;
      state.orders.errors = error;
    },
  },
});

export const {
  getOrderAction,
  getOrderErrorAction,
  getOrderSuccessAction,
  updateOrderAction,
  updateOrderSuccessAction,
  updateOrderErrorAction,
} = orderSlice.actions;

export default orderSlice.reducer;
