import orderSlice from "./orderSlice";
import productReducer from "./productSlice";
import { OrderStateType, ProductStateType } from "./types";

export type StateType = {
  products: ProductStateType;
  orders: OrderStateType;
};

const rootReducers = {
  products: productReducer,
  orders: orderSlice,
};

export default rootReducers;
