export interface Purchase {

  IdPurchase: number;
  IdBill: number;
  IdProduct: number;
  ProductQuantity: number;
  PurchaseValue: number;

}

export const PurchaseNull =
{
  IdPurchase: 0,
  IdBill: 0,
  IdProduct: 0,
  ProductQuantity: 0,
  PurchaseValue: 0
}
