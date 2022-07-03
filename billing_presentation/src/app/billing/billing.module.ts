import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { IndexComponent } from './components/index/index.component';
import { DxButtonModule, DxFormModule} from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    DxButtonModule,
    DxFormModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class BillingModule { }
