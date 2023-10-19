import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCTS, ProductStateType, ProductType } from "./types";

const productInitialState: ProductStateType = {
  products: {
    data: null,
    isLoading: false,
    errors: "",
  },
};

export const productSlice = createSlice({
  name: PRODUCTS,
  initialState: productInitialState,
  reducers: {
    getProductsAction: (state: ProductStateType) => {
      state.products.isLoading = true;
      state.products.errors = "";
    },
    getProductsSuccessAction: (
      state: ProductStateType,
      { payload: products }: PayloadAction<ProductType[]>
    ) => {
      state.products.isLoading = false;
      state.products.data = products;
    },
    getProductsErrorAction: (
      state: ProductStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.products.isLoading = false;
      state.products.errors = error;
    },
    updateProductAction: (
      state: ProductStateType,
      { payload: product }: PayloadAction<ProductType>
    ) => {
      console.log(product);
      state.products.isLoading = true;
      state.products.errors = "";
    },
    updateProductsSuccessAction: (
      state: ProductStateType,
      { payload: product }: PayloadAction<ProductType>
    ) => {
      state.products.isLoading = false;
      const products = state.products.data?.map((p) => {
        if (p.id === product.id) return { ...p, ...product };
        else return p;
      });

      state.products.data = products as ProductType[];
    },
    updateProductsErrorAction: (
      state: ProductStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      console.log(error);
      state.products.isLoading = false;
      state.products.errors = error;
    },
  },
});

export const {
  getProductsAction,
  getProductsErrorAction,
  getProductsSuccessAction,
  updateProductAction,
  updateProductsSuccessAction,
  updateProductsErrorAction,
} = productSlice.actions;

export default productSlice.reducer;
