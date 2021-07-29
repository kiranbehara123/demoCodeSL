import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'appointments',
        canActivate : [AuthGuard],
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'walkaround',
        canActivate : [AuthGuard],
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'services',
        canActivate : [AuthGuard],
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'summary',
        canActivate : [AuthGuard],
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
    
      
      // {
      //   path: '',
      //   redirectTo: '/smartlane/appointments',
      //   pathMatch: 'full'
      // }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/smartlane/appointments',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
