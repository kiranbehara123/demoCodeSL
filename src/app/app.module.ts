import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

@NgModule({
  declarations: [AppComponent,NoPageFoundComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
