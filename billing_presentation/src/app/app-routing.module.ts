import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
      component:  AppComponent,
      children: [
        {
          path: '',
          redirectTo: '/billing',
          pathMatch: 'full',
        },
        {
          path: 'billing',
          loadChildren: () => import ('./billing/billing.module').then (m => m.BillingModule)
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
