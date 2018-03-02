import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CompanyComponent } from './company/company.component';
//import { StoreComponent } from '../store/store.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      
      {
        path: 'company',
        component: CompanyComponent
      },
        {
          path: '',
          redirectTo: 'company',
          pathMatch: 'full'
        },
        {
          path: 'items',
          loadChildren: './items/items.module#ItemsModule'
        },
        {
          path: 'store',
          loadChildren: './store/store.module#StoreModule'
        }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule { }
