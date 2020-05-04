import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { IonInput } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-createcust',
  templateUrl: './createcust.page.html',
  styleUrls: ['./createcust.page.scss'],
})
export class CreatecustPage implements OnInit {
  // @ViewChild('inputId', {  static: false })  inputElement: IonInput;
  country: any;
  countryid: any;
  stateid: any;
  state: any;
  city: any;
  cityid: any;
  years: any;
  yearid: any;
  make: any;
  modelid: any;
  colors: any
  colorid: any;
  makeid: any;
  model: any;
  trim: any;
  trimid: any;

  fname: any;
  lname: any;
  saddress: any;
  saddress1: any;
  zipcode: any;
  mobile: any;
  workphone: any;
  homephone: any;
  email: any;
  vin: any;
  mileage: any;
  avgmileage: any;
  licenseplate: any;
  res: any;
  userid: any;
  dealerid: any;
  companyname: any;
  username: any;
  password: any;
  Page; any;
  constructor(private authservice: AuthService, private storage: Storage, private router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data);
      this.Page = data.Page;
    })
    this.storage.get('dealerid').then((val) => {
      console.log('dealerid', val);
      this.dealerid = val;
      this.getCountry();
      this.getYears();
    });
    this.storage.get('userid').then((val) => {
      console.log('userid', val);
      this.userid = val;
    });
  }
  //   ngAfterViewInit() {
  //     setTimeout(() => {
  //        this.inputElement.setFocus();
  //   }, 400);
  // }

  compchange() {
    if (this.companyname.length >= 1) {
      this.fname = "";
      this.lname = "";
      this.username = this.companyname;
    }
  }

  fnamechange() {
    if (this.fname.length >= 1) {
      this.companyname = "";
      this.username = this.fname;
    }
  }
  // lnamechange(){
  //   if(this.lname.length >= 1){
  //     this.companyname = "";
  //   }
  // }


  getCountry() {
    this.authservice.GetCountry(this.dealerid).subscribe(res => {
      this.country = res;
      //this.countryid = this.customerdata[0].CountryId;
      this.getState();
      console.log(this.country);
    })
  }
  getState() {
    this.authservice.GetState(this.countryid, this.dealerid).subscribe(res => {
      this.state = res;
      //this.stateid = this.customerdata[0].StateId;
      this.GetCity();
      console.log(this.state);
    })
  }
  GetCity() {
    this.authservice.GetCity(this.stateid, this.dealerid).subscribe(res => {
      this.city = res;
      console.log("call again");
      if (this.city != "" || this.city != undefined) {
        // this.cityid = this.customerdata[0].CityId;
      }
      this.authservice.dismissLoading();
      console.log(this.city);
    })
  }
  getYears() {
    this.authservice.GetYearDetails(this.dealerid).subscribe(res => {
      this.years = res;
      this.getMake();
      console.log(this.years);
    })
  }

  getMake() {
    this.authservice.GetMakeDetails(this.dealerid).subscribe(res => {
      this.make = res;
      this.getColors();
      console.log(this.make);
    })
  }

  getColors() {
    this.authservice.GetColors(this.dealerid).subscribe(res => {
      this.colors = res;
      this.GetTrimDetails();
      console.log(this.colors);
    })
  }

  GetModelDetails() {
    console.log(this.makeid);
    this.authservice.GetModelDetails(this.makeid, this.dealerid).subscribe(res => {
      this.model = res;
      this.authservice.dismissLoading();
      console.log(this.model);
    })
  }

  GetTrimDetails() {
    this.authservice.GetTrimDetails(this.dealerid).subscribe(res => {
      this.trim = res;
      // this.GetVehicleDetailByVINCustomerID();
      console.log(this.trim);
    })
  }

  ChangeCountry(event) {
    this.countryid = event.detail.value;
    console.log(this.countryid);
    this.getState();
  }
  ChangeState(event) {
    this.stateid = event.detail.value;
    console.log(this.stateid);
    this.GetCity();
  }
  ChangeCity(event) {
    this.cityid = event.detail.value;
    console.log(this.cityid);
  }
  ChangeYear(event) {
    this.yearid = event.detail.value;
    console.log(this.yearid);
  }

  ChangeMake(event) {
    this.makeid = event.detail.value;
    console.log(this.makeid);
    this.GetModelDetails();
  }

  ChangeModel(event) {
    this.modelid = event.detail.value;
    console.log(this.modelid);
  }

  ChangeTrim(event) {
    this.trimid = event.detail.value;
    console.log(this.trimid);
  }

  ChangeColor(event) {
    this.colorid = event.detail.value;
    console.log(this.colorid);
  }

  SelectModel() {
    this.authservice.showToast("First Select Make");
  }

  Changelname() {
    if (this.fname != null || this.fname != '' || this.fname != undefined) {
      this.username = this.fname.charAt(0) + this.lname;
    }
  }
  InsertCustomerInfo() {
    // if(this.fname== null || this.fname=="" || this.fname==undefined || this.lname== null || this.lname=="" || this.lname==undefined || this.companyname== null || this.companyname=="" || this.companyname==undefined){
    //   this.authservice.showToast("Please enter Customer name");
    // }
    // else
    if (this.saddress == null || this.saddress == '' || this.saddress == undefined) {
      this.authservice.showToast("Please enter Street Address");
    } else if (this.countryid == null || this.countryid == '' || this.countryid == undefined) {
      this.authservice.showToast("Please select country");
    } else if (this.stateid == null || this.stateid == '' || this.stateid == undefined) {
      this.authservice.showToast("Please select state");
    } else if (this.cityid == null || this.cityid == '' || this.cityid == undefined) {
      this.authservice.showToast("Please select city");
    } else if (this.mobile == null || this.mobile == '' || this.mobile == undefined) {
      this.authservice.showToast("Please enter mobile no.");
    } else if (this.email == null || this.email == '' || this.email == undefined) {
      this.authservice.showToast("Please enter email");
    } else if (this.vin == null || this.vin == '' || this.vin == undefined) {
      this.authservice.showToast("Please enter VIN");
    } else if (this.username == null || this.username == '' || this.username == undefined) {
      this.authservice.showToast("Username is mandatory !!");
    }
    // }else if(this.password== null || this.password=='' || this.password==undefined){
    //   this.authservice.showToast("Please enter password");
    // }
    else {
      if (this.fname == null || this.fname == '' || this.fname == undefined) {
        this.fname = "";
      }
      if (this.password == null || this.password == '' || this.password == undefined) {
        this.password = "";
      }

      if (this.lname == null || this.lname == '' || this.lname == undefined) {
        this.lname = "";
      } if (this.companyname == null || this.companyname == '' || this.companyname == undefined) {
        this.companyname = "";
      }
      if (this.mileage == null || this.mileage == '' || this.mileage == undefined) {
        this.mileage = "0";
      }
      if (this.avgmileage == null || this.avgmileage == '' || this.avgmileage == undefined) {
        this.avgmileage = "0";
      }
      if (this.makeid == null || this.makeid == '' || this.makeid == undefined) {
        this.makeid = "0";
      }
      if (this.yearid == null || this.yearid == '' || this.yearid == undefined) {
        this.yearid = "0";
      }
      if (this.modelid == null || this.modelid == '' || this.modelid == undefined) {
        this.modelid = "0";
      }
      if (this.trimid == null || this.trimid == '' || this.trimid == undefined) {
        this.trimid = "0";
      }
      if (this.colorid == null || this.colorid == '' || this.colorid == undefined) {
        this.colorid = "0";
      }
      if (this.licenseplate == null || this.licenseplate == '' || this.licenseplate == undefined) {
        this.licenseplate = "";
      }
      if (this.zipcode == null || this.zipcode == '' || this.zipcode == undefined) {
        this.zipcode = "";
      }
      if (this.workphone == null || this.workphone == '' || this.workphone == undefined) {
        this.workphone = "";
      }
      if (this.homephone == null || this.homephone == '' || this.homephone == undefined) {
        this.homephone = "";
      }
      this.authservice.presentLoading();
      this.authservice.InsertNewCustomer(this.dealerid, this.fname, this.lname, this.companyname, this.saddress,
        this.countryid, this.stateid, this.cityid, this.mobile, this.email, this.vin, this.username, this.password,
        this.saddress1, this.zipcode, this.homephone, this.workphone, this.yearid, this.makeid, this.modelid,
        this.trimid, this.colorid, this.mileage, this.avgmileage, this.licenseplate, this.userid
      ).subscribe(res => {
        this.res = res;
        console.log(this.res);
        this.authservice.dismissLoading();
        this.authservice.showToast(this.res.Message);
        let object = {
          Page: this.Page
        }
        //this.router.navigate(['/createcust'],{ queryParams: object });
        this.router.navigate(['/appointment'], { queryParams: object });
      })
    }
  }

}
