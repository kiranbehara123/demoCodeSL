import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) { }
  logout(){
    sessionStorage.setItem("token","");
    this.router.navigate(['/login']);
  }
}
