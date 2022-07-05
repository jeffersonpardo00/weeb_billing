import { Bill } from "../models/Bill";
import { Purchase } from "../models/Purchase";

export interface BillPurchases {

  bill: Bill;
  purchases: Purchase[];

}

export const BillPurchasesNull =
{
  bill: {
    IdBill: 0,
    IdClient: 0,
    PurchaseDate: new Date("01/01/1900"),
  },
  purchases:[
    {
      IdPurchase: 0,
      IdBill: 0,
      IdProduct: 0,
      ProductQuantity: 0,
      PurchaseValue: 0
    }
  ]
}
