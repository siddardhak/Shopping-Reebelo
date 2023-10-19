import { formatCurrency } from "../utils/formatCurrency.ts";
import { UpdateProductModal } from "./Modals/UpdateProductModal.tsx";

export type Product = {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  stockQuantity: number;
};

type ProductItemProps = {
  item: Product;
};

export function ProductItem({ item }: ProductItemProps) {
  const { id, name, price, imgUrl, stockQuantity } = item;

  return (
    <div className="w-[250px] pb-2 bg-white hover:shadow-xl transition-all">
      <img
        className="block w-full h-[150px] object-cover"
        src={imgUrl}
        alt="store item"
      />

      <div className="flex flex-col gap-3 p-3">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium">{name}</h3>
          <span className="opacity-85">{formatCurrency(price)}</span>
        </div>
        <p className="text-center	text-md  font-small">
          {stockQuantity} Items available
        </p>
        <UpdateProductModal key={id} {...item} />
      </div>
    </div>
  );
}
