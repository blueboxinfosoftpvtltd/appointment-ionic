import { Component, OnInit } from '@angular/core';
import { ModalController ,NavParams} from '@ionic/angular';
import {AuthService} from '../../app/auth.service';
import { Storage } from '@ionic/storage';
import { Location } from "@angular/common";
@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.page.html',
  styleUrls: ['./addvehicle.page.scss'],
})
export class AddvehiclePage  {
  modalTitle:string;
  CustomerId:any;
  years: any;
  make: any;
  colors: any;
  makeid: any;
  model: any;
  modelid: any;
  trim: any;
  trimid: any;
  yearid: any;
  colorid: any;
  licenseplate: any;
  vin: any;
  mileage: any;
  avgmileage: any;
  res: any;
  dealerid: any;
  userid: any;
  constructor(private storage: Storage,public modalCtrl : ModalController,private navParams: NavParams,private authservice:AuthService,private loc : Location) {
    
    console.log(this.userid)
   }

  ngOnInit() {
    this.storage.get('dealerid').then((val) => {
      console.log('dealerid', val);
      this.dealerid = val;
    });
    this.storage.get('userid').then((val) => {
      console.log('userid', val);
      this.userid = val;
      this.getYears();
    this.getMake();
    this.getColors();
    this.GetTrimDetails();
    this.CustomerId = this.navParams.data.CustomerId;
    this.modalTitle = this.navParams.data.paramTitle;
    });
    
  }



  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalCtrl.dismiss(onClosedData);
  }

  getYears(){
    this.authservice.presentLoading();
      this.authservice.GetYearDetails(this.dealerid).subscribe(res =>{
        this.years = res;
        console.log(this.years);
      })
  }

  getMake(){
      this.authservice.GetMakeDetails(this.dealerid).subscribe(res =>{
        this.make = res;
        console.log(this.make);
      })
  }

  getColors(){
      this.authservice.GetColors(this.dealerid).subscribe(res =>{
        this.colors = res;
        console.log(this.colors);
      this.authservice.dismissLoading();
      })
  }

  GetModelDetails(){
    this.authservice.GetModelDetails(this.makeid,this.dealerid).subscribe(res =>{
      this.model = res;
      console.log(this.model);
    })
}

GetTrimDetails(){
  this.authservice.GetTrimDetails(this.dealerid).subscribe(res =>{
    this.trim = res;
    console.log(this.trim);
  })
}

ChangeYear(event){
  this.yearid = event.detail.value;
  console.log(this.yearid);
}

ChangeMake(event){
  this.makeid = event.detail.value;
  console.log(this.makeid);
  this.GetModelDetails();
  }

ChangeModel(event){
  console.log(event);
  this.modelid = event.detail.value;
  console.log(this.modelid);
} 

ChangeTrim(event){
  console.log(event);
  this.trimid = event.detail.value;
  console.log(this.trimid);
}

ChangeColor(event){
  console.log(event);
  this.colorid = event.detail.value;
  console.log(this.colorid);
}

UpdateVehicleInfo(){
  if(this.vin== null || this.vin=='' || this.vin==undefined){
    this.authservice.showToast("Please enter VIN");
  }else if(this.yearid== null || this.yearid=='' || this.yearid==undefined){
    this.authservice.showToast("Please select Year");
  }else if(this.makeid== null || this.makeid=='' || this.makeid==undefined){
    this.authservice.showToast("Please select Make");
  }else if(this.modelid== null || this.modelid=='' || this.modelid==undefined){
    this.authservice.showToast("Please select Model");
  }else{
    this.authservice.presentLoading();
    this.authservice.InsertVehicle(this.CustomerId,this.colorid,this.licenseplate,this.avgmileage,this.mileage,this.vin,this.makeid,this.yearid,this.modelid,this.trimid,this.userid,this.dealerid).subscribe(res =>{
      this.res = res;
      console.log(this.res);
      this.authservice.dismissLoading();
      this.authservice.showToast(this.res.Message);
      this.modalCtrl.dismiss();
      this.loc.back();
    })
  }
 
}

}
