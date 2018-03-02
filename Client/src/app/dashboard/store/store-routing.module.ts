import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: StoreComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class StoreRoutingModule { }
