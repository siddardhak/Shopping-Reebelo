export const formatCurrency = (price: number): string => {
  const AUD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "AUD",
  });

  return AUD.format(price);
};
