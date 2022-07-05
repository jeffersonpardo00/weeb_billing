
import { Component, OnInit} from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

import { Client, ClientNull } from 'src/app/core/models/Client';
import { Subject } from 'rxjs';
import { BillPurchases } from 'src/app/core/models/BillPurchases';

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
    console.log(billPurchases);
    this.createClient();
  }

  public createClient() {
    if(this.createNewClient) console.log("crear cliente");
    console.log(this.client);
  }

}
