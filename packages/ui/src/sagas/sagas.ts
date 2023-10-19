import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { config } from "../config";
import {
  getOrderErrorAction,
  getOrderSuccessAction,
  updateOrderErrorAction,
  updateOrderSuccessAction,
} from "../reducers/orderSlice";
import {
  getProductsErrorAction,
  getProductsSuccessAction,
  updateProductsErrorAction,
  updateProductsSuccessAction,
} from "../reducers/productSlice";
import {
  GET_ORDERS,
  GET_PRODUCTS,
  OrderType,
  ProductType,
  UPDATE_ORDERS,
  UPDATE_PRODUCTS,
} from "../reducers/types";

function* getProducts() {
  try {
    const response: AxiosResponse<ProductType[]> = yield axios.get(
      `${config.REACT_APP_API_URL}/products`
    );
    yield put(getProductsSuccessAction(response.data));
  } catch (error) {
    yield put(getProductsErrorAction(String(error)));
  }
}

function* updateProduct({ payload: product }: PayloadAction<ProductType>) {
  try {
    const response: AxiosResponse<ProductType> = yield axios.put(
      `${config.REACT_APP_API_URL}/product/${product.id}`,
      {
        price: product.price,
        stockQuantity: product.stockQuantity,
        imgUrl: product.imgUrl,
      }
    );

    yield put(updateProductsSuccessAction(response.data));
  } catch (error) {
    yield put(updateProductsErrorAction(String(error)));
  }
}

function* getOrders() {
  try {
    const response: AxiosResponse<OrderType[]> = yield axios.get(
      `${config.REACT_APP_API_URL}/orders`
    );
    yield put(getOrderSuccessAction(response.data));
  } catch (error) {
    yield put(getOrderErrorAction(String(error)));
  }
}

function* updateOrder({ payload: order }: PayloadAction<OrderType>) {
  try {
    const response: AxiosResponse<OrderType> = yield axios.put(
      `${config.REACT_APP_API_URL}/order/${order.id}`,
      {
        quantity: order.quantity,
        status: order.status,
        productId: order.productId,
        shippingInformation: {
          address: order.shippingInformation.address,
          trackingNumber: order.shippingInformation.trackingNumber,
          trackingCompany: order.shippingInformation.trackingCompany,
        },
      }
    );

    yield put(updateOrderSuccessAction(response.data));
  } catch (error) {
    yield put(updateOrderErrorAction(String(error)));
  }
}

export function* watchGetProducts() {
  yield takeLatest(GET_PRODUCTS, getProducts);
  yield takeLatest(UPDATE_PRODUCTS, updateProduct);
  yield takeLatest(GET_ORDERS, getOrders);
  yield takeLatest(UPDATE_ORDERS, updateOrder);
}
