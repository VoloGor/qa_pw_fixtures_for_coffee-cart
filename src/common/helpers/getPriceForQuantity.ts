export function unitPriceFormatStr(unitPrice: number | string, unitsNumber: number): string {
  return `${Number(unitPrice).toFixed(2)} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice: number | string, multiplier: number = 1): string {
  const finalPrice = Number(unitPrice) * multiplier;
  return `$${finalPrice.toFixed(2)}`;
}
export function getPriceForQuantity(unitPrice: number | string) {
  return {
    totalPriceFormatStr(unitsNumber: number): string {
      const total = Number(unitPrice) * unitsNumber;
      return `Total: $${total.toFixed(2)}`;
    },
  };
}
export function totalCheckoutFormatStr(items: { price: string | number; quantity: number }[]): string {
  const total = items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
  return `Total: $${total.toFixed(2)}`;
}