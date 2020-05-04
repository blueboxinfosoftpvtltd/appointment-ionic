import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import {AuthService} from '../../../app/auth.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-customeinfo',
  templateUrl: './customeinfo.component.html',
  styleUrls: ['./customeinfo.component.scss'],
})
export class CustomeinfoComponent {
  fname: any;
  lname: any;
  saddress: any;
  saddress1: any;
  zipcode: any;
  mobile: any;
  workphone: any;
  homephone: any;
  email: any;
  countryid: any;
  country: any;
  stateid: any;
  state: any;
  city: any;
  cityid: any;
  dealerid: any;
  userid: any;
  res: any;
  CustomerId: any;
  VIN: any;
  customerdata: any;
  constructor(private storage: Storage,public events: Events,private authservice:AuthService) { 
    events.subscribe('GetCustomerId', (data) => {
      console.log(data);
      this.CustomerId = data.CustomerId;
      this.VIN = data.VIN;
      console.log(this.CustomerId)
      this.storage.set("CustomerId",this.CustomerId);  
      this.storage.set("VIN",this.VIN);  
    })
    this.storage.get('dealerid').then((val) => {
      console.log('dealerid', val);
      this.dealerid = val;
    });
    this.storage.get('userid').then((val) => {
      console.log('userid', val);
      this.userid = val;
    });
    setTimeout(() => {
      this.storage.get('CustomerId').then((val) => {
        console.log('CustomerId', val);
        this.CustomerId = val;
        this.GetCustomer(this.CustomerId,this.dealerid);
      });

      this.storage.get('VIN').then((val) => {
        console.log('VIN', val);
        this.VIN = val;
      });
  }, 1000);    
  }

  ionviewwillenter(){
console.log("triggered");
  }
  getCountry(){
    this.authservice.GetCountry(this.dealerid).subscribe(res =>{
      this.country = res;
      this.countryid = this.customerdata[0].CountryId;
      this.getState();
      console.log(this.country);
    })
}

GetCustomer(CustomerId,dealerid){
  console.log(this.dealerid);
  console.log(this.CustomerId);
  this.authservice.presentLoading();
      this.authservice.GetCustomer(dealerid,CustomerId).subscribe(res =>{
        this.customerdata = res;
        this.fname = this.customerdata[0].FirstName;
        this.lname = this.customerdata[0].LastName;
        this.saddress = this.customerdata[0].Address1;
        this.saddress1 = this.customerdata[0].Address2;
        this.zipcode = this.customerdata[0].ZipCode;
        this.mobile = this.customerdata[0].MobilePhone;
        this.workphone = this.customerdata[0].WorkPhone;
        this.homephone = this.customerdata.HomePhone;
        this.email = this.customerdata[0].EmailId;
        console.log(this.customerdata);
        this.getCountry();
       
      })
  }

  ChangeCountry(event){
    console.log(event);
    this.countryid = event.detail.value;
    console.log(this.countryid);
    this.getState();
  }

  getState(){
    this.authservice.GetState(this.countryid,this.dealerid).subscribe(res =>{
      this.state = res;
      this.stateid = this.customerdata[0].StateId;
      this.GetCity();
      console.log(this.state);
    })
}

  ChangeState(event){
    console.log(event);
    this.stateid = event.detail.value;
    console.log(this.stateid);
    this.GetCity();
  }

  GetCity(){
  this.authservice.GetCity(this.stateid,this.dealerid).subscribe(res =>{
    this.city = res;
    console.log("call again");
    if(this.city != "" || this.city != undefined ){
      this.cityid = this.customerdata[0].CityId;
    }
    this.authservice.dismissLoading();
    console.log(this.city);
  })
}


ChangeCity(event){
  console.log(event);
  this.cityid = event.detail.value;
  console.log(this.cityid);
}

UpdateCustomerInfo(){  
  // this.events.publish('step:created', "step1");
  if(this.fname== null || this.fname=='' || this.fname==undefined){
    this.authservice.showToast("Please enter first name");
  }else if(this.lname== null || this.lname=='' || this.lname==undefined){
    this.authservice.showToast("Please enter last name");
  }else if(this.saddress== null || this.saddress=='' || this.saddress==undefined){
    this.authservice.showToast("Please enter Street Address");
  }else if(this.countryid== null || this.countryid=='' || this.countryid==undefined){
    this.authservice.showToast("Please select country");
  }else if(this.stateid== null || this.stateid=='' || this.stateid==undefined){
    this.authservice.showToast("Please select state");
  }else if(this.cityid== null || this.cityid=='' || this.cityid==undefined){
    this.authservice.showToast("Please select city");
  }else if(this.mobile== null || this.mobile=='' || this.mobile==undefined){
    this.authservice.showToast("Please enter mobile no.");
  }else if(this.email== null || this.email=='' || this.email==undefined){
    this.authservice.showToast("Please enter email");
  }else{
   
    this.authservice.presentLoading();
    this.authservice.CustomerInsertUpdate(this.CustomerId,this.fname,this.lname,this.email,this.homephone,this.workphone,this.mobile,this.saddress,this.saddress1,this.countryid,this.cityid,this.stateid,this.zipcode,this.userid,this.dealerid).subscribe(res =>{
      this.res = res;
      console.log(this.res);
      this.authservice.dismissLoading();
      this.authservice.showToast(this.res.Message);
      this.events.publish('step:created', "step1");
      let data={
        "fname":this.fname,
        "lname": this.lname
      }
      this.events.publish('Customerdata', data);
      let data1 = {
        'CustomerId' : this.CustomerId,
        "VIN": this.VIN
      }
      this.events.publish('GetCustomerId', data1);
    })
  }
 
}

}
