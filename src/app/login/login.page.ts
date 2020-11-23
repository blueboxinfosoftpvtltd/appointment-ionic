import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../app/auth.service";
import { Storage } from "@ionic/storage";
import {
  LoadingController,
  MenuController,
  ToastController,
} from "@ionic/angular";
import {
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  // loginForm: any;
  username: any;
  password: any;
  res: any;
  employeeMapList: any;
  dealers: any;
  dealername: any;
  loading: any;
  myForm: any;
  toast: any;
  isremember: boolean = false;
  islogin: boolean = false;
  ISEnable: any;
  showpass: boolean = false;
  type: any = "password";
  constructor(
    public toastController: ToastController,
    private router: Router,
    public loadingController: LoadingController,
    private authservice: AuthService,
    public storage: Storage,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      // name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      username: new FormControl("", [Validators.required]),
      password: new FormControl(
        "",
        Validators.compose([
          // Validators.minLength(6),
          Validators.required,
          // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
        ])
      ),
      // mob: new FormControl('', [Validators.required, Validators.minLength(13),Validators.maxLength(13)])
    });
  }

  ionViewWillEnter() {
    this.storage.get("email").then((val) => {
      console.log(val);
      if (val != "") {
        this.username = val;
      } else {
        this.username = "";
      }
    });
    this.storage.get("password").then((val) => {
      console.log("pass", val);
      if (val != "") {
        this.password = val;
      } else {
        this.password = "";
      }
      console.log("pass1", this.password);
      if (this.password == null || this.password == "" || this.password == "") {
        console.log("in");
        this.isremember = false;
      } else {
        this.isremember = true;
        //this.Login();
      }
    });
  }

  showpassword() {
    this.showpass = !this.showpass;
    if (this.showpass) {
      this.type = "text";
    } else {
      this.type = "password";
    }
  }

  Login() {
    if (
      this.username == "" ||
      this.username == undefined ||
      this.username == null
    ) {
      this.authservice.showToast("Please Enter Username");
    } else if (
      this.password == "" ||
      this.password == undefined ||
      this.password == null
    ) {
      this.authservice.showToast("Please Enter Password");
    } else {
      this.authservice.presentLoading();
      this.authservice
        .doLogin(this.username, this.password)
        .subscribe((res) => {
          this.res = res;
          console.log('login res', this.res);
          this.employeeMapList = this.res.employeeMapList;

          // this.authservice.dismissLoading();
          // // AppointmentId=35205&Page=TakeImage&VIN=564564564564564kj&Isedit=true
          // let params = {
          //   "AppointmentId" : 35205,
          //   "Page" : "TakeImage",
          //   "VIN" : "564564564564564kj",
          //   "Isedit" : true
          // }
          // this.router.navigate(['takeimage'], { queryParams: params });
          // return;

          if (this.res.Code == 200) {
            if (this.res.IDSFlag == "0") {
              this.authservice.setids(this.res.IDSFlag);
              this.storage.set("idsflag", this.res.IDSFlag);
              this.storage.set("userid", this.res.pkemployeeid);
              //  this.storage.set("Employee_id",this.employeeMapList);
              this.storage.set("dealerid", this.res.DealershipId);
              this.storage.set("username", this.res.UserName);
              this.storage.set("fullname", this.res.UserFullName);
            } else if (this.res.IDSFlag == "1") {
              this.authservice.setids(this.res.IDSFlag);
              this.storage.set("idsflag", this.res.IDSFlag);
              this.storage.set("userid", this.res.pkemployeeid);
              //  this.storage.set("Employee_id",this.employeeMapList);
              this.storage.set("dealerid", this.res.IDSDealershipId);
              this.storage.set("username", this.res.UserName);
              this.storage.set("fullname", this.res.UserFullName);
            }
            this.dealers = this.authservice.getdealers();
            for (let i = 0; i < this.dealers.length; i++) {
              if (this.dealers[i].DealershipId == this.res.DealershipId) {
                this.dealername = this.dealers[i].DealershipName;
                this.storage.set("dealername", this.dealername);
                this.storage.set("from", this.dealers[i].FromTime);
                this.storage.set("to", this.dealers[i].ToTime);
              }
            }
            if (
              this.res.DesignationName == "General Manager" ||
              this.res.DesignationName === "Bdc Service Advisor" ||
              this.res.DesignationName == "GENERAL MANAGER" ||
              this.res.DesignationName == "BDC SERVICS ADVISOR"
            ) {
              this.ISEnable = "false";
            } else {
              this.ISEnable = "true";
            }
            let params = {
              ISEnable: this.ISEnable,
              dealerName: this.res.DefaultDealershipName,
              dealerId: this.res.DefaultDealership
            };
            this.authservice.dismissLoading();
            this.storage.set("islogin", true);
            //   this.storage.set("Employee_id",this.employeeMapList);
            this.storage.set("isenable", this.ISEnable);
            this.router.navigate(["/home"], {
              queryParams: params,
              replaceUrl: true,
            });
          } else if (this.res.Code == 400) {
            this.authservice.dismissLoading();
            this.authservice.showToast(this.res.msg);
          }
        });
    }
  }

  isLogin() {
    if (this.myForm.valid) {
      return true;
    } else {
      return false;
    }
  }

  rememberme(event) {
    console.log(event);
    if (event.detail.checked == true) {
      console.log("enter in");
      this.storage.set("email", this.username);
      this.storage.set("password", this.password);
    } else {
      this.storage.set("email", "");
      this.storage.set("password", "");
    }
  }
}
