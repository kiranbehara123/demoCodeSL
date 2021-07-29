import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    canActivate : [AuthGuard],
    component: Tab3Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
