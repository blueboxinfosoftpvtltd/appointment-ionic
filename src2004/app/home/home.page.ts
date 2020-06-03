import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Storage } from '@ionic/storage';
import * as moment from "moment";
import { LoadingController, MenuController, AlertController } from '@ionic/angular';
import { MergeMapOperator } from 'rxjs/internal/operators/mergeMap';
import { DxSchedulerModule, DxSchedulerComponent } from 'devextreme-angular';
//import Scheduler from "devextreme/ui/scheduler";
//import { $ } from 'protractor';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(DxSchedulerComponent, { static: false }) scheduler: DxSchedulerComponent;
  appointmentsData: any;
  //resdata:any;
  currentDate: any;
  advisorid: any;
  ActiveSegment: any;
  username: any;
  from: any;
  to: any;
  rod: any;
  selecttxt: any;
  op: any;
  val: any;
  // dealers: any[] = [
  //   {
  //     id: 1,
  //     name: 'Demo Dealer 1'
  //   },
  //   {
  //     id: 2,
  //     name:'Demo Dealer 2'
  //   },
  //   {
  //     id: 3,
  //     name:'Demo Dealer 3'
  //   },{
  //     id:4,
  //     name:'Demo Dealer 4'
  //   }
  // ];
  items: any[] = [{ "data": "Book Appointment", "img": "../assets/imgs/a_icon.png", "id": "1" },
  { "data": "Create RO", "img": "../assets/imgs/a_icon.png", "id": "10" }
    , { "data": "View Appointment", "img": "../assets/imgs/v_icon.png", "id": "2" }
    , { "data": "About Us", "img": "../assets/imgs/about_icon.png", "id": "3" }
    , { "data": "Take Photo", "img": "../assets/imgs/img.png", "id": "7" }
    , { "data": "Signature", "img": "../assets/imgs/sign.png", "id": "8" }
    , { "data": "Video", "img": "../assets/imgs/video.png", "id": "9" }]
  grid: Array<Array<string>>;
  dealers: any;
  dealerid: any;
  dealername: any;
  isEnabled: any;
  dealer: any;
  compareWith: any;
  ismyapp: any;
  ismyapp1: any;
  displayValue: boolean;
  currenttime: any;
  appointmentdate: any;
  appointmenttime: any;
  type: any;
  currentDateor: any;
  fromd: number = 0;
  tod: number = 10;
  rodata: any[] = [];
  issearch: boolean = false;
  constructor(public activatedRoute: ActivatedRoute, private router: Router, private authservice: AuthService, public storage: Storage, public menuCtrl: MenuController, public loadingController: LoadingController, public alertCtrl: AlertController) {
    this.menuCtrl.enable(true);
    // this.storage.get('dealerid').then((val) => {
    //   this.dealers = this.authservice.getdealers();   
    //   console.log(this.dealers);
    //   console.log('Your age is', val);
    //    this.dealername = val;
    //   // console.log(this.dealerid);
    // })
    this.ActiveSegment = "app";
    this.selecttxt = "My Appointment";
    this.currentDate = (moment(new Date).format('YYYY-MM-DD'));
    this.currentDateor = (moment(new Date).format('YYYY-MM-DD'));
    this.currenttime = (moment(new Date).format('HH:mm'));
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data);
      this.isEnabled = data.ISEnable;
      this.dealer = data.dealer;
      console.log('enable', this.isEnabled);
      console.log('dealer', this.dealer);
      if (this.dealer == undefined) {
        this.storage.get('dealername').then((data) => {
          this.dealer = data;
          console.log(this.dealer);
          this.dealers = this.authservice.getdealers();
          console.log(this.dealers);
          this.storage.get('dealerid').then((val) => {

            console.log(this.dealers);
            console.log('Your age is', val);
            this.dealername = val;
            console.log(this.dealername);

          })
          this.storage.get('idsflag').then((val) => {
            this.authservice.setids(val);
          })
          this.storage.get('from').then((val) => {
            this.from = val;
          })
          this.storage.get('to').then((val) => {
            this.to = val;
          })
          if (this.dealers == undefined) {
            this.authservice.getDealership().subscribe(res => {
              console.log(res);
              this.dealers = res;
              this.storage.get('dealerid').then((val) => {

                console.log(this.dealers);
                console.log('Your age is', val);
                this.dealername = val;
                console.log(this.dealername);

              })
              this.authservice.setdealers(res);
            })
          }


        })
      }
      if (this.isEnabled == undefined) {
        this.storage.get('isenable').then((data) => {
          this.isEnabled = data;
          console.log(this.isEnabled);

        })
      }
      //this.isEnabled ="false";



    })
    this.storage.get('username').then((val => {
      this.username = val;
    }))
    console.log(this.dealer);
    this.grid = Array(Math.ceil(this.items.length / 3));

  }

  Isapp() {
    this.ActiveSegment = "app";
    this.selecttxt = "My Appointment";
  }

  Isro() {
    this.ActiveSegment = "ro";
    this.selecttxt = "My RO";
    if (this.rodata.length == 0) {
      this.authservice.presentLoading();
      this.storage.get('showallro').then((val) => {
        if (val == undefined) {
          this.ismyapp1 = true;
        }
        else {
          if (val == "1") {
            this.ismyapp1 = true;
          }
          else {
            this.ismyapp1 = false;
          }
        }
        this.authservice.getrodashboard(this.dealerid, val, this.advisorid, 0, 10).subscribe(res => {
          this.rod = res;
          for (let i = 0; i < this.rod.length; i++) {
            this.rodata.push(this.rod[i]);
          }
          console.log(this.rodata);
          this.authservice.dismissLoading();
        })
      })
    }
  }


  selectoption(index) {
    console.log(index);
    if (index == 1) {
      let object = {
        Page: "appt"
      }
      // this.router.navigate(['/searchappoinment'],{ queryParams: object });
      this.router.navigate(['/appointment'], { queryParams: object });
      //this.router.navigateByUrl('/appointment');
    }

    if (index == 2) {
      this.router.navigateByUrl('/calender');
    }

    if (index == 7) {
      let object = {
        Page: "TakeImage"
      }
      this.router.navigate(['/searchappoinment'], { queryParams: object });
    }

    if (index == 8) {
      let object = {
        Page: "Signatue"
      }
      this.router.navigate(['/searchappoinment'], { queryParams: object });
    }

    if (index == 9) {
      let object = {
        Page: "Video"
      }
      this.router.navigate(['/searchappoinment'], { queryParams: object });

    }
    if (index == 10) {
      let object = {
        Page: "ro"
      }
      // this.router.navigate(['/searchappoinment'],{ queryParams: object });
      this.router.navigate(['/appointment'], { queryParams: object });

    }
  }

  AddAppointment() {
    this.router.navigateByUrl('/appointment');
  }

  myapp(e) {
    if (this.ActiveSegment == "app") {
      console.log(e.detail.checked);
      if (e.detail.checked == true) {
        if (this.type == undefined) {
          this.type = "0";
        }
        //
        this.storage.set("showall", "1");
        if (this.appointmentsData != undefined) {

          var appointment = "1";
          this.authservice.presentLoading();
          this.authservice.getappointdata(this.advisorid, this.dealerid, appointment, this.currentDate, this.type).subscribe((res) => {
            //this.appointmentsData = "";
            //this.appointmentsData = res;
            //this.scheduler.updateAppointment(this.appointmentsData,res);
            setTimeout(() => {
              if (res == null) {
                this.scheduler.instance.option("dataSource", []);
                this.authservice.dismissLoading();
              }
              else {
                this.scheduler.instance.option("dataSource", res);
                this.authservice.dismissLoading();
              }

            }, 500);

            // for(let i=0 ; i<this.resdata.length;i++){
            //   this.appointmentsData.push(this.resdata[i]);
            // }
          })
        }
      }
      else {
        if (this.type == undefined) {
          this.type = "0";
        }
        this.storage.set("showall", "0");
        var appointment = "0";
        if (this.appointmentsData != undefined) {
          this.authservice.presentLoading();
          this.authservice.getappointdata(this.advisorid, this.dealerid, appointment, this.currentDate, this.type).subscribe((res) => {
            //this.appointmentsData = "";
            //this.appointmentsData = res;
            // this.scheduler.updateAppointment(this.appointmentsData,res);
            setTimeout(() => {
              if (res == null) {
                this.scheduler.instance.option("dataSource", []);
                this.authservice.dismissLoading();
              }
              else {
                this.scheduler.instance.option("dataSource", res);
                this.authservice.dismissLoading();
              }

            }, 500);
            // for(let i=0 ; i<this.resdata.length;i++){
            //   this.appointmentsData.push(this.resdata[i]);
            // }
          })
        }
      }
    }
  }

  myapp1(e) {
    if (this.ActiveSegment == "ro") {
      this.rodata = [];
      if (e.detail.checked == true) {
        this.storage.set("showallro", "1");
        var ro = "1";
        if (this.rodata.length != 0)
          this.authservice.presentLoading();

        this.authservice.getrodashboard(this.dealerid, ro, this.advisorid, 0, 10).subscribe(res => {
          this.rod = res;
          this.authservice.dismissLoading();
          if (this.rod == null) {

            // e.target.complete();
            // e.target.disabled = true;
          }
          for (let i = 0; i < this.rod.length; i++) {
            this.rodata.push(this.rod[i]);
          }
        })
      }
      else {
        this.storage.set("showallro", "0");
        var ro = "0";
        this.authservice.presentLoading();
        this.rodata = [];
        this.authservice.getrodashboard(this.dealerid, ro, this.advisorid, 0, 10).subscribe(res => {
          this.rod = res;
          this.authservice.dismissLoading();
          if (this.rod == null) {

            // e.target.complete();
            // e.target.disabled = true;
          }
          for (let i = 0; i < this.rod.length; i++) {
            this.rodata.push(this.rod[i]);
          }
        })
      }
    }
  }

  GoToScheduler() {
    this.router.navigateByUrl('/calender');
  }

  ngOnInit() {
    if (this.type == undefined) {
      this.type = "0";
    }
    this.authservice.presentLoading();
    console.log("ionViewDidLoad call");
    this.storage.get('showall').then((val) => {
      if (val == undefined) {
        this.ismyapp = true;
      }
      else {
        if (val == "1") {
          this.ismyapp = true;
        }
        else {
          this.ismyapp = false;
        }
      }
    })
    this.storage.get('showallro').then((val) => {
      if (val == undefined) {
        this.ismyapp1 = true;
      }
      else {
        if (val == "1") {
          this.ismyapp1 = true;
        }
        else {
          this.ismyapp1 = false;
        }
      }
    })
    this.storage.get('userid').then((val) => {
      this.advisorid = val;
      this.storage.get('dealerid').then((val) => {
        this.dealerid = val;
        var appointment;
        if (this.ismyapp == true) {
          appointment = "1";
        }
        else {
          appointment = "0";
        }

        this.authservice.getappointdata(this.advisorid, this.dealerid, appointment, this.currentDate, this.type).subscribe((res) => {

          console.log(res);
          if (res == null) {
            this.appointmentsData = "null";
          }
          else {
            this.appointmentsData = res;
          }
          this.authservice.dismissLoading();
          // for(let i=0 ; i<this.resdata.length;i++){
          //   this.appointmentsData.push(this.resdata[i]);
          // }
        })
      })
    })

    // let rowNum = 0; //counter to iterate over the rows in the grid

    // for (let i = 0; i < this.items.length; i+=3) { //iterate images

    //   this.grid[rowNum] = Array(3); //declare two elements per row

    //   if (this.items[i]) { //check file URI exists
    //     this.grid[rowNum][0] = this.items[i] //insert image
    //   }

    //   if (this.items[i+1]) { //repeat for the second image
    //     this.grid[rowNum][1] = this.items[i+1]
    //   }
    //   if (this.items[i+2]) { //repeat for the second image
    //     this.grid[rowNum][2] = this.items[i+2]
    //   }

    //   rowNum++; //go on to the next row
    // }
  }

  change(e) {
    console.log(e);

    if (e.name === "currentView" || e.name === "currentDate") {
      // 
      if (e.value == "week" || e.value == "day" || e.value == "month") {
        if (e.value == "week") {
          this.type = "1";
        }
        if (e.value == "day") {
          this.type = "0";
        }
        if (e.value == "month") {
          this.type = "2";
        }
        this.storage.get('userid').then((val) => {
          this.advisorid = val;
          this.storage.get('dealerid').then((val) => {
            this.dealerid = val;
            var appointment;
            if (this.ismyapp == true) {
              appointment = "1";
            }
            else {
              appointment = "0";
            }
            this.appointmentsData = "";

            this.authservice.getappointdata(this.advisorid, this.dealerid, appointment, this.currentDate, this.type).subscribe((res) => {
              this.appointmentsData = res;
              console.log(res);

              // for(let i=0 ; i<this.resdata.length;i++){
              //   this.appointmentsData.push(this.resdata[i]);
              // }
            })
          })
        })
      }
      else {
        if (this.type == undefined) {
          this.type = "0";
        }
        this.appointmentsData = "";
        console.log(e.value);
        console.log(e.component.getStartViewDate());
        console.log(e.component.getEndViewDate());
        this.currentDate = (moment(e.value).format('YYYY-MM-DD'));
        this.storage.get('userid').then((val) => {
          this.advisorid = val;
          this.storage.get('dealerid').then((val) => {
            this.dealerid = val;
            var appointment;
            if (this.ismyapp == true) {
              appointment = "1";
            }
            else {
              appointment = "0";
            }

            this.authservice.getappointdata(this.advisorid, this.dealerid, appointment, this.currentDate, this.type).subscribe((res) => {
              this.appointmentsData = res;
              console.log(res);

              // for(let i=0 ; i<this.resdata.length;i++){
              //   this.appointmentsData.push(this.resdata[i]);
              // }
            })
          })
        })
      }
    }

  }

  async addapp() {
    //this.router.navigateByUrl('/appointment');
    var email, text;
    const alert = await this.alertCtrl.create({
      header: 'Do you want to create?',
      inputs: [
        {
          name: 'Email',
          type: 'radio',
          label: 'Create Appointment',
          value: 'appt',
        },

        {
          name: 'Text',
          type: 'radio',
          label: 'Create RO',
          value: 'ro'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data)
            console.log('Confirm Ok');

            if (data == "appt") {
              let object = {
                Page: "appt"
              }
              // this.router.navigate(['/searchappoinment'],{ queryParams: object });
              this.router.navigate(['/appointment'], { queryParams: object });
            }
            else if (data == "ro") {
              let object = {
                Page: "ro"
              }
              // this.router.navigate(['/searchappoinment'],{ queryParams: object });
              this.router.navigate(['/appointment'], { queryParams: object });
            }
          }
        }],
    })

    await alert.present();
  }


  reload() {
    if (this.type == undefined) {
      this.type = "0";
    }
    this.authservice.presentLoading();
    this.appointmentsData = "";
    this.storage.get('userid').then((val) => {
      this.advisorid = val;
      this.storage.get('dealerid').then((val) => {
        this.dealerid = val;
        var appointment;
        if (this.ismyapp == true) {
          appointment = "1";
        }
        else {
          appointment = "0";
        }
        this.authservice.getappointdata(this.advisorid, this.dealerid, appointment, this.currentDate, this.type).subscribe((res) => {
          setTimeout(() => {
            if (res == null) {
              this.scheduler.instance.option("dataSource", []);
              this.authservice.dismissLoading();
            }
            else {
              this.scheduler.instance.option("dataSource", res);
              this.authservice.dismissLoading();
            }

          }, 500);
          // for(let i=0 ; i<this.resdata.length;i++){
          //   this.appointmentsData.push(this.resdata[i]);
          // }
        })
      })
    })
  }
  ChangeDealership(event) {
    if (this.type == undefined) {
      this.type = "0";
    }
    this.storage.set("dealerid", event.detail.value);
    if (this.appointmentsData != undefined) {
      this.authservice.presentLoading();
      this.appointmentsData = "";
      var appointment;
      if (this.ismyapp == true) {
        appointment = "1";
      }
      else {
        appointment = "0";
      }
      this.authservice.getappointdata(this.advisorid, event.detail.value, appointment, this.currentDate, this.type).subscribe((res) => {
        setTimeout(() => {
          if (res == null) {
            this.scheduler.instance.option("dataSource", []);
            this.authservice.dismissLoading();
          }
          else {
            this.scheduler.instance.option("dataSource", res);
            this.authservice.dismissLoading();
          }

        }, 500);
        // for(let i=0 ; i<this.resdata.length;i++){
        //   this.appointmentsData.push(this.resdata[i]);
        // }
      })
    }
  }

  bookSelectedAppointment(e) {
    e.cancel = true;
    setTimeout(() => {
      //var scheduler = new Scheduler(e);
      // Scheduler.hideAppointmentTooltip();
      //console.log(this.sche);
      this.scheduler.instance.hideAppointmentTooltip();
    }, 500);


    // var tooltipInstance = ($("#scheduler").find('.dx-tooltip')[0]).dxTooltip('instance');  
    //                 tooltipInstance.hide();
    console.log(e.appointmentData);
    let data = {
      'CustomerId': e.appointmentData.FkCustomerId,
      "VIN": e.appointmentData.VIN,
      "data": e.appointmentData
    }
    this.appointmentdate = moment(e.appointmentData.StartDate).format('YYYY-MM-DD');
    console.log(this.appointmentdate);
    this.appointmenttime = moment(e.appointmentData.StartDate).format('HH:mm');
    console.log(this.appointmenttime);
    if (this.appointmentdate == this.currentDateor) {
      if (this.currenttime < "18:00") {
        if (this.appointmenttime > this.currenttime) {
          this.authservice.secustidvin(data);
          this.router.navigateByUrl('/createappointment');
        }
      }
    }
    else if (this.appointmentdate > this.currentDateor) {
      this.authservice.secustidvin(data);
      this.router.navigateByUrl('/createappointment');
    }
  }

  empty(e) {
    e.cancel = true;
  }
  // hidetool(e){
  //   e.cancel = true;
  // }

  loadData(e) {
    setTimeout(() => {
      console.log('Done');

      this.fromd = this.fromd + 10;
      this.tod = this.tod + 10;
      console.log("scroll called");
      if (!this.issearch) {
        this.storage.get('showallro').then((val) => {
          if (val == undefined) {
            this.ismyapp1 = true;
          }
          else {
            if (val == "1") {
              this.ismyapp1 = true;
            }
            else {
              this.ismyapp1 = false;
            }
          }
          this.authservice.getrodashboard(this.dealerid, val, this.advisorid, this.fromd, this.tod).subscribe(res => {
            this.rod = res;
            if (this.rod == null) {
              e.target.complete();
              e.target.disabled = true;
            }
            for (let i = 0; i < this.rod.length; i++) {
              this.rodata.push(this.rod[i]);
            }
            e.target.complete();
          })
        })
      }
      else {
        this.authservice.presentLoading();
        this.authservice.GetSearchrocust(this.op, this.val, this.dealerid, 0, this.tod).subscribe(res => {
          this.rod = res;
          for (let i = 0; i < this.rod.length; i++) {
            this.rodata.push(this.rod[i]);
          }
          this.authservice.dismissLoading();

        })
      }
    }, 2000)
  }

  clear() {
    this.authservice.presentLoading();
    this.storage.get('showallro').then((val) => {
      this.authservice.getrodashboard(this.dealerid, val, this.advisorid, 0, 10).subscribe(res => {
        this.rod = res;
        for (let i = 0; i < this.rod.length; i++) {
          this.rodata.push(this.rod[i]);
        }
        this.op = "";
        this.val = "";
        console.log(this.rodata);
        this.authservice.dismissLoading();
      })
    })
  }

  search() {

    if (this.val && this.op) {
      this.issearch = true;
      this.authservice.presentLoading();
      this.authservice.GetSearchrocust(this.op, this.val, this.dealerid, 0, 10).subscribe(res => {
        this.rod = res;
        for (let i = 0; i < this.rod.length; i++) {
          this.rodata.push(this.rod[i]);
        }
        this.authservice.dismissLoading();

      })

    }
    else {
      this.authservice.showToast("Please enter value");
    }
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      if (this.ActiveSegment == "app") {
        if (this.type == undefined) {
          this.type = "0";
        }
        this.authservice.presentLoading();
        this.appointmentsData = "";
        this.storage.get('userid').then((val) => {
          this.advisorid = val;
          this.storage.get('dealerid').then((val) => {
            this.dealerid = val;
            var appointment;
            if (this.ismyapp == true) {
              appointment = "1";
            }
            else {
              appointment = "0";
            }
            this.authservice.getappointdata(this.advisorid, this.dealerid, appointment, this.currentDate, this.type).subscribe((res) => {
              setTimeout(() => {
                if (res == null) {
                  this.scheduler.instance.option("dataSource", []);
                  this.authservice.dismissLoading();
                  event.target.complete();
                }
                else {
                  this.scheduler.instance.option("dataSource", res);
                  this.authservice.dismissLoading();
                  event.target.complete();
                }

              }, 500);
              // for(let i=0 ; i<this.resdata.length;i++){
              //   this.appointmentsData.push(this.resdata[i]);
              // }
            })
          })
        })

      }

      else if (this.ActiveSegment == "ro") {
        // this.rodata = [];
        this.storage.get('userid').then((val) => {
          this.advisorid = val;
          this.storage.get('dealerid').then((val) => {
            this.dealerid = val;
            var appointment;
            if (this.ismyapp1 == true) {
              appointment = "1";
            }
            else {
              appointment = "0";
            }
            this.authservice.presentLoading();
            this.rodata = [];
            this.authservice.getrodashboard(this.dealerid, appointment, this.advisorid, 0, 10).subscribe(res => {
              this.rod = res;
              this.authservice.dismissLoading();
              if (this.rod == null) {

                // e.target.complete();
                // e.target.disabled = true;
              }
              for (let i = 0; i < this.rod.length; i++) {
                this.rodata.push(this.rod[i]);
                event.target.complete();
              }
            })
          })
        })
      }
    }, 2000);
  }

}