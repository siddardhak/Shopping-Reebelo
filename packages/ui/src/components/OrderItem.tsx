import { UpdateOrderModal } from "./Modals/UpdateOrderModal.tsx";

type ShippingInformation = {
  address: string;
  trackingNumber: string;
  trackingCompany: string;
};

export type Order = {
  id: string;
  productId: string[];
  quantity: number;
  status: "processing" | "canceled" | "delivered";
  shippingInformation: ShippingInformation;
};

type StoreItemProps = {
  item: Order;
};

export function OrderItem({ item }: StoreItemProps) {
  const { id, quantity, status, shippingInformation } = item;

  return (
    <div className="w-[250px] pb-2 bg-white hover:shadow-xl transition-all">
      <div className="flex flex-col gap-3 p-3">
        <h4 className="text-lg font-medium">Order: {id}</h4>
        <p className="text-md font-small">Items: {quantity}</p>

        <p className="text-md  font-small">
          Current Status: <span className="italic font-medium">{status}</span>
        </p>

        <h2 className="font-bold text-md">Shipping Information</h2>
        <p className="text-sm"> {shippingInformation.address}</p>
        <p className="text-sm">
          Tracking Number {shippingInformation.trackingNumber}
        </p>
        <UpdateOrderModal key={item.id} order={item} />
      </div>
    </div>
  );
}
