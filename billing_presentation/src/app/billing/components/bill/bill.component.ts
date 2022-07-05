import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Product, ProductField, ProductFieldNull, ProductNull, ProductPurchase} from 'src/app/core/models/Product';
import {
  DxFormComponent
} from 'devextreme-angular';
import { ProductService } from 'src/app/core/service/product.service';
import { BillPurchases, BillPurchasesNull } from 'src/app/core/models/BillPurchases';
import { Purchase } from 'src/app/core/models/Purchase';
import { BillPurchaseService } from 'src/app/core/service/bill-purchase.service';
import { Bill, BillNull } from 'src/app/core/models/Bill';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit, AfterViewInit  {

  @ViewChild(DxFormComponent, { static: false }) myform: DxFormComponent | undefined;

  @Output() billPurchasesCreated = new EventEmitter<BillPurchases>();

  public productField : ProductField;
  public purchases: Purchase[];
  public products: ProductPurchase[];
  public currentProduct: Product;
  public billPurchases: BillPurchases;
  public bill : Bill;

  constructor(
    private productService: ProductService,
    private billPurchaseService : BillPurchaseService
  ) {
    this.productField = ProductFieldNull;
    this.purchases = [];
    this.currentProduct = ProductNull;
    this.billPurchases = BillPurchasesNull;
    this.products = [];
    this.bill = BillNull;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if(this.myform) this.myform.instance.validate();
  }

  addProduct(){
    console.log(this.productField);
    this.getProduct(this.productField.idProduct.toString());
  }

  private addProductToArray(){

    const idProd = this.currentProduct.idProduct;
    const ProdQuant = this.productField.numItems;
    const PurchVal = this.currentProduct.productPrice * this.productField.numItems;

    this.products.push(
      {
        idProduct: idProd,
        productName: this.currentProduct.productName,
        numItems: ProdQuant,
        purchaseCost: PurchVal,
      }
    );

    this.purchases.push({
      IdPurchase: 0,
      IdProduct: idProd,
      IdBill: 0,
      ProductQuantity: ProdQuant,
      PurchaseValue: PurchVal
    });

    console.log(this.products);
  }

   sendBill(){

    this.bill={
      IdBill: 0,
      IdClient: 0,
      PurchaseDate:  new Date(Date.now())
    };

    this.billPurchases = {
      bill: this.bill,
      purchases: this.purchases
    }
    this.billPurchasesCreated.emit(this.billPurchases);
  }

  private getProduct(idProduct: string){
      this.productService.GetProduct(idProduct).subscribe(
        (prod)=>{
          this.currentProduct = prod;
          this.addProductToArray();
        },
        (e)=> alert("el producto no existe")
      );
  }

}
