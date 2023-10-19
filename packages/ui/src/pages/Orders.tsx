import { OrderItem } from "../components/OrderItem";
//import orders from "./../data/orders.json";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderAction } from "../reducers/orderSlice.ts";
import { StateType } from "../reducers/root-reducer.ts";

type ShippingInformation = {
  address: string;
  trackingNumber: string;
  trackingCompany: string;
};

type Order = {
  id: string;
  productId: string[];
  quantity: number;
  status: "processing" | "canceled" | "delivered";
  shippingInformation: ShippingInformation;
};

export function Orders() {
  const { orders } = useSelector((state: StateType) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderAction());
  }, [dispatch]);

  if (orders.isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <main className="container flex flex-col gap-2 my-3">
      <div className="mt-3 flex flex-wrap items-start gap-4">
        {orders.data?.map((item) => {
          return <OrderItem key={item.id} item={item} />;
        })}
      </div>
    </main>
  );
}
