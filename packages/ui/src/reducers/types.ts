export type ProductType = {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  stockQuantity: number;
};

export type IProductState = {
  data: ProductType[] | null;
  isLoading: boolean;
  errors: string;
};

export type ProductStateType = {
  products: IProductState;
};

export const PRODUCTS = "products";
export type PRODUCTS = typeof PRODUCTS;

export const GET_PRODUCTS = `${PRODUCTS}/getProductsAction`;
export type GET_PRODUCTS = typeof GET_PRODUCTS;

export const UPDATE_PRODUCTS = `${PRODUCTS}/updateProductAction`;
export type UPDATE_PRODUCTS = typeof UPDATE_PRODUCTS;

export type OrderType = {
  id: string;
  productId: string[];
  quantity: number;
  status: "processing" | "canceled" | "delivered";
  shippingInformation: ShippingInformation;
};

type ShippingInformation = {
  address: string;
  trackingNumber: string;
  trackingCompany: string;
};

export type IOrderState = {
  data: OrderType[] | null;
  isLoading: boolean;
  errors: string;
};

export type OrderStateType = {
  orders: IOrderState;
};

export const ORDERS = "orders";
export type ORDERS = typeof ORDERS;

export const GET_ORDERS = `${ORDERS}/getOrderAction`;
export type GET_ORDERS = typeof GET_ORDERS;

export const UPDATE_ORDERS = `${ORDERS}/updateOrderAction`;
export type UPDATE_ORDERS = typeof UPDATE_ORDERS;
