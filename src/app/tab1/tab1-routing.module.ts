import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { OpenRepairOrdersComponent } from './open-repair-orders/open-repair-orders.component';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    canActivate : [AuthGuard],
    component: Tab1Page,
  },
  {
    path: 'appointments',
    canActivate : [AuthGuard],
    component: Tab1Page,
  },
  {
    path :'openRepairOrder',
    canActivate: [AuthGuard],
    outlet : 'new',
    component : OpenRepairOrdersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
