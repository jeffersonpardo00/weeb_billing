export interface Product {

  idProduct: number;
  productName: string;
  productPrice: number;
  productNumUnits: number;

}

export const ProductNull =
{
  idProduct: 0,
  productName: "",
  productPrice: 0,
  productNumUnits: 0,
}

export interface ProductField {

  idProduct: number;
  numItems: number;

}

export const ProductFieldNull =
{
  idProduct: 0,
  numItems: 0
}

export interface ProductPurchase {

  idProduct: number;
  productName: string;
  numItems: number;
  purchaseCost: number;

}

export const ProductPurchaseNull =
{
  idProduct: 0,
  productName: "",
  numItems: 0,
  purchaseCost: 0,
}
