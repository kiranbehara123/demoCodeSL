import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    canActivate : [AuthGuard],
    component: Tab2Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
