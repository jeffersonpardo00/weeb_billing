import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { IndexComponent } from './components/index/index.component';
import { DxButtonModule, DxFormModule} from 'devextreme-angular';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    DxButtonModule,
    DxFormModule
  ]
})
export class BillingModule { }
