import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  userId: string;
  password : string;
  infoMessage = '';
  infoMessageColor='';
  constructor(public toastController: ToastController,private router : Router) { }

  ngOnInit() {}

  loginUser(){
    if(this.userId===null || this.userId===undefined || this.userId ===''){
      this.presentToast('Please Enter User ID',3000);
      this.showInfoMessage('danger','Please Enter User ID')
      return;
    }
    if(this.password === null || this.password===undefined || this.password ===''){
      this.presentToast('Please Enter Password',3000);
      this.showInfoMessage('danger','Please Enter Password')
      return;
    }
    let date = new Date();
    const userToken = `${this.userId}~AUTH_US_TO~${date.getTime()}`;
    sessionStorage.setItem("token",userToken);
    this.showInfoMessage('success','Login Success');
    setTimeout(() => {
      const filterAccessFlag = this.userId ==='sobhan' || this.userId ==='mani' || this.userId ==='kiran'
      this.router.navigate(['/tabs/appointments'])
      sessionStorage.setItem("filterAccess",filterAccessFlag?"1":"0")
    }, 1000);
  }

  resetData(){
    this.userId = '';
    this.password='';
    this.infoMessage='';
  }

  showInfoMessage(color:string,message:string){
    this.infoMessageColor = color 
    this.infoMessage = message
  }

  async presentToast(message:string,time:number) {
    const toast = await this.toastController.create({
      message: message || 'Default Toast  ',
      duration: time,
      position: 'top',
      color : 'dark'
    });
    toast.present();
  }

}
