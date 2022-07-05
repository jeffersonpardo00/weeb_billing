
export interface Bill
{
    IdBill: number;
    IdClient: number;
    PurchaseDate: Date;
}

export const BillNull =
{
  IdBill: 0,
  IdClient: 0,
  PurchaseDate: new Date("01/01/1900"),
}
