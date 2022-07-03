
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxSelectBoxModule,
  DxTextAreaModule,
  DxFormModule,
  DxFormComponent,
} from 'devextreme-angular';
import { ClientService } from 'src/app/core/service/client.service';

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

  ///public ident_Num: number = 0;
  public ident_Num: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
    ) {

      this.ident_Num = new FormControl('');

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

    this.clientService.GetClient('2123313828').subscribe(
      (client)=>{
       // console.log(client);
        this.client = client;
        /*this.client = {
          IdClient:22,
          Name1:client.name1,
          Name2:client.name2,
          LastName1:'fgdfgdfg',
          LastName2:'fgdfgdfg',
          BirthDate: new Date("01/02/1900"),
          IdentNum: 33995
        }*/
        this.form.patchValue(
         //  client
         {
          Name1: client.name1,
          Name2: client.name2
         }
        );
      }
    );

  }

  ngAfterViewInit() {
    if(this.myform) this.myform.instance.validate();
  }

  public findClient(){
    console.log(this.ident_Num.value);
  }
  public createClient(e: any) {
    console.log(this.client);
  }

}
