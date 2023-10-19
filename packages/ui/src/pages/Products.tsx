import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "../components/ProductItem.tsx";
import { getProductsAction } from "../reducers/productSlice.ts";
import { StateType } from "../reducers/root-reducer.ts";

export function Products() {
  const { products } = useSelector((state: StateType) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  if (products.isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <main className="container flex flex-col gap-2 my-3">
      <div className="mt-3 flex flex-wrap items-start gap-4">
        {products.data?.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </div>
    </main>
  );
}
