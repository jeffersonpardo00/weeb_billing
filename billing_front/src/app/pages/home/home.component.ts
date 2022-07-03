import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillPurchases, BillPurchasesNull } from 'src/app/shared/models/BillPurchases';
import { BillPurchasesService } from 'src/app/shared/services/bill-purchases.service';
import { ClientService } from 'src/app/shared/services/client.service';

import { Client, ClientNull } from 'src/app/shared/models/Client';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent implements OnInit {

  public form: FormGroup;
  public client: Client;
  public colCountByScreen: object;
  public maxDate: Date = new Date();
  public thereISClient=false;

  public cityPattern = '^[^0-9]+$';

  public namePattern: any = /^[^0-9]+$/;

  buttonOptions: any = {
    text: 'Register',
    type: 'success',
    useSubmitBehavior: true,
  };

  constructor(
    private billPurchasesService : BillPurchasesService,
    private clientService : ClientService,
    private formBuilder: FormBuilder,
  ) {

    this.client = ClientNull;

    this.client =
    {
      IdClient:22,
      Name1:'dfsdsd',
      Name2:'fgdfgdfg',
      LastName1:'fgdfgdfg',
      LastName2:'fgdfgdfg',
      BirthDate: new Date("01/01/1900"),
      IdentNum: 33
    }
    ;
    /*this.clientService.GetClient('1').subscribe(
      (client)=>{
        this.client = client;
        console.log(client);
      }
    );*/

    this.form = this.formBuilder.group({
      IdClient:['', [Validators.required]],
      Name1:['', [Validators.required]],
      Name2:[''],
      LastName1:['', [Validators.required]],
      LastName2:[''],
      BirthDate: [new Date("01/01/1900"), [Validators.required]],
      IdentNum: [0, [Validators.required]]
    });

    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };

  }

  ngOnInit(): void {
   /*this.billPurchasesService.createBillPurchases(BillPurchasesNull)
      .subscribe(() => {
        console.log("producto creato");
      });*/

  }

  public createClient(e: any) {
    console.log(this.client);
  }


}
