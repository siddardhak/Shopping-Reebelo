import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateProductAction } from "../../reducers/productSlice";

type UpdateProductProps = {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  stockQuantity: number;
};

export const UpdateProductModal = (props: UpdateProductProps) => {
  const [showModal, setShowModal] = useState(false);

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setShowModal(false);
    await dispatch(
      updateProductAction({
        id: props.id,
        imgUrl:
          "https://fastly.picsum.photos/id/353/200/300.jpg?hmac=dp_gN1fPfq1NcUZmNjRXfOwD3UH0D4B8A-jwvjByOyc",
        name: data.name,
        price: data.price,
        stockQuantity: data.stockQuantity,
      })
    );
  };

  return (
    <>
      <button
        className="w-full item-button"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Update Product
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-min lg:w-3/12 my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5">
                  <h3 className="text-3xl font-semibold">
                    Update {props.name}
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    className="w-full  space-y-3"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <label className="block text-black text-sm font-bold mb-1">
                      Name
                    </label>
                    <input
                      {...register("name")}
                      name="name"
                      defaultValue={props.name}
                      className="text-center shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      StockQuantity
                    </label>
                    <input
                      {...register("stockQuantity")}
                      name="stockQuantity"
                      defaultValue={props.stockQuantity}
                      type="number"
                      className="text-center shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Price
                    </label>
                    <input
                      {...register("price")}
                      name="price"
                      defaultValue={props.price}
                      className=" text-center shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <div className="flex flex-row justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-white bg-red-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button className="text-white item-button active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
