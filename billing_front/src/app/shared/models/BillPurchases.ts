import { Bill } from "../models/Bill";
import { Purchase } from "../models/Purchase";

export interface BillPurchases {

  Bill: Bill;
  Purchases: Purchase[];

}

export const BillPurchasesNull =
{
  Bill: {
    IdBill: 0,
    IdClient: 0,
    PurchaseDate: new Date("01/01/1900"),
  },
  Purchases:[
    {
      IdPurchase: 0,
      IdBill: 0,
      IdProduct: 0,
      ProductQuantity: 0,
      PurchaseValue: 0
    }
  ]
}
