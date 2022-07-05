import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxFormModule, DxDataGridModule} from 'devextreme-angular';

import { BillingRoutingModule } from './billing-routing.module';
import { IndexComponent } from './components/index/index.component';
import { BillComponent } from './components/bill/bill.component';
import { ClientComponent } from './components/client/client.component';

@NgModule({
  declarations: [
    IndexComponent,
    BillComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    DxButtonModule,
    DxFormModule,
    HttpClientModule,
    ReactiveFormsModule,
    DxDataGridModule
  ]
})
export class BillingModule { }
