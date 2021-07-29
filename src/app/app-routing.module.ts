import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';


const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'tabs',
    canActivate : [AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'login',
    // canActivateChild : [AuthGuard],
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
 
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    component : NoPageFoundComponent
  },
  // {
  //   path:'t',
  //   canActivate:[AuthGuard],
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
