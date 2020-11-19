import { Component, OnInit, ViewChild, NgZone } from "@angular/core";
import { Platform } from "@ionic/angular";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import {
  Events,
  ModalController,
  PopoverController,
  AlertController,
} from "@ionic/angular";
import { AddnewopcodePage } from "../addnewopcode/addnewopcode.page";
import { AuthService } from "../../app/auth.service";
import { Storage } from "@ionic/storage";
import { DatePipe } from "@angular/common";
import { IonInfiniteScroll } from "@ionic/angular";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import * as moment from "moment";
import { IonContent } from "@ionic/angular";
import { zip } from "rxjs/operators";
import { ThrowStmt } from "@angular/compiler";
import { runInThisContext } from "vm";
import { SearchopcodePage } from "../searchopcode/searchopcode.page";

@Component({
  selector: "app-rotab",
  templateUrl: "./rotab.page.html",
  styleUrls: ["./rotab.page.scss"],
})
export class RotabPage implements OnInit {
  // constructor(public platform : Platform,public screenOrientation : ScreenOrientation) { }

  // ngOnInit() {
  //   this.platform.ready().then(() => {
  //     this.screenOrientation.unlock();
  //     this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  //     });
  // }

  // ionViewWillLeave(){
  // this.platform.ready().then(() => {
  //   this.screenOrientation.unlock();
  //   this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  //   });
  // }

  //}

  @ViewChild(IonContent, { static: false }) ionContent: IonContent;

  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  WipersAndLightsList: any = [];
  WheelsAndTiresList: any = [];
  notearray: any = [];
  private playerCount: number = 0;
  isedit: number;
  wheel: any;
  timeid: any;
  tire: any;
  totaldropoff: any;
  useddropoff: any;
  totalhrs: any;
  totalusedhrs: any;
  aptdata: any;
  isIndeterminate: any;
  masterCheck: any;
  Promisetime: any;
  AppointmentTime: any;
  interval: any;
  dealershipdata: any;
  weekdata: any;
  title: any;
  step1: any;
  step: any;
  rcode: any;
  AppointmentId: any;
  step2: any;
  cname: any;
  years: any;
  GetCustomerId: any;
  padding: any;
  rotype: any;
  border: any;
  fname: any;
  lname: any;
  mileageres: any;
  saddress: any;
  saddress1: any;
  zipcode: any;
  mobile: any = "";
  dayname: any;
  workphone: any = "";
  isupdate: boolean = false;
  homephone: any;
  email: any;
  countryid: any;
  country: any;
  stateid: any;
  cuname: any;
  sname: any;
  ciname: any;
  state: any;
  city: any;
  cityid: any;
  stno: any;
  dealerid: any;
  empdealerid: any;

  userid: any;
  res: any;
  CustomerId: any;
  VIN: any;
  customerdata: any;
  Appoinmentdata: any = new Array();
  searchword: any;
  vin: any;
  mileage: any;
  avgmileage: any;
  licenseplate: any;
  make: any;
  colors: any;
  vehicledata: any;
  yearid: any;
  makeid: any;
  year: any;
  modelid: any;
  trimid: any;
  weekday: any;
  colorid: any;
  trim: any;
  model: any;
  dataReturned: any;
  codelist: any;
  opArray: any;
  wheelsDepthList: any;
  WheelsTypeList: any;
  wheelsTireList: any;
  appointmentid: any;
  searchopcode: any;
  transportdata: any;
  selectedSchedules: any;
  tvalue: any;
  selectval: any;
  checkedIdx = 0;
  yearname: any;
  modelname: any;
  makename: any;
  advisordata: any;
  advisorid: any;
  sno: any;
  eno: any;
  currentdate: any;
  intervaldata: any;
  sdate: any;
  sdate1: any;
  currDate: any;
  curr: number = 0;
  notes: any;
  to: any;
  min: any;
  mout: any = "";
  tagno: any;
  pono: any = "";
  from: any;
  page = 10;
  data: any;
  contactarr: any[] = [];
  rescustvin: any;
  s1: boolean = false;
  s2: boolean = false;
  s3: boolean = false;
  s4: boolean = false;
  b1: boolean = false;
  b2: boolean = false;
  b3: boolean = false;
  b4: boolean = false;
  c1: boolean = false;
  c2: boolean = false;
  c3: boolean = false;
  c4: boolean = false;
  wsdate: any = "";
  wedate: any = "";
  rline: any;
  selectedtire: any;
  advisorname: any;
  wheelvalue: any;
  tirevalue: any;
  checkop: any[] = [];
  isSearch: boolean = false;
  unaddvalue: any;
  swheel: any;
  swhelld: any;
  isadd: boolean = true;
  sub: any;
  laourdata: any;
  techno: any;
  techdata: any;
  pagename: any;
  saname: any;
  newopcodelist: any[] = [];
  addrolist: any;
  opcoderes: any;
  opdesc: any;
  labourname: any;
  shours: any;
  alphaarr: any[] = [];
  laname: any;
  cemail: any;
  cphone: any;
  csms: any;
  rnotes: any = "";
  tecname: any;
  roedit: boolean = false;
  index: any;
  opcodes: any;
  rores: any;
  cc: any;
  sid: any;
  roselect: any;
  comeres: any;
  hres: any;
  emailc: boolean = false;
  phonec: boolean = false;
  smsc: boolean = false;
  isrental: boolean = false;
  rentalres: any;
  isrc: boolean = false;
  istech: boolean = false;
  subletres: any;
  miscres: any;
  partsubres: any;
  discres: any;
  ronores: any;
  techres: any;
  rono: any;
  rodate: any;
  rent: any;
  linees: any;
  pdate: any;
  itech: boolean = false;
  totalesti: any = 0.0;
  techid: any;
  username: any;
  furl: any;
  contstr: any;
  appno: any;
  islabor: boolean = false;

  dealername: any;

  bolrest: boolean = false;
  isFromEdit: boolean = false;
  //techno:any;
  public myForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public events: Events,
    private storage: Storage,
    private authservice: AuthService,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    public datepipe: DatePipe,
    private router: Router,
    private alertController: AlertController,
    public platform: Platform,
    public screenOrientation: ScreenOrientation,
    public ngzone: NgZone
  ) {
    this.alphaarr = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    console.log(this.alphaarr);
    this.pdate = moment(new Date()).format("MM/DD/YYYY");
    this.pdate = this.pdate + " " + "5:00 PM";
    console.log(this.pdate);
    this.opcodes = this.authservice.getopcodero();
    if (this.opcodes) {
      this.appno = this.opcodes.appid;
    } else {
      this.appno = "";
    }
  }

  ngOnInit() {
    this.storage.get("fullname").then((val) => {
      this.saname = val;
      this.saname.replace(",", "");
      console.log(this.saname);
    });
    this.storage.get("dealername").then((val) => {
      this.dealername = val;
    });
    /*this.storage.get("userid").then(val =>{
       this.sid = val;
       console.log(this.sid);
     })*/
    this.isFromEdit = false;
    this.rline = "A";
    this.shours = "0.00";
    this.linees = "0.00";
    //this.emailc = true;
    this.authservice.getlabour(this.dealerid).subscribe((res) => {
      console.log(res);
      this.laourdata = res;
      this.authservice.gettechnician(this.dealerid).subscribe((res) => {
        console.log(res);
        this.techdata = res;
        for (let i = 0; i < this.techdata.length; i++) {
          if (this.techdata[i].Number == "999") {
            this.techno = this.techdata[i].Number;
            //this.defaulttech = this.techdata[i].TechnicianName;
            //console.log(this.defaulttech);
          }
        }
        //for(let i=0 ; i<this.opcodes.opcode.length;i++){
        //  this["techno"+i] = this.techno;
        // }
      });
    });
    this.authservice.getcustidvin().subscribe((data) => {
      console.log(data);
      this.rescustvin = data;
      this.CustomerId = this.rescustvin.CustomerId;
      this.VIN = this.rescustvin.VIN;
    });
    this.platform.ready().then(() => {
      this.screenOrientation.unlock();
      this.screenOrientation.lock(
        this.screenOrientation.ORIENTATIONS.LANDSCAPE
      );
    });
    this.storage.get("username").then((val) => {
      this.username = val;
    });
    this.currentdate = new Date().toISOString();
    this.codelist = "";

    this.storage.get("dealerid").then((val) => {
      console.log("dealerid", val);
      this.dealerid = val;
      this.GetAdvisorList();
      this.GetMOPCode();
      this.getYears();
      this.comeback();

      this.opArray = new Array();
      this.authservice.getlabour(this.dealerid).subscribe((res) => {
        console.log(res);
        this.laourdata = res;
        this.authservice.gettechnician(this.dealerid).subscribe((res) => {
          console.log(res);
          this.techdata = res;
          for (let i = 0; i < this.techdata.length; i++) {
            if (this.techdata[i].Number == "999") {
              this.techno = this.techdata[i].Number;
              //this.defaulttech = this.techdata[i].TechnicianName;
              //console.log(this.defaulttech);
            }
          }
          //for(let i=0 ; i<this.opcodes.opcode.length;i++){
          //  this["techno"+i] = this.techno;
          // }
        });
      });
    });
    this.storage.get("userid").then((val) => {
      console.log("userid", val);
      this.userid = val;
      this.GetCustomer();
    });

    this.authservice.getadvisor().subscribe((advisorid) => {
      this.advisorid = advisorid;
    });

    this.storage.get("userid").then((val) => {
      this.sno = val;
      this.getrono();
    });
  }

  logout() {
    this.showAlert();
  }

  async showAlert() {
    const prompt = this.alertController.create({
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

  //for Customer Info
  back() {
    let object = {
      refresh: true,
    };

    this.router.navigate(["/appointment"], { queryParams: { Page: "ro" } });
  }
  getCountry() {
    this.authservice.GetCountry(this.dealerid).subscribe((res) => {
      this.country = res;
      this.countryid = this.customerdata[0].CountryId;
      this.getState();
      console.log(this.country);
    });
  }

  GetCustomer() {
    this.authservice.presentLoading();
    this.authservice
      .GetCustomer(this.dealerid, this.CustomerId)
      .subscribe((res) => {
        this.customerdata = res;
        this.fname =
          this.customerdata[0].FirstName + " " + this.customerdata[0].LastName;
        this.lname = this.customerdata[0].LastName;
        this.cname = this.customerdata[0].OtherName;
        this.saddress = this.customerdata[0].Address1;
        this.saddress1 = this.customerdata[0].Address2;
        this.zipcode = this.customerdata[0].ZipCode;
        this.mobile = this.customerdata[0].MobilePhone;
        this.workphone = this.customerdata[0].WorkPhone;
        this.homephone = this.customerdata[0].HomePhone;
        this.email = this.customerdata[0].EmailId;
        console.log(this.customerdata);
        if (this.fname == "" || this.fname == undefined || this.fname == null) {
          this.fname = this.cname;
        }
        this.getCountry();
      });
  }

  ChangeCountry(event) {
    this.countryid = event.detail.value;
    console.log(this.countryid);
    for (let i = 0; i < this.country.length; i++) {
      if (this.countryid == this.country[i].CountryId) {
        this.cuname = this.country[i].CountryName;
      }
    }
    this.getState();
  }

  getState() {
    this.authservice
      .GetState(this.countryid, this.dealerid)
      .subscribe((res) => {
        this.state = res;
        this.stateid = this.customerdata[0].StateId;
        this.GetCity();
        console.log(this.state);
      });
  }

  ChangeState(event) {
    this.stateid = event.detail.value;
    console.log(this.stateid);
    for (let i = 0; i < this.state.length; i++) {
      if (this.stateid == this.state[i].StateId) {
        this.sname = this.state[i].StateName;
      }
    }
    this.GetCity();
  }

  GetCity() {
    this.authservice
      .GetCity(this.stateid, this.dealerid, this.customerdata[0].CityId)
      .subscribe((res) => {
        this.city = res;
        console.log("call again");
        // if (this.city != "" || this.city != undefined) {
        this.cityid = this.customerdata[0].CityId;
        // }
        this.authservice.dismissLoading();
        console.log(this.city);
      });
  }

  ChangeCity(event) {
    this.cityid = event.detail.value;
    for (let i = 0; i < this.city.length; i++) {
      if (this.cityid == this.city[i].CityId) {
        this.ciname = this.city[i].CityName;
      }
    }
    console.log(this.cityid);
  }

  UpdateCustomerInfo() {
    // if(this.fname== null || this.fname=='' || this.fname==undefined){
    //   this.authservice.showToast("Please enter first name");
    // }else if(this.lname== null || this.lname=='' || this.lname==undefined){
    //   this.authservice.showToast("Please enter last name");
    // }
    if (
      this.saddress == null ||
      this.saddress == "" ||
      this.saddress == undefined
    ) {
      this.authservice.showToast("Please enter Street Address");
    } else if (
      this.countryid == null ||
      this.countryid == "" ||
      this.countryid == undefined
    ) {
      this.authservice.showToast("Please select country");
    } else if (
      this.stateid == null ||
      this.stateid == "" ||
      this.stateid == undefined
    ) {
      this.authservice.showToast("Please select state");
    } else if (
      this.cityid == null ||
      this.cityid == "" ||
      this.cityid == undefined
    ) {
      this.authservice.showToast("Please select city");
    }
    // else if(this.mobile== null || this.mobile=='' || this.mobile==undefined){
    //   this.authservice.showToast("Please enter mobile no.");
    // }
    // else if(this.email== null || this.email=='' || this.email==undefined){
    //   this.authservice.showToast("Please enter email");
    // }
    else {
      this.authservice.presentLoading();
      this.authservice
        .CustomerInsertUpdate(
          this.CustomerId,
          this.fname,
          this.lname,
          this.email,
          this.homephone,
          this.workphone,
          this.mobile,
          this.saddress,
          this.saddress1,
          this.countryid,
          this.cityid,
          this.stateid,
          this.zipcode,
          this.userid,
          this.dealerid
        )
        .subscribe((res) => {
          this.res = res;
          console.log(this.res);
          this.authservice.dismissLoading();
          this.authservice.showToast(this.res.Message);
        });
    }
  }

  // for Vehicle Info page

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
        if (res != null) {
          this.model = res;
        }
        this.authservice.dismissLoading();
        console.log(this.model);
      });
  }

  GetTrimDetails() {
    this.authservice.GetTrimDetails(this.dealerid).subscribe((res) => {
      this.trim = res;
      this.GetVehicleDetailByVINCustomerID();
      console.log(this.trim);
    });
  }

  ChangeYear(event) {
    this.yearid = event.detail.value;
    console.log(this.yearid);
    for (let i = 0; i < this.years.length; i++) {
      if (this.yearid == this.years[i].YearId) {
        this.yearname = this.years[i].Year;
      }
    }
    this.storage.get("idsflag").then((val) => {
      if (val == 0) {
        this.yearid = this.yearid;
      } else if (val == 1) {
        this.yearid = this.yearname;
      }
    });
  }

  ChangeMake(event) {
    this.makeid = event.detail.value;
    console.log(this.makeid);

    for (let i = 0; i < this.make.length; i++) {
      if (this.makeid == this.make[i].MakeId) {
        this.makename = this.make[i].Make;
        this.GetModelDetails();
      }
    }
  }

  ChangeModel(event) {
    this.modelid = event.detail.value;
    console.log(this.modelid);
    for (let i = 0; i < this.model.length; i++) {
      if (this.modelid == this.model[i].ModelId) {
        this.modelname = this.model[i].Modal;
      }
    }
  }

  ChangeTrim(event) {
    this.trimid = event.detail.value;
    console.log(this.trimid);
  }

  ChangeColor(event) {
    this.colorid = event.detail.value;
    console.log(this.colorid);
  }

  GetVehicleDetailByVINCustomerID() {
    setTimeout(() => {
      if (this.appointmentid == undefined) {
        this.appointmentid = "0";
      }

      this.authservice
        .GetVehicleDetailByVINCustomerID(
          this.dealerid,
          this.CustomerId,
          this.VIN,
          this.appointmentid
        )
        .subscribe((res) => {
          this.vehicledata = res;
          this.vin = this.vehicledata[0].VIN;
          this.authservice.setvin(this.vin);
          this.yearid = this.vehicledata[0].YearId;
          setTimeout(() => {
            for (let i = 0; i < this.years.length; i++) {
              if (this.yearid == this.years[i].YearId) {
                this.yearname = this.years[i].Year;
              }
            }
            console.log(this.yearname);
          }, 3000);
          if (this.appointmentid == "0") {
            this.appointmentid = undefined;
          }
          this.makeid = this.vehicledata[0].MakeId;
          setTimeout(() => {
            for (let i = 0; i < this.make.length; i++) {
              if (this.makeid == this.make[i].MakeId) {
                this.makename = this.make[i].Make;
              }
            }
            console.log(this.makename);
          }, 3000);

          this.modelid = this.vehicledata[0].ModelId;
          setTimeout(() => {
            for (let i = 0; i < this.model.length; i++) {
              if (this.modelid == this.model[i].ModelId) {
                this.modelname = this.model[i].Modal;
              }
            }
            console.log(this.modelname);
          }, 3000);

          this.trimid = this.vehicledata[0].TrimId;
          this.colorid = this.vehicledata[0].ColorId;
          this.mileage = this.vehicledata[0].Milage;
          this.avgmileage = this.vehicledata[0].AverageMilesMonth;
          this.licenseplate = this.vehicledata[0].LicensePlate;
          this.GetModelDetails();
        });
    }, 1000);
  }

  UpdateVehicleInfo() {
    if (this.vin == null || this.vin == "" || this.vin == undefined) {
      this.authservice.showToast("Please enter VIN");
    } else if (
      this.yearid == null ||
      this.yearid == "" ||
      this.yearid == undefined ||
      this.yearid == "0"
    ) {
      this.authservice.showToast("Please select Year");
    } else if (
      this.makeid == null ||
      this.makeid == "" ||
      this.makeid == undefined ||
      this.makeid == "0"
    ) {
      this.authservice.showToast("Please select Make");
    } else if (
      this.modelid == null ||
      this.modelid == "" ||
      this.modelid == undefined ||
      this.modelid == "0"
    ) {
      this.authservice.showToast("Please select Model");
    } else {
      this.authservice.presentLoading();
      this.authservice
        .InsertVehicle(
          this.CustomerId,
          this.colorid,
          this.licenseplate,
          this.avgmileage,
          this.mileage,
          this.vin,
          this.makeid,
          this.yearid,
          this.modelid,
          this.trimid,
          this.userid,
          this.dealerid
        )
        .subscribe((res) => {
          this.res = res;
          console.log(this.res);
          this.authservice.dismissLoading();
          this.authservice.showToast(this.res.Message);
        });
    }
  }

  // for Maintainance

  async AddNewOPCode() {
    const modal = await this.modalCtrl.create({
      component: AddnewopcodePage,
      componentProps: {
        paramID: 123,
        paramTitle: "Add Vehicle",
      },
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
        //this.GetMOPCode();
      }
    });
    return await modal.present();
  }

  GetMOPCode() {
    var getoplist = [];
    var stringoplist;
    // this.authservice.presentLoading();
    if (this.searchword == undefined) {
      this.searchword = "";
    }
    this.authservice
      .GetMOPCode(this.dealerid, "0", "10", this.searchword)
      .subscribe((res) => {
        this.codelist = res;
        console.log(this.codelist);

        if (this.rescustvin.data.OPCodeList) {
          this.codelist = this.rescustvin.data.OPCodeList;
          this.codelist.forEach((element) => {
            element.isChecked = true;
          });
        }
      });
  }

  SearchOp() {
    // this.authservice.presentLoading();
    if (this.searchword.length >= 2) {
      this.isSearch = true;
      this.authservice
        .GetMOPCode(this.dealerid, "1", "10", this.searchword)
        .subscribe((res) => {
          this.searchopcode = res;
          console.log(this.searchopcode);
          for (let i = 0; i < this.searchopcode.length; i++) {
            this.codelist.unshift(this.searchopcode[i]);
          }
          this.codelist = [
            ...new Map(
              this.codelist.map((item) => [item["OpCode"], item])
            ).values(),
          ];
        });
    } else if (this.searchword.length == 0) {
      for (let i = 0; i < this.searchopcode.length; i++) {
        if (this.searchopcode[i].isChecked == true) {
          // this.codelist.unshift(this.searchopcode[i]);
        }
      }
      console.log(this.codelist);
      console.log(this.codelist);
      this.codelist = [...new Set(this.codelist)];
      this.isSearch = false;
    }
  }

  cancelsearch() {
    console.log("cancel");
    this.isSearch = false;
  }

  doInfinite(infiniteScroll) {
    this.from = this.page + 1;
    this.page = this.page + 10;
    setTimeout(() => {
      this.authservice
        .GetMOPCode(this.dealerid, this.from, this.page, "")
        .subscribe(
          (res) => {
            this.data = res;
            console.log(this.data);
            for (let i = 0; i < this.data.length; i++) {
              this.codelist.push(this.data[i]);
            }
          },
          (error) => console.log("eror")
        );
      //this.codelist = [... new Set(this.codelist)];
      console.log(this.codelist);
      console.log("Async operation has ended");
      infiniteScroll.target.complete();
    }, 1000);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  SelectOP(event, data, i) {
    console.log(data);
    if (data.isChecked == true) {
      this.newopcodelist.push(data);
    } else {
      if (this.newopcodelist.length == 0) {
      } else {
        for (let i = 0; i < this.newopcodelist.length; i++) {
          if (this.newopcodelist[i].OpCode == data.OpCode) {
            this.newopcodelist.splice(i, 1);
          }
        }
      }
    }
    console.log(this.newopcodelist);
  }

  // for Transportation

  GetTransportationList() {
    // this.authservice.presentLoading();
    this.authservice.GetTransportationList(this.dealerid).subscribe((res) => {
      this.transportdata = res;
      console.log(this.transportdata);

      if (this.rescustvin.data.Transportation) {
        this.tvalue = this.rescustvin.data.Transportation;
        this.transportdata.forEach((element) => {
          element.checked = false;
          if (
            this.rescustvin.data.Transportation == element.TransportationName
          ) {
            element.checked = true;
          }
        });
        //console.log("codelist",this.codelist);
      }
      this.GetWeekDays();
      // this.authservice.dismissLoading();
    });
  }

  GetWeekDays() {
    // this.authservice.presentLoading();
    this.authservice.GetWeekDays().subscribe((res) => {
      this.weekdata = res;
      console.log(this.weekdata);
      // this.authservice.dismissLoading();
    });
  }

  CalculateDealershipHRS() {
    // this.authservice.presentLoading();
    this.authservice
      .CalculateDealershipHRS(this.dealerid, this.dayname, "value", this.userid)
      .subscribe((res) => {
        this.dealershipdata = res;
        console.log(this.dealershipdata);
        this.totaldropoff = this.dealershipdata[0].DropOffAppointmentLimit;
        this.useddropoff = this.dealershipdata[0].UsedAppt;
        this.totalhrs = this.dealershipdata[0].TotalHrsDuration;
        this.totalusedhrs = this.dealershipdata[0].UsedHRS;
        // this.authservice.dismissLoading();
      });
  }

  Selection(name: string, e) {
    console.log(name);
    console.log(e);
    this.tvalue = name;
    this.transportdata.forEach((x) => {
      x.checked = false;
      console.log(name);
      console.log(e.detail.value);
      if (x.TransportationName == e.detail.value) {
        x.checked = true;
      }
    });
    console.log(this.transportdata);
  }

  ChangeWeekDay(event) {
    console.log(event);
    this.dayname = event.detail.value.DayName;
    this.CalculateDealershipHRS();
  }

  // for Advisor

  GetAdvisorList() {
    var getadvisor;
    // this.authservice.presentLoading();
    this.authservice.getsa(this.dealerid).subscribe((res) => {
      this.advisordata = res;
      this.sid = this.sno;
      console.log(this.advisordata);
      // for(let i=0 ; i<this.advisordata.length;i++){
      //   if(this.advisordata[i].pkEmployeeId == this.sno){
      //     this.sid = this.advisordata[i].pkEmployeeId;
      //   }
      //}
      // if(this.rescustvin.data){
      //   getadvisor = this.rescustvin.data.AdvisorId;
      //   this.advisorid = getadvisor;
      //   this.advisordata.forEach(el =>{
      //     el.checked = false;
      //     if(getadvisor == el.AdvisorId){
      //       el.checked = true;
      //     }
      //   })
      //   for(let i=0;i<this.advisordata.length;i++){
      //     if(this.rescustvin.data.AdvisorId == this.advisordata[i].AdvisorId){
      //       this.advisorname = this.advisordata[i].AdvisorName;
      //     }
      //   }
      //   console.log("advisor",this.advisordata);
      // }
      // this.authservice.dismissLoading();
    });
  }

  /*newGetAdvisorList() {
    var getadvisor;
    
    this.authservice.getsa(this.dealerid).subscribe(res => {
      this.advisordata = res;

       this.storage.get("Employee_id").then((val => {
        console.log(val);
        console.log(this.dealerid);

        this.empdealerid = val.filter((item) => {
          console.log(item);
          return item.DealershipId == this.dealerid;

        });
        console.log(this.empdealerid);
        if(this.empdealerid.length > 0){
          this.sid = this.empdealerid[0].PKEmployeeID;
        }
        
        console.log(this.sid);

        this.sno = this.sid;
        console.log(this.sno);
        this.getrono();
    }))
     
    })
  }*/

  AdvisorSelection(id, e) {
    console.log(id);
    console.log(e.detail.value);
    for (let i = 0; i < this.advisordata.length; i++) {
      if (id == this.advisordata[i].AdvisorId) {
        this.advisorname = this.advisordata[i].AdvisorName;
      }
    }
    this.advisorid = id;
    this.advisordata.forEach((x) => {
      x.checked = false;
      if (x.AdvisorId == e.detail.value) {
        x.checked = true;
      }
    });
  }

  // For data/time

  GetTimeIntervals() {
    if (this.appointmentid == undefined) {
      this.timeid = "0";
    } else {
      this.timeid = this.appointmentid;
    }
    // this.authservice.presentLoading();
    this.authservice
      .GetTimeIntervals(this.dealerid, this.advisorid, this.sdate1, this.timeid)
      .subscribe((res) => {
        this.intervaldata = res;
        console.log(this.intervaldata);
        // this.authservice.dismissLoading();
        if (this.intervaldata[0].TimeInerrvals == "null") {
          this.authservice.showToast(this.intervaldata[0].message);
          this.sdate = "";
        }
      });
  }

  ChangeDate(event) {
    this.wsdate = this.datepipe.transform(this.wsdate, "MM/dd/yyyy");
    console.log(this.wsdate);
    //this.GetTimeIntervals();
  }
  ChangeDate1(event) {
    this.wedate = this.datepipe.transform(this.wedate, "MM/dd/yyyy");
    console.log(this.wedate);
    //this.GetTimeIntervals();
  }
  ChangeDatep(event) {
    this.pdate = this.datepipe.transform(this.pdate, "MM/dd/yyyy");
    this.pdate = this.pdate + " " + "5:00 PM";
    console.log(this.pdate);
    //this.GetTimeIntervals();
  }

  ChangeTime(event) {
    this.interval = this.interval;
    this.Promisetime = this.interval;
    for (let i = 0; i < this.intervaldata.length; i++) {
      if (this.interval == this.intervaldata[i].TimeInerrvals) {
        this.AppointmentTime = this.intervaldata[i].AppointmentTimeId;
      }
    }
    console.log(this.interval);
    console.log(this.AppointmentTime);
  }

  ionViewWillLeave() {
    this.platform.ready().then(() => {
      this.screenOrientation.unlock();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    });
  }

  getmil() {
    this.authservice
      .getmileage(this.dealerid, this.min, this.VIN)
      .subscribe((res) => {
        this.mileageres = res;
        if (this.mileageres.Message != "") {
          this.presentAlert2(this.mileageres.Message);
        }

        console.log(this.mileageres);
      });
  }

  async presentAlert2(msg) {
    const alert = await this.alertController.create({
      header: "ION APPT",
      message: msg,
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.min = "";
          },
        },
      ],
      backdropDismiss: false,
    });

    await alert.present();
  }

  radioGroupChange(e) {
    console.log(e.detail);
    this.selectval = e.detail.value;
  }

  changehour(event) {
    console.log(event);
    this.authservice
      .calculateline(
        this.dealerid,
        this.rono,
        this.rcode,
        this.labourname,
        this.techno,
        this.shours
      )
      .subscribe((res) => {
        this.hres = res;
        console.log(res);
        this.linees = this.hres.LineEstimate;
      });
    //this["shours"+i] = event.target.value;
  }

  Changelabour(event) {
    console.log(event.detail.value);
    //console.log(i);
    this.labourname = event.detail.value;
    this.authservice
      .calculateline(
        this.dealerid,
        this.rono,
        this.rcode,
        this.labourname,
        this.techno,
        this.shours
      )
      .subscribe((res) => {
        this.hres = res;
        console.log(res);
        this.linees = this.hres.LineEstimate;
      });
    //this["labourname"+i] = event.detail.value;

    //this.labourname = event.detail.value;
  }
  Changetech(event) {
    console.log(event.detail.value);
    this.techno = event.detail.value;
    this.authservice
      .calculateline(
        this.dealerid,
        this.rono,
        this.rcode,
        this.labourname,
        this.techno,
        this.shours
      )
      .subscribe((res) => {
        this.hres = res;
        console.log(res);
        this.linees = this.hres.LineEstimate;
      });
    // for(let i=0;i<this.techdata.length;i++){
    //   if(this.techdata[i].Number == event.detail.value){
    //     this.tecname = this.techdata[i].TechnicianName;
    //   }
    // }
    //this.
    //console.log(i);
    //this["techno"+i] = event.detail.value;
  }

  Changesa(event) {
    this.sno = event.detail.value;
    console.log(this.sno);
    for (let i = 0; i < this.advisordata.length; i++) {
      if (this.advisordata[i].pkEmployeeId == event.detail.value) {
        this.saname = this.advisordata[i].SAName;
      }
    }
  }

  addro() {
    if (this.min == null || this.min == undefined || this.min == "") {
      this.presentAlert3("Enter Mileage In");
    } else if (
      this.tagno == null ||
      this.tagno == undefined ||
      this.tagno == ""
    ) {
      this.presentAlert3("Enter Tag Number");
    } else if (
      this.rcode == null ||
      this.rcode == undefined ||
      (this.rcode == "" && this.isrc == false)
    ) {
      this.presentAlert3("Enter Repair Code");
    }

    // else if(this.opdesc == null || this.opdesc == undefined || this.opdesc == ""){
    //   this.presentAlert3("Enter Description");
    // }
    else if (
      this.labourname == null ||
      this.labourname == undefined ||
      this.labourname == ""
    ) {
      this.presentAlert3("Select Labor Type");
    } else {
      var line;
      if (this.addrolist == undefined) {
        line = this.alphaarr[0];
      } else {
        //for(let i=0 ; i<this.addrolist.length;i++){
        // if(this.istech == false){
        // line = this.alphaarr[this.addrolist.length];
        // this.rline = this.alphaarr[this.addrolist.length];
        // }
        // else{
        line = this.rline;
        //this.rline = this.addrolist[this.addrolist.length - 1].Line;
        //  }
        // }
      }

      if (
        this.techno == undefined ||
        this.techno == "" ||
        this.techno == null
      ) {
        this.techno = "0";
      }
      if (this.rcode == undefined || this.rcode == "" || this.rcode == null) {
        this.rcode = "0";
      }
      // let roadd={
      //     "Line":line,
      //     "LineDesc":this.opdesc,
      //     "StoryDesc":this.cc,
      //     "OpCode":this.rcode,
      //     "LaborType":this.labourname,
      //     "TechNo":this.techno,
      //     "LbrCost":"0.00",
      //     "LbrSaleAmts":"0.00",
      //     "SoldHours":this.shours,
      //     "SubletVendor":"",
      //     "ReqLbrSale":"0.00",
      //     "Skill":"",
      //     "Campaign":"",
      //     "CauseCode":"",
      //     "NatureCode":"",
      //     "Decline":"",
      //     "NextLine":""
      // }
      var l = this.rline;
      var ai;
      for (let i = 0; i < this.alphaarr.length; i++) {
        if (this.alphaarr[i] == l) {
          //  ai = i;
          this.rline = this.alphaarr[i + 1];
        }
      }

      console.log(this.dealerid);
      this.authservice
        .inserttech(
          this.sno,
          this.rono,
          line,
          this.cc,
          this.tagno,
          this.opdesc,
          this.rcode,
          this.labourname,
          this.techno,
          this.shours,
          this.rline,
          this.dealerid
        )
        .subscribe((res) => {
          var rres;
          rres = res;
          console.log(rres);
          this.addrolist = rres;
          this.totalesti = 0.0;
          for (let i = 0; i < this.addrolist.length; i++) {
            this.totalesti =
              parseFloat(this.totalesti) +
              parseFloat(this.addrolist[i].LineEstimate);
          }
          var l = this.addrolist[this.addrolist.length - 1].Line;
          var ai;
          for (let i = 0; i < this.alphaarr.length; i++) {
            if (this.alphaarr[i] == l) {
              //  ai = i;
              this.rline = this.alphaarr[i + 1];
            }
          }
          for (let i = 0; i < this.addrolist.length; i++) {
            if (this.addrolist[i].LaborType == "") {
              this.islabor = false;
            } else {
              this.islabor = true;
            }
          }
          // for(let j=0;j<this.addrolist.length;j++){
          //   this.totalesti = this.totalesti + this.addrolist[j].LineEstimate;
          // }
        });
      this.ngzone.run(() => {
        // if(this.istech == false){
        //   this.rline = this.alphaarr[this.addrolist.length];
        // }
        // for(let i=0 ; i<this.addrolist.length;i++){
        //   this.rline = this.alphaarr[i+1];
        // }
        console.log(this.addrolist);
        this.rcode = "";
        this.opdesc = "";
        this.shours = "";
        this.labourname = null;
        this.laname = null;
        this.cc = "";
        this.shours = "0.00";
        this.roedit = false;
        this.istech = false;
        this.isrc = false;
        this.bolrest = true;
        console.log(this.bolrest);
      });
    }
  }

  getmout() {
    if (Number(this.mout) > Number(this.min) + 20) {
      this.presentAlertPrompt();
    }
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: "Enter Reson",
      inputs: [
        // multiline input.
        {
          name: "paragraph",
          id: "paragraph",
          type: "text",
          placeholder: "Enter Reason",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
            this.mout = "";
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            console.log(data);
            this.authservice.presentLoading();
            this.authservice
              .mileageout(
                this.rono,
                this.min,
                this.mout,
                data.paragraph,
                this.sno,
                this.dealerid
              )
              .subscribe(
                (res) => {
                  console.log(res);
                  this.presentAlert3("Reason inserted sucessfully");
                  this.authservice.dismissLoading();
                },
                (err) => this.authservice.dismissLoading()
              );
          },
        },
      ],
      backdropDismiss: false,
    });

    await alert.present();
  }

  async searchopdesccode() {
    const modal = await this.modalCtrl.create({
      component: SearchopcodePage,
      cssClass: "my-custom-modal-css",
      componentProps: {
        paramID: 456,
        paramTitle: "Search Op Code",
      },
    });

    modal.onDidDismiss().then((data) => {
      const op = data.data;
      console.log("OP", op);

      if (op !== null) {
        this.rcode = op.OpCode;
        this.opdesc = op.Description;
        this.cc = op.Description;
      }
    });

    return await modal.present();
  }

  getop() {
    if (this.rcode == "WC" || this.rcode == "RC") {
      this.istech = true;
      this.tecname = "";
      this.itech = false;
    }
    console.log("Rcode: " + this.rcode);

    this.authservice
      .GetMOPCode(this.dealerid, 0, 10, this.rcode)
      .subscribe((res) => {
        console.log(res);
        this.opcoderes = res;
        this.rcode = this.opcoderes[0].OpCode;
        this.opdesc = this.opcoderes[0].Description;
        this.cc = this.opcoderes[0].Description;
        this.shours = this.opcoderes[0].Hours;
      });
  }

  continue() {
    if (this.min == null || this.min == undefined || this.min == "") {
      this.presentAlert3("Enter MileageIn");
    } else if (
      this.cemail == false &&
      this.cphone == false &&
      this.csms == false
    ) {
      // if(this.cemail == false || this.cphone == false || this.csms == false){
      this.presentAlert3("Select Contact Method");
      // }
    } else if (
      this.tagno == undefined ||
      this.tagno == null ||
      this.tagno == ""
    ) {
      this.presentAlert3("Enter TagNo");
    } else if (this.addrolist == undefined) {
    } else if (this.islabor == false) {
      this.presentAlert3("Select LaborType");
    } else {
      if (this.cemail == true) {
        this.contactarr.push("Email");
      }
      if (this.cphone == true) {
        this.contactarr.push("Phone");
      }
      if (this.csms == true) {
        this.contactarr.push("SMS");
      }
      this.contstr = this.contactarr.join();
      let data = {
        //'opcode' : finalopcode,
        dlrid: this.dealerid,
        cid: this.CustomerId,
        vin: this.VIN,
        add1: this.saddress,
        add2: this.saddress1,
        city: this.cityid,
        state: this.stateid,
        zip: this.zipcode,
        homeno: this.homephone,
        workno: this.workphone,
        email: this.email,
        year: this.yearid,
        make: this.makeid,
        model: this.modelid,
        license: this.licenseplate,
        color: this.colorid,
        uid: this.sno,
        rolist: this.addrolist,
        min: this.min,
        mout: this.mout,
        rnotes: this.rnotes,
        wsdate: this.wsdate,
        wedate: this.wedate,
        saname: this.saname,
        sano: this.sno,
        rotype: this.selectval,
        cemail: this.cemail,
        cphone: this.cphone,
        csms: this.csms,
        tagno: this.tagno,
        cname: this.fname,
        contact: this.contstr,
        pono: this.pono,
        rono: this.rono,
        prodate: this.pdate,
      };
      console.log(data);
      if (this.opcodes) {
        if (this.opcodes.image == "no") {
          this.presentAlertCheckbox2();
        }
      } else {
        this.authservice.setrocdata(data);
        this.router.navigate(["/takeimage"], {
          queryParams: { ROnumber: this.rono, backpage: "true", Isedit: false },
        });
      }
    }
  }

  async presentAlertCheckbox2() {
    this.authservice.setvideodata("");
    this.authservice.setvideolist("");
    this.authservice.setvimgbaselist("");
    this.authservice.setvimglist("");
    this.authservice.setvlist("");
    this.authservice.setvimgbaselist("");
    this.authservice.setvimgnamelist("");
    this.authservice.setvnlist("");
    this.authservice.setimagedata("");
    this.authservice.setCarExtraImages([]);
    var email, text;
    const alert = await this.alertController.create({
      header: "Do you want to print RO?",
      inputs: [
        {
          name: "Yes",
          type: "radio",
          label: "Yes",
          value: "yes",
        },

        {
          name: "No",
          type: "radio",
          label: "No",
          value: "no",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            console.log(data);
            console.log("Confirm Ok");

            if (data == "yes") {
              //this.presentAlertCheckbox("yes");
              this.authservice.presentLoading();
              this.authservice
                .createtabro(
                  this.opcodes.cid,
                  this.opcodes.vin,
                  this.min,
                  this.sno,
                  this.tagno,
                  this.pono,
                  this.contstr,
                  this.cname,
                  this.opcodes.add1,
                  this.opcodes.city,
                  this.opcodes.state,
                  this.opcodes.zip,
                  this.opcodes.homeno,
                  this.opcodes.workno,
                  this.opcodes.email,
                  this.opcodes.year,
                  this.makeid,
                  this.modelid,
                  this.opcodes.license,
                  this.opcodes.color,
                  this.opcodes.uid,
                  this.mout,
                  this.wsdate,
                  this.wedate,
                  this.opcodes.dlrid,
                  this.rnotes,
                  this.addrolist,
                  this.opcodes.carimage,
                  this.selectval,
                  this.rono,
                  this.pdate,
                  this.opcodes.videodata
                )
                .subscribe(
                  (res) => {
                    console.log(res);
                    this.authservice.dismissLoading();
                    this.rores = res;
                    // this.authservice.showToast(this.rores.Message);
                    this.presentAlert4(this.rores.Message);
                  },
                  (err) => {
                    this.authservice.dismissLoading();
                  }
                );
            } else if (data == "no") {
              //this.router.navigateByUrl('/home');
              this.authservice.presentLoading();
              this.authservice
                .createtabro(
                  this.opcodes.cid,
                  this.opcodes.vin,
                  this.min,
                  this.sno,
                  this.tagno,
                  this.pono,
                  this.contstr,
                  this.cname,
                  this.opcodes.add1,
                  this.opcodes.city,
                  this.opcodes.state,
                  this.opcodes.zip,
                  this.opcodes.homeno,
                  this.opcodes.workno,
                  this.opcodes.email,
                  this.opcodes.year,
                  this.makeid,
                  this.modelid,
                  this.opcodes.license,
                  this.opcodes.color,
                  this.opcodes.uid,
                  this.mout,
                  this.wsdate,
                  this.wedate,
                  this.opcodes.dlrid,
                  this.rnotes,
                  this.addrolist,
                  this.opcodes.carimage,
                  this.selectval,
                  this.rono,
                  this.pdate,
                  this.opcodes.videodata
                )
                .subscribe(
                  (res) => {
                    console.log(res);
                    this.authservice.dismissLoading();
                    this.rores = res;
                    // this.authservice.showToast(this.rores.Message);
                    this.presentAlert1(this.rores.Message);
                  },
                  (err) => {
                    this.authservice.dismissLoading();
                  }
                );
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlert1(msg) {
    const alert = await this.alertController.create({
      header: "ION APPT",
      message: msg,
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.authservice.setopcodero("");
            //this.presentAlertCheckbox2();
            this.router.navigateByUrl("/home");
          },
        },
      ],
      backdropDismiss: false,
    });

    await alert.present();
  }

  async presentAlert4(msg) {
    const alert = await this.alertController.create({
      header: "ION APPT",
      message: msg,
      buttons: [
        {
          text: "OK",
          handler: () => {
            //this.authservice.presentLoading();
            this.authservice.setopcodero("");
            this.authservice
              .printro(this.dealerid, "WorkOrderCopy", this.rono, this.username)
              .subscribe((res) => {
                console.log(res);
                this.furl = res;
                if (this.furl.URL) {
                  let object = {
                    fileurl: this.furl.URL,
                    delaerid: this.dealerid,
                    rono: this.rono,
                    username: this.username,
                    uid: this.sno,
                    isback: false,
                  };

                  this.router.navigate(["/pdfview"], { queryParams: object });
                }
              });
          },
        },
      ],
      backdropDismiss: false,
    });

    await alert.present();
  }

  async presentAlert3(msg) {
    const alert = await this.alertController.create({
      header: "ION APPT",
      message: msg,
      buttons: [
        {
          text: "OK",
          handler: () => {},
        },
      ],
      backdropDismiss: false,
    });

    await alert.present();
  }

  emailchange(e) {
    console.log(e);
    if (e.detail.checked == true) {
      this.cemail = true;
      if (this.cphone == undefined) {
        this.cphone = false;
      }
      if (this.csms == undefined) {
        this.csms = false;
      }
    } else {
      this.cemail = false;
    }
  }
  phonechange(e) {
    if (e.detail.checked == true) {
      this.cphone = true;
      if (this.cemail == undefined) {
        this.email = false;
      }
      if (this.csms == undefined) {
        this.csms = false;
      }
    } else {
      this.cphone = false;
    }
  }
  smschange(e) {
    if (e.detail.checked == true) {
      this.csms = true;
      if (this.cphone == undefined) {
        this.cphone = false;
      }
      if (this.email == undefined) {
        this.email = false;
      }
    } else {
      this.csms = false;
    }
  }
  rentalchange(e) {
    console.log(e);
    //e.detail.checked = false;
    if (e.detail.checked == true) {
      // if (this.tagno == undefined || this.tagno == "" || this.tagno == null) {
      //   this.presentAlert3("Enter Tagno.");
      //   setTimeout(() => {
      //     console.log(this.rent);
      //     this.rent = false;
      //   }, 500);

      // }
      //else {
      this.rent = true;
      this.isrental = true;
      var line;
      var l = this.rline;
      if (this.addrolist == undefined) {
        line = "A";
        for (let i = 0; i < this.alphaarr.length; i++) {
          if (this.alphaarr[i] == l) {
            //  ai = i;
            this.rline = this.alphaarr[i + 1];
          }
        }
        //this.rline = "A";
      } else {
        line = this.rline;
        for (let i = 0; i < this.alphaarr.length; i++) {
          if (this.alphaarr[i] == l) {
            //  ai = i;
            this.rline = this.alphaarr[i + 1];
          }
        }
        //line = this.alphaarr[this.addrolist.length];
        //this.rline = this.alphaarr[this.addrolist.length + 1];
      }

      this.authservice
        .insertrental(this.sno, this.rono, line, this.tagno, this.dealerid)
        .subscribe((res) => {
          console.log(res);
          this.rentalres = res;
          this.addrolist = this.rentalres;
          console.log(this.addrolist);
          for (let i = 0; i < this.addrolist.length; i++) {
            if (this.addrolist[i].LaborType == "") {
              this.islabor = false;
            } else {
              this.islabor = true;
            }
          }
        });

      // }
    }
  }

  reset() {
    this.rcode = "";
    this.opdesc = "";
    this.cc = "";
    this.laname = "";
    this.shours = "";
    this.itech = false;
    this.tecname = "";

    var line;
    var l = this.rline;
    if (this.bolrest == false && this.isFromEdit == true) {
      if (this.addrolist == undefined) {
        line = "A";
        for (let i = 0; i < this.alphaarr.length; i++) {
          if (this.alphaarr[i] == l) {
            this.rline = this.alphaarr[i + 1];
          }
        }
      } else {
        /* var temparrrolist = this.addrolist;
       temparrrolist.sort( function( a, b ) {
        a = a.Line.toLowerCase();
        b = b.Line.toLowerCase();
    
        return a < b ? -1 : a > b ? 1 : 0;
       });
       l = temparrrolist[0].Line
       console.log(temparrrolist);
       console.log(l);*/
        this.rline = this.alphaarr[this.addrolist.length];

        /* for (let i = 0; i < this.alphaarr.length; i++) {
          if (this.alphaarr[i] == l) {
            this.rline = this.alphaarr[i + 1];
            
          }
          
        }*/
        line = this.rline;
      }
      this.bolrest = true;
    }

    console.log(this.bolrest);

    this.roedit = false;
  }

  edit(data) {
    this.authservice.presentLoading();
    this.authservice.editline(this.dealerid, this.rono, data.TechId).subscribe(
      (res) => {
        console.log(res);
        var lineres;
        lineres = res;
        this.roedit = true;
        if (lineres.OpCode == "WC" || lineres.OpCode == "RC") {
          this.istech = true;
        }

        //this.index = i;

        this.rline = lineres.Line;
        this.rcode = lineres.OpCode;
        // this.opdesc = lineres.LineDesc;
        this.opdesc = lineres.StoryDesc;

        this.laname = lineres.LaborType;
        this.shours = lineres.SoldHours;
        this.tecname = lineres.TechNo;
        //this.cc = lineres.StoryDesc;
        this.cc = lineres.LineDesc;

        this.linees = lineres.LineEstimate;
        this.techid = lineres.TechId;
        this.authservice.dismissLoading();
      },
      (err) => this.authservice.dismissLoading()
    );
    //  for(let i=0;i<this.addrolist.length;i++){

    //  }
    this.roedit = true;
    this.itech = true;
    this.bolrest = false;
    this.isFromEdit = true;
    // this.index = i;
    // this.rline = this.addrolist[i].Line;
    // this.rcode = this.addrolist[i].OpCode;
    // this.opdesc = this.addrolist[i].LineDesc;
    // this.laname = this.addrolist[i].LaborType;
    // this.shours = this.addrolist[i].SoldHours;
    // this.tecname = this.addrolist[i].TechNo;
    // this.cc = this.addrolist[i].StoryDesc;
  }

  voidro() {}
  delete(data) {
    console.log(data);
    this.authservice.presentLoading();
    this.authservice
      .deleteline(
        this.rono,
        data.Line,
        data.OpCode,
        data.TechId,
        this.sno,
        this.dealerid
      )
      .subscribe(
        (res) => {
          console.log(res);
          var dres;
          dres = res;
          this.totalesti = 0.0;
          this.addrolist = dres.techStoryGridObjectsList;
          for (let i = 0; i < this.addrolist.length; i++) {
            this.totalesti =
              parseFloat(this.totalesti) +
              parseFloat(this.addrolist[i].LineEstimate);
          }
          if (this.addrolist.length == 0) {
            this.rline = "A";
          } else {
            var l = this.addrolist[this.addrolist.length - 1].Line;
            var ai;
            for (let i = 0; i < this.alphaarr.length; i++) {
              if (this.alphaarr[i] == l) {
                //  ai = i;
                this.rline = this.alphaarr[i + 1];
              }
            }
          }

          this.authservice.dismissLoading();
        },
        (err) => this.authservice.dismissLoading()
      );
    // this.addrolist.splice(i,1);
  }
  updatero() {
    //if(this.addrolist == undefined){
    var l = this.rline;
    var nline;
    for (let i = 0; i < this.alphaarr.length; i++) {
      if (this.alphaarr[i] == l) {
        //  ai = i;
        nline = this.alphaarr[i + 1];
      }
    }
    //this.rline = "A";

    // }

    this.authservice.presentLoading();
    this.authservice
      .updatetech(
        this.sno,
        this.rono,
        this.rline,
        this.cc,
        this.tagno,
        this.opdesc,
        this.rcode,
        this.labourname,
        this.techno,
        this.shours,
        nline,
        this.dealerid,
        this.sid,
        this.techid
      )
      .subscribe(
        (res) => {
          var rres;
          rres = res;
          this.addrolist = rres;
          this.totalesti = 0.0;
          for (let i = 0; i < this.addrolist.length; i++) {
            this.totalesti =
              parseFloat(this.totalesti) +
              parseFloat(this.addrolist[i].LineEstimate);
          }
          this.authservice.dismissLoading();
          for (let i = 0; i < this.addrolist.length; i++) {
            if (this.addrolist[i].LaborType == "") {
              this.islabor = false;
            } else {
              this.islabor = true;
            }
          }
          var l = this.addrolist[this.addrolist.length - 1].Line;
          var ai;
          for (let i = 0; i < this.alphaarr.length; i++) {
            if (this.alphaarr[i] == l) {
              //  ai = i;
              this.rline = this.alphaarr[i + 1];
            }
          }
        },
        (err) => this.authservice.dismissLoading()
      );
    // this.ngzone.run(() =>{
    // this.addrolist[this.index].Line =this.rline;
    // this.addrolist[this.index].OpCode = this.rcode;
    // this.addrolist[this.index].LineDesc = this.opdesc;
    // this.addrolist[this.index].LaborType = this.laname;
    // this.addrolist[this.index].SoldHours = this.shours;
    // this.addrolist[this.index].TechNo = this.tecname;
    // this.addrolist[this.index].StoryDesc = this.cc;
    this.roedit = false;
    this.rcode = "";
    this.opdesc = "";
    this.shours = "";
    this.labourname = null;
    this.laname = null;
    this.cc = "";
    this.shours = "0.00";
    // })
  }

  addsublet() {
    this.authservice.AddSublet(this.dealerid).subscribe((res) => {
      console.log(res);
      this.itech = false;
      this.istech = true;
      this.subletres = res;
      this.rcode = this.subletres.OPCode;
      this.opdesc = this.subletres.Description;
      this.cc = this.subletres.CustomerComplain;
      this.shours = this.subletres.SoldHours;
      this.laname = "";
      this.techno = "";
    });
  }

  addmisc() {
    this.authservice.AddMisc(this.dealerid).subscribe((res) => {
      console.log(res);
      this.itech = false;
      this.istech = true;
      this.miscres = res;
      this.rcode = this.miscres.OPCode;
      this.opdesc = this.miscres.Description;
      this.cc = this.miscres.CustomerComplain;
      this.shours = this.miscres.SoldHours;
      this.techno = "";
      this.laname = "";
    });
  }
  partsublet() {
    this.authservice.AddPartSublet(this.dealerid).subscribe((res) => {
      console.log(res);
      this.itech = false;
      this.istech = true;
      this.partsubres = res;
      this.rcode = this.partsubres.OPCode;
      this.opdesc = this.partsubres.Description;
      this.cc = this.partsubres.CustomerComplain;
      this.shours = this.partsubres.SoldHours;
      this.techno = "";
      this.laname = "";
    });
  }
  adddisc() {
    this.authservice.AddDiscount(this.dealerid).subscribe((res) => {
      console.log(res);
      this.itech = false;
      this.isrc = true;
      this.istech = true;
      this.discres = res;
      this.opdesc = this.discres.Description;
      this.cc = this.discres.CustomerComplain;
      this.shours = this.discres.SoldHours;
      this.techno = "";
      this.laname = "";
      this.rcode = "";
    });
  }

  getadvisor() {
    var getadvisor;
    // this.authservice.presentLoading();
    this.authservice.GetAdvisorList(this.dealerid).subscribe((res) => {
      this.advisordata = res;
      //console.log(this.advisordata);

      // if(this.rescustvin.data){
      //   getadvisor = this.rescustvin.data.AdvisorId;
      //   this.advisorid = getadvisor;
      //   this.advisordata.forEach(el =>{
      //     el.checked = false;
      //     if(getadvisor == el.AdvisorId){
      //       el.checked = true;
      //     }
      //   })
      //   for(let i=0;i<this.advisordata.length;i++){
      //     if(this.rescustvin.data.AdvisorId == this.advisordata[i].AdvisorId){
      //       this.advisorname = this.advisordata[i].AdvisorName;
      //     }
      //   }
      //   console.log("advisor",this.advisordata);
      // }
      // this.authservice.dismissLoading();
    });
  }

  addcode(val) {
    this.rcode = "";
    this.cc = "";
    this.opdesc = "";
    this.labourname = "";
    this.laname = "";
    this.shours = "";
    this.shours = "0.00";
    if (val == "WC" || val == "RC") {
      this.istech = true;
      this.tecname = "";
    }
    this.authservice.GetMOPCode(this.dealerid, 0, 10, val).subscribe((res) => {
      console.log(res);
      this.opcoderes = res;
      this.rcode = this.opcoderes[0].OpCode;
      this.opdesc = this.opcoderes[0].Description;
      this.cc = this.opcoderes[0].Description;
    });
  }

  comeback() {
    this.authservice
      .comeback(this.dealerid, this.CustomerId, this.VIN)
      .subscribe((res) => {
        console.log("comeback", res);
        this.comeres = res;
        if (this.comeres.IsComback == true) {
          this.roselect = "cb";
          this.selectval = "cb";
        }
        if (this.comeres.IsEmail == true) {
          this.emailc = true;
          this.cemail = true;
          if (this.cphone == undefined) {
            this.cphone = false;
          }
          if (this.csms == undefined) {
            this.csms = false;
          }
        }

        if (this.comeres.IsPhone == true) {
          this.cphone = true;
          this.phonec = true;
          if (this.cemail == undefined) {
            this.cemail = false;
          }
          if (this.csms == undefined) {
            this.csms = false;
          }
        }
        // IsComback: false
        // IsEmail: false
        // IsPhone: true
      });
  }

  getrono() {
    this.authservice
      .getronumber(
        this.CustomerId,
        this.VIN,
        this.sno,
        this.dealerid,
        this.appno
      )
      .subscribe((res) => {
        console.log(res);
        this.ronores = res;
        this.rono = this.ronores.RONumber;
        this.rodate = this.ronores.RODate;
        this.addrolist = this.ronores.techStoryList;
        this.totalesti = 0.0;
        for (let i = 0; i < this.addrolist.length; i++) {
          this.totalesti =
            parseFloat(this.totalesti) +
            parseFloat(this.addrolist[i].LineEstimate);
        }
        var l = this.addrolist[this.addrolist.length - 1].Line;
        var ai;
        for (let i = 0; i < this.alphaarr.length; i++) {
          if (this.alphaarr[i] == l) {
            //  ai = i;
            this.rline = this.alphaarr[i + 1];
          }
        }
        for (let i = 0; i < this.addrolist.length; i++) {
          if (this.addrolist[i].LaborType == "") {
            this.islabor = false;
          } else {
            this.islabor = true;
          }
        }
        // RONumber: "666273"
        // Message: ""
        // RODate: "3/27/2020 2:56:22 AM"
      });
  }
}
