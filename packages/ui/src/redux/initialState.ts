type ShippingInformation = {
  address: string;
  trackingNumber: string;
  trackingCompany: string;
};

type initialStateProps = {
  Products:
    | {
        id: string;
        name: string;
        price: number;
        imgUrl: string;
        quantity: number;
      }
    | object;
  Orders:
    | {
        id: string;
        productId: string[];
        quantity: number;
        status: "processing" | "canceled" | "delivered";
        shippingInformation: ShippingInformation;
      }
    | object;
};

export const initialState: initialStateProps = {
  Products: {},
  Orders: {},
};
