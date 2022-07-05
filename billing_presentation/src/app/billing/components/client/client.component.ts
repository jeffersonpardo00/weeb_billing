import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, ViewChild, AfterViewInit } from '@angular/core';
import { Client, ClientNull } from 'src/app/core/models/Client';
import { ClientService } from 'src/app/core/service/client.service';

import {
  DxFormComponent
} from 'devextreme-angular';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit, OnChanges, AfterViewInit  {

  @ViewChild(DxFormComponent, { static: false }) myform: DxFormComponent | undefined;
  @Output() ClientEvent = new EventEmitter<Client>();
  @Output() newClientEvent = new EventEmitter<boolean>();
  @Input() entryClientId:  number;

  public colCountByScreen: object;
  public client: Client;
  public createNewClient: boolean;

  constructor(
    private clientService: ClientService
  ) {
    this.client = ClientNull;
    this.entryClientId = 0;
    this.createNewClient = false;
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if(this.myform) this.myform.instance.validate();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(this.entryClientId)
    this.findClient(this.entryClientId.toString());
  }

  emittClient(){
      this.ClientEvent.emit(this.client);
  }

  updateClient(){
    // si es valido
    this.emittClient();
  }

  findClient(ident_Num: string): void{

    this.clientService.GetClient(ident_Num).subscribe(
      (client)=>{
        this.setClientInfo(client);
        this.emittClient();
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
    this.newClientEvent.emit(this.createNewClient);
  }
  private IsClientEmpty( client: Client) : Boolean {
    if(client.idClient === 0) return true;
    return false;
  }

}
