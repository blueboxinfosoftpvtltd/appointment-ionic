import { Component, OnInit } from '@angular/core';
import { Events,ModalController, PopoverController,LoadingController,MenuController,ToastController  } from '@ionic/angular';
import { AddvehiclePage } from '../addvehicle/addvehicle.page'
import {AuthService} from '../../app/auth.service';
import { Router } from '@angular/router';
import { PopoverPage } from '../popover/popover.page'
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage{
  dataReturned:any;
  IsValue: any;
  fname: any;
  lname: any;
  public messages;
  toast: any;
  loading: any;
  res: any;
  index: any;
  dealerid: any;
  cname:any;
  constructor(private events: Events,private storage: Storage,public toastController: ToastController,public loadingController: LoadingController,private authservice:AuthService,public popoverCtrl: PopoverController,public modalCtrl : ModalController,private router: Router) {
    this.IsValue = 0;
    this.res = new Array();
    console.log(this.res)
    this.storage.get('dealerid').then((val) => {
      console.log('dealerid', val);
      this.dealerid = val;
    });
   }


  async AddVehicle(CustomerId) {
    const modal = await this.modalCtrl.create({
      component: AddvehiclePage,
      componentProps: {
        "CustomerId": CustomerId,
        "paramTitle": "Add Vehicle"
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }

  openlist(i){
    console.log(i);
      this.IsValue = 1;
      this.index = i;   
  }

  hidelist(){
    this.IsValue = 0;
  }

  CreateAppointment(CustomerId,vin){
    let data = {
      'CustomerId' : CustomerId,
      "VIN": vin
    }
    this.authservice.secustidvin(data);
    this.router.navigateByUrl('/createappointment').then(() => {
      // this.events.publish('GetCustomerId', data);
    
      console.log('Published');
    });
    // this.router.navigateByUrl('/createappointment');
  }

  
  async openpopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event: ev,
      translucent: true,
      cssClass: 'custom-popover'
    });
    return await popover.present();
  }

  setFilteredItems(event){
    console.log(event);
  }



  Search(){
    // if(this.fname == null || this.fname == '' || this.fname == undefined ){
    //   if(this.lname == null || this.lname == '' || this.lname == undefined){
    //     if(this.cname == null || this.cname == '' || this.cname == undefined){
    //       this.authservice.showToast("Enter atleast  !!");
    //     }
    //     else{
          this.authservice.presentLoading();
          this.authservice.GetSearchCustomer(this.dealerid,this.fname,this.lname,this.cname).subscribe(res =>{
            this.res = res;
            console.log(this.res);
          this.authservice.dismissLoading();
            
          })
    //     }
    //   }
      
    // }

    
    
    
  }
  addcust(){
    this.router.navigateByUrl('/createcust');
  }
}
