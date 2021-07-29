import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, IonInfiniteScroll, ToastController } from '@ionic/angular';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// import { DatePicker } from '@ionic-native/date-picker/ngx';
import { HttpClient } from '@angular/common/http'; 
import { from, Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';





@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data = [];
  items = [];
  customAlertOptions: any = {
    header: 'Choose Dealer',
    translucent: true,

  };
  mechanic_name_list =[
    {name:'Mark Henry'},
    {name:'Paul Billing'},
    {name:'John Steven'},
    {name:'Harry Hustin'},
    {name:'Noel Kloen'},
    {name :'Jean Abraham'},
    {name :'Shean Miceals'},
    {name :'Randy ortan'},
    {name :'John Carter'},
    {name :'Jake Sully'}
  ]
 
  displayList: any=[];
  tempDuplicateArr: any=[];
  filter_advisors_list:any=[]
  filter_transport_list:any=[]
  enableTableView= false;
  searchText: any='';
  noDataFlag=false;
  showFilters = false;
  filterBadgeCount = 0;
  advisor_code:string;
  transport_code:string;
  filtered_date :any;


  scannedData : any;
    constructor(private http : HttpClient,
      public toastController: ToastController,
      private menu: MenuController,
      private actionSheetController: ActionSheetController,
      private router : Router) {  
       }

   getJSON(): Observable<any> {
    return this.http.get("./assets/database/db.json");
    }

  ngOnInit(){
    this.getJSON().subscribe(data => {
      console.log(data || [])
      this.displayList = data['displayList'] || [];
      this.tempDuplicateArr = data['displayList'] || [];
      this.filter_advisors_list = data['filter_advisors_list'] || [];
      this.filter_transport_list = data['filter_transport_list'] || [];
      this.presentToast(`Initally Loaded ${this.displayList.length} Records..`)
    }); 
  }

  logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("filterAccess");
    this.router.navigate(['/login/userLogin']);
  }

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message || 'Default Toast  ',
      duration: 2000,
      position: 'top',
      color : 'dark'
    });
    toast.present();
  }
  

  doInfinite(infiniteScroll:any) {
    if(!this.noDataFlag){
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        const customer = (this.mechanic_name_list[Math.floor(Math.random()*this.mechanic_name_list.length)]);
        const obj={
          appointment_time : 'Tomorrow @ 10:10 AM',
          advisor_name : 'Test Advisor',
          // customer_name : 'Niel Amstrong',
          customer_name : customer['name'],
          ref_id : 'SKJDBF37JSNJKn',
          vehicle_name : '2021 Hyundai Elantra ABS',
          vehicle_code : 'WBAJBKJ7575',
          progress_rating_count : '0.1',
          progress_status : '1',
          progress_chips : [
            {name : 'Synced'},
            {name : 'Drop Off'}
          ]
        }
        this.displayList.push(obj);
        this.tempDuplicateArr.push(obj);
      }
      infiniteScroll.target.complete();
    }, 500);
  }
  }

  filterData(event : any){
    let filteredArray = [];
    if(event.target.value!==''){
      for(let obj of  this.displayList){
        if(obj['customer_name'].toString().toLocaleLowerCase().includes((event.target.value).toString().toLocaleLowerCase())){
          filteredArray.push(obj); 
        }
      }
    }
      this.noDataFlag = (filteredArray.length===0 && event.target.value !=='');
      this.displayList = event.target.value===''?this.tempDuplicateArr : filteredArray;
  }

  changeView(event: any){
    if(event.target.value==='tableView'){
      this.enableTableView = true;
    }else {
      this.enableTableView = false;
    }
  }

  addFilterBadgeCount(){
    this.filterBadgeCount = this.filterBadgeCount + 1;
    // if(fromWhere === 'advisor_filter'){
    //   this.filterBadgeCount  = this.filterBadgeCount +1;
    //   if(this.filterBadgeCount >1){
    //     this.filterBadgeCount = this.advisor_code ? (this.filterBadgeCount - 1) : this.filterBadgeCount
    //   }
    // }else if(fromWhere ==='transport_filter'){
    //   this.filterBadgeCount  = this.filterBadgeCount +1;
    //   if(this.filterBadgeCount >2){
    //     this.filterBadgeCount = this.transport_code ? (this.filterBadgeCount - 1) : this.filterBadgeCount
    //   }
    // }else if(fromWhere ==='date_filter'){
    //   this.filterBadgeCount  = this.filterBadgeCount +1;
    //   if(this.filterBadgeCount >3){
    //     this.filterBadgeCount = this.filtered_date ? (this.filterBadgeCount - 1) : this.filterBadgeCount
    //   }
    // }
  }

  clearFilters(){
    this.advisor_code = undefined;
    this.transport_code = undefined;
    this.filtered_date = '';
    setTimeout(() => {
    this.filterBadgeCount = 0;
    }, 100);
  }

  async openFilters(){
    if(sessionStorage.getItem("filterAccess")==='0'){
      this.presentToast(`You Are not a priviledged User`);
      return;
    }
    // this.menu.enable(true, 'first');
    // this.menu.open('first');
      const actionSheet = await this.actionSheetController.create({
        header: 'How To Open Filters',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Open in SideNav',
          handler: () => {
            this.menu.enable(true, 'first');
            this.menu.open('first');
          }
        }, {
          text: 'Open In Div Tag(Show/Hide)',
          handler: () => {
            this.showFilters = !this.showFilters;
          }
        }]
      });
      await actionSheet.present();  
  }

  applyFilters(){
    this.menu.close('first')
  }




}
