import { Component, OnInit, ɵConsole } from '@angular/core';
import { Events } from '@ionic/angular';
import {AuthService} from '../../../app/auth.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-vehicleinfo',
  templateUrl: './vehicleinfo.component.html',
  styleUrls: ['./vehicleinfo.component.scss'],
})
export class VehicleinfoComponent implements OnInit {
  vin: any;
  mileage: any;
  avgmileage: any;
  licenseplate: any;
  years: any;
  make: any;
  colors: any;
  public VIN: any;
  public CustomerId: any;
  public dealerid: any;
  res: any;
  vehicledata: any;
  yearid: any;
  makeid: any;
  year: any;
  modelid: any;
  trimid: any;
  colorid: any;
  trim: any;
  model: any;
  userid: any;
  constructor(private storage: Storage,public events: Events,private authservice:AuthService) {
  
    //
   }

  ngOnInit() {
    this.authservice.presentLoading();
    this.getYears();
    this.events.subscribe('Vehicledata', (data) => {
      console.log("vehicle info page",data);
      this.CustomerId = data.custid;
      this.vin = data.vin;
    })
  }

  getYears(){
      this.authservice.GetYearDetails(this.dealerid).subscribe(res =>{
        this.years = res;
        this.getMake();
        console.log(this.years);
      })
  }
  

  getMake(){
      this.authservice.GetMakeDetails(this.dealerid).subscribe(res =>{
        this.make = res;
        this.getColors();
        console.log(this.make);
      })
  }


  getColors(){
      this.authservice.GetColors(this.dealerid).subscribe(res =>{
        this.colors = res;
        this.GetTrimDetails();
        //this.GetModelDetails();
        console.log(this.colors);
      })
  }
  GetModelDetails(){
    console.log(this.makeid);
    this.authservice.GetModelDetails(this.makeid,this.dealerid).subscribe(res =>{
      if(res != null){
        this.model = res;   
      }
      this.authservice.dismissLoading();
      console.log(this.model);
    })
}

GetTrimDetails(){
  this.authservice.GetTrimDetails(this.dealerid).subscribe(res =>{
    this.trim = res;
    this.GetVehicleDetailByVINCustomerID();
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
  // setTimeout(() => {
  //   this.GetModelDetails();  
  // }, 1000);
  
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

  GetVehicleDetailByVINCustomerID(){
    console.log(this.vin);
    this.storage.get('dealerid').then((val) => {
      console.log('dealerid', val);
      this.dealerid = val;
    
    // this.storage.get('CustomerId').then((val) => {
    //   console.log('CustomerId', val);
    //   this.CustomerId = val;
    
    // this.storage.get('VIN').then((val) => {
    //   console.log('VIN', val);
    //   this.VIN = val;

    this.authservice.GetVehicleDetailByVINCustomerID(this.dealerid,this.CustomerId,this.vin,"").subscribe(res =>{
      this.vehicledata = res;
      this.vin = this.vehicledata[0].VIN;
      this.yearid = this.vehicledata[0].YearId;
      this.makeid = this.vehicledata[0].MakeId;
      this.modelid = this.vehicledata[0].ModelId;
      this.trimid = this.vehicledata[0].TrimId;
      this.colorid = this.vehicledata[0].ColorId;
      this.mileage = this.vehicledata[0].Milage;
      this.avgmileage = this.vehicledata[0].AverageMilesMonth;
      this.licenseplate =  this.vehicledata[0].LicensePlate;
      console.log(this.vehicledata);
      console.log(this.vin);
     // setTimeout(() => {
        this.GetModelDetails();
      //}, 500);
      
    })
  });
// });
// });
}

UpdateVehicleInfo(){
  // this.events.publish('step:created', "step2");
  if(this.vin== null || this.vin=='' || this.vin==undefined){
    this.authservice.showToast("Please enter VIN");
  }else if(this.yearid== null || this.yearid=='' || this.yearid==undefined || this.yearid == "0"){
    this.authservice.showToast("Please select Year");
  }else if(this.makeid== null || this.makeid=='' || this.makeid==undefined || this.makeid == "0"){
    this.authservice.showToast("Please select Make");
  }else if(this.modelid== null || this.modelid=='' || this.modelid==undefined || this.modelid == "0"){
    this.authservice.showToast("Please select Model");
  }else{
    this.authservice.presentLoading();
    this.storage.get('dealerid').then((val) => {
      console.log('dealerid', val);
      this.dealerid = val;
    
    this.storage.get('CustomerId').then((val) => {
      console.log('CustomerId', val);
      this.CustomerId = val;
    
    this.storage.get('userid').then((val) => {
      console.log('userid', val);
      this.userid = val;

    this.authservice.InsertVehicle(this.CustomerId,this.colorid,this.licenseplate,this.avgmileage,this.mileage,this.vin,this.makeid,this.yearid,this.modelid,this.trimid,this.userid,this.dealerid).subscribe(res =>{
      this.res = res;
      console.log(this.res);
      this.authservice.dismissLoading();
      this.authservice.showToast(this.res.Message);
      let vehicledata={
        "vin":this.vin,
        "yearid": this.yearid,
        "makeid": this.makeid,
        "modelid": this.modelid,
        "trimid": this.trimid,
        "colorid": this.colorid,
        "mileage": this.mileage,
        "avgmileage": this.avgmileage,
        "licenseplate": this.licenseplate
      }
      this.events.publish('step:created', {"step":"step2","data":vehicledata});
      // this.events.publish('Vehicledata', vehicledata);
    })
  })
})
})
  }
 
}
}
