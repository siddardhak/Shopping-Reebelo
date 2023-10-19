import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateOrderAction } from "../../reducers/orderSlice";
import { Order } from "../OrderItem";

type UpdateProductProps = {
  order: Order;
};

const OrderStatus = ["processing", "delivered", "cancelled"];

export const UpdateOrderModal = (props: UpdateProductProps) => {
  const [showModal, setShowModal] = useState(false);

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setShowModal(false);
    await dispatch(
      updateOrderAction({
        id: props.order.id,
        productId: props.order.productId,
        quantity: props.order.quantity,
        status: data.status,
        shippingInformation: {
          address: data.address,
          trackingNumber: data.trackingNumber,
          trackingCompany: props.order.shippingInformation.trackingCompany,
        },
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
        Update Order
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 lg:w-3/12 my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5">
                  <h3 className="text-3xl font-semibold">
                    Update {props.order.id}
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    className="w-full  space-y-3"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <label className="block text-black text-sm font-bold mb-1">
                      Status
                    </label>

                    <select
                      {...register("status")}
                      name="status"
                      className="text-center shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    >
                      <option value={props.order.status}>Select status</option>
                      {OrderStatus.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <p className=" font-bold">Shipping Information</p>
                    <label className="block text-black text-sm font-bold mb-1">
                      Address
                    </label>
                    <input
                      {...register("address")}
                      name="address"
                      defaultValue={props.order.shippingInformation.address}
                      className="text-center shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Tracking Number
                    </label>
                    <input
                      {...register("trackingNumber")}
                      name="trackingNumber"
                      defaultValue={
                        props.order.shippingInformation.trackingNumber
                      }
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
