
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import {
  DxFormComponent,
} from 'devextreme-angular';
import { ClientService } from 'src/app/core/service/client.service';
import { Client, ClientNull } from 'src/app/core/models/Client';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {

  @ViewChild(DxFormComponent, { static: false }) myform: DxFormComponent | undefined;

  public client: object;
  public colCountByScreen: object;
  public form: FormGroup;
  public mostrar: boolean = false;
  public createNewClient: boolean = false;

  ///public ident_Num: number = 0;
  public ident_Num: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
    ) {

      this.ident_Num = new FormControl('');

    this.client = ClientNull;

    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };

    this.form = this.formBuilder.group({
      IdClient:['', [Validators.required]],
      Name1:['', [Validators.required]],
      Name2:[''],
      LastName1:['', [Validators.required]],
      LastName2:[''],
      BirthDate: [new Date("01/01/1900"), [Validators.required]],
      IdentNum: [0, [Validators.required]]
    });

   }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    if(this.myform) this.myform.instance.validate();
  }

  findClient(): void{
    console.log(this.ident_Num.value);
    const id = this.ident_Num.value;
    this.clientService.GetClient(id).subscribe(
      (client)=>{
        console.log(client);
        this.setClientInfo(client);
      }
    );
  }

  private setClientInfo(client: Client) : void {

    if(this.IsClientEmpty(client)) {
      this.createNewClient = true;
      this.client = ClientNull;
    }
    else {
      this.client = client;
      this.createNewClient = false;
    }

  }
  private IsClientEmpty( client: Client) : Boolean {
    console.log(client);
    if(client.idClient === 0) return true;
    return false;
  }

  public createClient(e: any) {
    console.log(this.client);
  }

}
