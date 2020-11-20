import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthService } from "../auth.service";
import { IonInput } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { ModalController, AlertController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { CitylistPage } from "../citylist/citylist.page";
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
} from "@angular/forms";
import { CustomerService } from "../services/customer.service";
@Component({
  selector: "app-createcust",
  templateUrl: "./createcust.page.html",
  styleUrls: ["./createcust.page.scss"],
})
export class CreatecustPage implements OnInit {
  // @ViewChild('inputId', {  static: false })  inputElement: IonInput;
  customerForm: FormGroup = new FormGroup({
    firstName: new FormControl("", []),
    lastName: new FormControl("", []),
    companyName: new FormControl("", []),
    addressLine1: new FormControl("", [Validators.required]),
    addressLine2: new FormControl("", []),
    country: new FormControl("", []),
    state: new FormControl("", []),
    city: new FormControl("", [Validators.required]),
    zipcode: new FormControl("", []),
    mobile: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^\d{10}$")]),
    workPhone: new FormControl("", []),
    homePhone: new FormControl("", []),
    email: new FormControl("", [Validators.required, Validators.email]),
    carVIN: new FormControl("", [Validators.required]),
    carModel: new FormControl("", []),
    carYear: new FormControl("", []),
    carColor: new FormControl("", []),
    carMake: new FormControl("", []),
    carMileage: new FormControl("", []),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", []),
  });

  countryid: any;
  stateid: any;
  state: any;
  city: any;
  cityid: any;
  years: any;
  yearid: any;
  make: any;
  modelid: any;
  colors: any;
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
  empdealerid: any;
  companyname: any;
  username: any;
  password: any;
  Page: any;
  newusername: any;
  countries: any;

  constructor(
    private authservice: AuthService,
    private storage: Storage,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data);
      this.Page = data.Page;
    });
    this.storage.get("dealerid").then((val) => {
      console.log("dealerid", val);
      this.dealerid = val;
      // this.authservice.presentLoading();
      this.getCountry();
      this.getYears();
    });
    /*this.storage.get('userid').then((val) => {
      console.log('userid', val);
      this.userid = val;*/

    this.storage.get("Employee_id").then((val) => {
      console.log(val);
      console.log(this.dealerid);

      this.empdealerid = val.filter((item) => {
        console.log(item);
        return item.DealershipId == this.dealerid;
      });
      console.log(this.empdealerid);
      if (this.empdealerid.length > 0) {
        this.userid = this.empdealerid[0].PKEmployeeID;
      }
      console.log(this.userid);
    });

    this.storage.get("username").then((val) => {
      this.newusername = val;
    });
  }

  //   ngAfterViewInit() {
  //     setTimeout(() => {
  //        this.inputElement.setFocus();
  //   }, 400);
  // }
  logout() {
    this.showAlert();
  }

  async showAlert() {
    const prompt = this.alertCtrl.create({
      header: "Appointment",
      message: "Are you sure you want to logout?",
      backdropDismiss: false,
      buttons: [
        {
          text: "Yes",
          handler: (data) => {
            this.storage.set("islogin", false);
            this.router.navigateByUrl("/login", { replaceUrl: true });
          },
        },
        {
          text: "No",
          handler: (data) => {
            console.log("No clicked");
          },
        },
      ],
    });
    (await prompt).present();
  }

  onCompanyNameChange() {
    if (this.customerForm.get("companyName").value.length >= 1) {
      this.customerForm.get("firstName").setValue("");
      this.customerForm.get("lastName").setValue("");
      this.customerForm
        .get("username")
        .setValue(this.customerForm.get("companyName").value);
    }
  }

  onFirstNameChange() {
    let username = "";
    if (this.customerForm.get("firstName").valid) {
      const fname = this.customerForm.get("firstName").value;
      this.customerForm.get("companyName").setValue("");
      username = fname;
      if (this.customerForm.get("lastName").valid) {
        const lname = this.customerForm.get("lastName").value;
        username = fname.charAt(0) + lname;
      }
    }
    this.customerForm.get("username").setValue(username);
  }

  getCountry() {
    this.authservice.GetCountry(this.dealerid).subscribe((res) => {
      this.countries = res;
      // set default country to USA
      this.countryid = 1;
      // load states
      this.getState();
    });
  }

  getState() {
    this.authservice
      .GetState(this.countryid, this.dealerid)
      .subscribe((res) => {
        this.state = res;
        console.log("states", this.state);

        // set default state to Texas
        this.stateid = 45;
      });
  }

  GetCity() {
    this.authservice
      .GetCitycust(this.stateid, this.dealerid)
      .subscribe((res) => {
        // this.city = res;
        this.authservice.setcity(res);
        console.log("call again", res);
        // if (this.city != "" || this.city != undefined) {
        //   // this.cityid = this.customerdata[0].CityId;
        // }
        this.authservice.dismissLoading();
        //  console.log(this.city);
      });
  }
  getYears() {
    this.authservice.GetYearDetails(this.dealerid).subscribe((res) => {
      this.years = res;
      this.getMake();
      console.log(this.years);
    });
  }

  getMake() {
    this.authservice.GetMakeDetails(this.dealerid).subscribe((res) => {
      this.make = res;
      this.getColors();
      console.log(this.make);
    });
  }

  getColors() {
    this.authservice.GetColors(this.dealerid).subscribe((res) => {
      this.colors = res;
      this.GetTrimDetails();
      console.log(this.colors);
    });
  }

  GetModelDetails() {
    console.log(this.makeid);
    this.authservice
      .GetModelDetails(this.makeid, this.dealerid)
      .subscribe((res) => {
        this.model = res;
        this.authservice.dismissLoading();
        console.log(this.model);
      });
  }

  GetTrimDetails() {
    this.authservice.GetTrimDetails(this.dealerid).subscribe((res) => {
      this.trim = res;
      // this.GetVehicleDetailByVINCustomerID();
      console.log(this.trim);
    });
  }

  onCountryChange() {
    this.countryid = this.customerForm.get("country").value;
    this.getState();
  }

  onStateChange() {
    this.stateid = this.customerForm.get("state").value;
    console.log("state", this.stateid);

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

  onLastNameChange() {
    // if first name valid
    if (
      this.customerForm.get("firstName").valid &&
      this.customerForm.get("lastName").valid
    ) {
      const fname = this.customerForm.get("firstName").value;
      const lname = this.customerForm.get("lastName").value;
      const username = fname.charAt(0) + lname;
      this.customerForm.get("username").setValue(username);
    }
  }

  onSubmit() {
    this.customerForm.markAllAsTouched();
    this.getFormValidationErrors();
    if (!this.customerForm.valid) {
      this.authservice.showToast("Please check the form and submit again.");
      return;
    }

    this.customerForm.get("country").setValue(this.countryid);
    this.customerForm.get("state").setValue(this.stateid);
    this.customerForm.get("city").setValue(this.cityid);
    this.authservice.presentLoading();
    this.authservice
      .InsertNewCustomer(
        this.dealerid,
        this.customerForm.get('firstName').value,
        this.customerForm.get('lastName').value,
        this.customerForm.get('companyName').value,
        this.customerForm.get('addressLine1').value,
        this.customerForm.get('country').value,
        this.customerForm.get('state').value,
        this.customerForm.get('city').value,
        this.customerForm.get('mobile').value,
        this.customerForm.get('email').value,
        this.customerForm.get('carVIN').value,
        this.customerForm.get('username').value,
        this.customerForm.get('password').value,
        this.customerForm.get('addressLine2').value,
        this.customerForm.get('zipcode').value,
        this.customerForm.get('homePhone').value,
        this.customerForm.get('workPhone').value,
        this.customerForm.get('carYear').value,
        this.customerForm.get('carMake').value,
        this.customerForm.get('carModel').value,
        this.trimid,
        this.customerForm.get('carColor').value,
        this.customerForm.get('carMileage').value,
        this.avgmileage,
        this.licenseplate,
        this.userid
      )
      .subscribe((res) => {
        this.res = res;
        console.log(this.res);
        this.authservice.dismissLoading();
        this.authservice.showToast(this.res.Message);
        let object = {
          Page: this.Page,
        };
        //this.router.navigate(['/createcust'],{ queryParams: object });
        this.router.navigate(["/appointment"], { queryParams: object });
      });
  }

  getFormValidationErrors() {
    let errors = [];
    Object.keys(this.customerForm.controls).forEach((key) => {
      const controlErrors: ValidationErrors = this.customerForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          errors.push(
            "Key control: " + key + ", keyError: " + keyError + ", err value: "
          );
          console.log(
            "Key control: " + key + ", keyError: " + keyError + ", err value: ",
            controlErrors[keyError]
          );
        });
      }
    });

    return errors;
  }

  InsertCustomerInfo() {
    // if(this.fname== null || this.fname=="" || this.fname==undefined || this.lname== null || this.lname=="" || this.lname==undefined || this.companyname== null || this.companyname=="" || this.companyname==undefined){
    //   this.authservice.alertshow("Please enter Customer name");
    // }
    // else
    if (
      this.saddress == null ||
      this.saddress == "" ||
      this.saddress == undefined
    ) {
      this.authservice.alertshow("Please enter Street Address");
    } else if (
      this.countryid == null ||
      this.countryid == "" ||
      this.countryid == undefined
    ) {
      this.authservice.alertshow("Please select country");
    } else if (
      this.stateid == null ||
      this.stateid == "" ||
      this.stateid == undefined
    ) {
      this.authservice.alertshow("Please select state");
    } else if (
      this.cityid == null ||
      this.cityid == "" ||
      this.cityid == undefined
    ) {
      this.authservice.alertshow("Please select city");
    } else if (
      this.mobile == null ||
      this.mobile == "" ||
      this.mobile == undefined
    ) {
      this.authservice.alertshow("Please enter mobile no.");
    } else if (
      this.email == null ||
      this.email == "" ||
      this.email == undefined
    ) {
      this.authservice.alertshow("Please enter email");
    } else if (this.vin == null || this.vin == "" || this.vin == undefined) {
      this.authservice.alertshow("Please enter VIN");
    } else if (
      this.username == null ||
      this.username == "" ||
      this.username == undefined
    ) {
      this.authservice.alertshow("Username is mandatory !!");
    }
    // }else if(this.password== null || this.password=='' || this.password==undefined){
    //   this.authservice.alertshow("Please enter password");
    // }
    else {
      if (this.fname == null || this.fname == "" || this.fname == undefined) {
        this.fname = "";
      }
      if (
        this.password == null ||
        this.password == "" ||
        this.password == undefined
      ) {
        this.password = "";
      }

      if (this.lname == null || this.lname == "" || this.lname == undefined) {
        this.lname = "";
      }
      if (
        this.companyname == null ||
        this.companyname == "" ||
        this.companyname == undefined
      ) {
        this.companyname = "";
      }
      if (
        this.mileage == null ||
        this.mileage == "" ||
        this.mileage == undefined
      ) {
        this.mileage = "0";
      }
      if (
        this.avgmileage == null ||
        this.avgmileage == "" ||
        this.avgmileage == undefined
      ) {
        this.avgmileage = "0";
      }
      if (
        this.makeid == null ||
        this.makeid == "" ||
        this.makeid == undefined
      ) {
        this.makeid = "0";
      }
      if (
        this.yearid == null ||
        this.yearid == "" ||
        this.yearid == undefined
      ) {
        this.yearid = "0";
      }
      if (
        this.modelid == null ||
        this.modelid == "" ||
        this.modelid == undefined
      ) {
        this.modelid = "0";
      }
      if (
        this.trimid == null ||
        this.trimid == "" ||
        this.trimid == undefined
      ) {
        this.trimid = "0";
      }
      if (
        this.colorid == null ||
        this.colorid == "" ||
        this.colorid == undefined
      ) {
        this.colorid = "0";
      }
      if (
        this.licenseplate == null ||
        this.licenseplate == "" ||
        this.licenseplate == undefined
      ) {
        this.licenseplate = "";
      }
      if (
        this.zipcode == null ||
        this.zipcode == "" ||
        this.zipcode == undefined
      ) {
        this.zipcode = "";
      }
      if (
        this.workphone == null ||
        this.workphone == "" ||
        this.workphone == undefined
      ) {
        this.workphone = "";
      }
      if (
        this.homephone == null ||
        this.homephone == "" ||
        this.homephone == undefined
      ) {
        this.homephone = "";
      }
      this.authservice.presentLoading();
      this.authservice
        .InsertNewCustomer(
          this.dealerid,
          this.fname,
          this.lname,
          this.companyname,
          this.saddress,
          this.countryid,
          this.stateid,
          this.cityid,
          this.mobile,
          this.email,
          this.vin,
          this.username,
          this.password,
          this.saddress1,
          this.zipcode,
          this.homephone,
          this.workphone,
          this.yearid,
          this.makeid,
          this.modelid,
          this.trimid,
          this.colorid,
          this.mileage,
          this.avgmileage,
          this.licenseplate,
          this.userid
        )
        .subscribe((res) => {
          this.res = res;
          console.log(this.res);
          this.authservice.dismissLoading();
          this.authservice.showToast(this.res.Message);
          let object = {
            Page: this.Page,
          };
          //this.router.navigate(['/createcust'],{ queryParams: object });
          this.router.navigate(["/appointment"], { queryParams: object });
        });
    }
  }
  cityselect() {
    this.openmodel();
  }

  async openmodel() {
    const modal = await this.modalCtrl.create({
      component: CitylistPage,
      cssClass: "modal-fullscreen2",
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.city = this.authservice.getcityn();
      this.cityid = this.authservice.getcityi();
      this.customerForm.get("city").setValue(this.cityid);
    });
    return await modal.present();
  }

  ClearCustomerInfo() {
    this.fname = "";
    this.lname = "";
    this.companyname = "";
    this.saddress = "";
    this.saddress1 = "";
    this.cityid = "0";
    this.mobile = "";
    this.email = "";
    this.vin = "";
    this.zipcode = "";
    this.homephone = "";
    this.workphone = "";
    this.makeid = "0";
    this.yearid = "0";
    this.modelid = "0";
    this.mileage = "";
    this.avgmileage = "0";
    this.trimid = "";
    this.colorid = "0";
    this.licenseplate = "";
    this.password = "";

    this.customerForm.reset();
    this.getCountry();
    this.getState();
  }
}
