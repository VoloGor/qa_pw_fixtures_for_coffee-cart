/**
 * Returns a formatted string showing unit price and quantity.
 * @example unitPriceFormatStr(10, 1) → "10.00 x 1"
 */
export function unitPriceFormatStr(unitPrice: number | string, unitsNumber: number): string {
  return `${Number(unitPrice).toFixed(2)} x ${unitsNumber}`;
}

/**
 * Returns a formatted string showing unit price.
 * @example priceFormatStr(10) → "10.00"
 */
export function priceFormatStr(unitPrice: number | string): string {
  return `$${Number(unitPrice).toFixed(2)}`;
}

/**
 * Returns a formatted total price string.
 * @example totalPriceFormatStr(10, 3) → "Total: $30.00"
 */
export function totalPriceFormatStr(unitPrice: number | string, unitsNumber: number): string {
  const total = Number(unitPrice) * unitsNumber;
  return `Total: $${total.toFixed(2)}`;
}