
import { Component, OnInit} from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

import { Client, ClientNull } from 'src/app/core/models/Client';
import { Subject } from 'rxjs';
import { BillPurchases } from 'src/app/core/models/BillPurchases';
import { BillPurchaseService } from 'src/app/core/service/bill-purchase.service';
import { ClientService } from 'src/app/core/service/client.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit{

  public client: Client;
  public colCountByScreen: object;
  public IdNumFieldUsed: boolean;
  public createNewClient: boolean;
  public clientIdent_Num: number;
  public ident_Num: FormControl;


  constructor(
    private billPurchaseService: BillPurchaseService,
    private clientService: ClientService
    ) {

    this.ident_Num = new FormControl('');
    this.client = ClientNull;
    this.clientIdent_Num = 0;
    this.createNewClient = false;
    this.IdNumFieldUsed = false;
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };


   }

  ngOnInit(): void {

  }

  sendClientId(){
    // cambia el dato enviado al componente cliente
    this.clientIdent_Num = this.ident_Num.value;
    this.IdNumFieldUsed = true;
  }

  setClient(outClient: Client){
    console.log("recibio emiter");
    this.client = outClient;
    console.log(this.client);
  }



  closeTransaction(billPurchases: BillPurchases){

    this.createClient();
    billPurchases.bill.IdClient = this.client.idClient;
    console.log(billPurchases);
    this.billPurchaseService.CreateBillPurchase(billPurchases).subscribe(()=>console.log('CreateBillPurchase success'));
  }

  public createClient() {
    if(this.createNewClient)
    this.clientService.createClient(this.client).subscribe(()=>console.log('createClient success'));

    ;
    console.log(this.client);
  }

}
