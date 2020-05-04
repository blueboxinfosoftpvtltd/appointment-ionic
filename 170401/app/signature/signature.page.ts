import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../auth.service';
import { IfStmt } from '@angular/compiler';
import { Location } from "@angular/common";
import { image2base64 } from 'image-to-base64';
import { Observable, Observer } from 'rxjs';
@Component({
  selector: 'app-signature',
  templateUrl: './signature.page.html',
  styleUrls: ['./signature.page.scss'],
})
export class SignaturePage implements OnInit {
  @ViewChild(SignaturePad, { static: false }) signaturePad: SignaturePad;
  AppointmentId; any;
  Page: any;
  userid: any;
  delarid: any;
  VIN: any;
  data: any;
  rores: any;
  array: any;
  finalsignature: any = Array();
  isedit: any;
  getres: any;
  imagurl: any;
  ronumber: any;
  appres: any;
  app: any;
  ro: any;
  CarImageList: any[] = [];
  public signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 1000,
    'canvasHeight': 300,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };
  isDrawing: any;
  signature: any;
  constructor(private router: Router, public activatedRoute: ActivatedRoute, private authservice: AuthService, private storage: Storage, private loc: Location, private alertController: AlertController, public platform: Platform) {

    console.log(this.AppointmentId);
  }

  ngOnInit() {
    this.signature = "";
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data);
      this.AppointmentId = data.AppointmentId;
      this.Page = data.Page;
      this.VIN = data.VIN
      this.isedit = data.Isedit;
      this.ronumber = data.ROnumber;
      this.app = data.app;
      this.ro = data.ro;
    })

    if (this.AppointmentId == undefined) {
      this.AppointmentId = "0";
    }
    if (this.ronumber == undefined) {
      this.ronumber = "0";
    }
    this.storage.get('dealerid').then((val) => {
      this.delarid = val;
      // console.log(this.dealerid);
    })

    this.storage.get('userid').then((val) => {
      this.userid = val;
      if (this.isedit == "true") {
        this.authservice.presentLoading();
        this.authservice.getcarimage(this.delarid, this.AppointmentId).subscribe((res => {
          this.getres = res;
          if (this.getres == null) {
            this.authservice.dismissLoading();
          }
          else {
            for (let i = 0; i < this.getres.length; i++) {
              if (this.getres[i].ImageType == 1) {
                this.imagurl = this.getres[i].BuketURL;
              }
            }
            // this.getBase64ImageFromURL(this.imagurl).subscribe(base64data => {
            //   console.log(base64data);
            //   //this.base64Image = 'data:image/jpg;base64,'+base64data;
            // });
            // this.convertToDataURLviaCanvas(this.getres, "image/jpeg").then(base64 => console.log(base64));
            this.signaturePad.fromDataURL(this.imagurl);
            setTimeout(() => {
              this.authservice.dismissLoading();
            }, 1000);
          }

        }))
      }
      // console.log(this.dealerid);
    })
  }

  resizeSignaturePad() {
    this.signaturePad.set('canvasWidth', document.getElementById("sign_canvas").offsetWidth);
    this.signaturePad.clear();
  }

  ionViewDidEnter() {
    console.log(document.getElementById("sign_canvas").offsetWidth);
    this.signaturePad.clear();
  }

  drawComplete() {
    this.isDrawing = false;
  }

  drawStart() {
    this.isDrawing = true;
  }

  finish() {

    this.router.navigateByUrl('/home');
  }

  savePad() {
    this.signature = this.signaturePad.toDataURL();
    var data1 = { "image1": this.signature };

    let object = {
      ImagePath: this.signature,
      displayorder: "0"
    }
    this.finalsignature.push(this.signature);
    console.log(this.signature);

    if (this.Page) {
      this.authservice.presentLoading();
      this.authservice.CarImageInsert(this.delarid, this.AppointmentId, this.VIN, this.userid, "1", this.signature.split(',').pop(), "0", this.ronumber).subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.authservice.dismissLoading();
        this.authservice.showToast(this.data.Message);
        this.router.navigateByUrl('/home');
      })
    }

    else {
      if (this.app == "true") {
        this.presentAlertCheckbox1();
      }
      else {
        this.authservice.presentLoading();
        var rocdata = this.authservice.getrocdata();
        var imgdata = this.authservice.getimagedata();
        console.log(imgdata);
        let signdata = {
          "DealershipID": rocdata.dlrid,
          "AppointmentID": "0",
          "RONumber": "0",
          "VIN": rocdata.vin,
          "CreatedBy": rocdata.uid,
          "ImageType": "1",
          "ImagePathList": this.signature.split(',').pop(),
          "DisplayOrderList": 0
        }
        this.CarImageList.push(signdata, imgdata);
        if (rocdata.rolist) {
          this.authservice.createtabro(rocdata.cid, rocdata.vin, rocdata.min, rocdata.sano, rocdata.tagno, rocdata.pono, rocdata.contact, rocdata.cname, rocdata.add1, rocdata.city, rocdata.state, rocdata.zip, rocdata.homeno, rocdata.workno, rocdata.email, rocdata.year, rocdata.make, rocdata.model, rocdata.license, rocdata.color, rocdata.uid, rocdata.mout, rocdata.wsdate, rocdata.wedate, rocdata.dlrid, rocdata.rnotes, rocdata.rolist, this.CarImageList, rocdata.rotype, rocdata.rono, rocdata.prodate).subscribe(res => {
            console.log(res);
            this.authservice.dismissLoading();
            this.rores = res;
            // this.authservice.showToast(this.rores.Message);
            this.presentAlert1(this.rores.Message, "no");

          }, err => {
            this.authservice.dismissLoading();
          })
        }
        else {
          this.authservice.createro(rocdata.cid, rocdata.vin, rocdata.mileage, rocdata.tagno, rocdata.add1, "", "", rocdata.add2, rocdata.city, rocdata.state, rocdata.zip, rocdata.homeno, rocdata.workno, rocdata.email, rocdata.year, rocdata.make, rocdata.model, rocdata.license, rocdata.color, rocdata.uid, rocdata.dlrid, rocdata.techlist, this.CarImageList).subscribe(res => {
            console.log(res);
            this.authservice.dismissLoading();
            this.rores = res;
            // this.authservice.showToast(this.rores.Message);
            this.presentAlert1(this.rores.Message, "");

          }, err => {
            this.authservice.dismissLoading();
          })
        }
        // }

      }
    }
    // else{
    //   this.router.navigateByUrl('/home');
    // }       
  }

  prev() {
    this.loc.back();
  }

  clearPad() {
    this.signaturePad.clear();
  }
  // getBase64ImageFromURL(url: string) {
  //   return Observable.create((observer: Observer<string>) => {
  //     let img = new Image();
  //     img.crossOrigin = 'Anonymous';
  //     img.src = url;
  //     if (!img.complete) {
  //       img.onload = () => {
  //         observer.next(this.getBase64Image(img));
  //         observer.complete();
  //       };
  //       img.onerror = (err) => {
  //         observer.error(err);
  //       };
  //     } else {
  //       observer.next(this.getBase64Image(img));
  //       observer.complete();
  //     }
  //   });
  // }

  // getBase64Image(img: HTMLImageElement) {
  //   var canvas = document.createElement("canvas");
  //   canvas.width = img.width;
  //   canvas.height = img.height;
  //   var ctx = canvas.getContext("2d");
  //   ctx.drawImage(img, 0, 0);
  //   var dataURL = canvas.toDataURL("image/png");
  //   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  // }

  async presentAlertCheckbox1() {
    var email, text;
    const alert = await this.alertController.create({
      header: 'Do you want to create RO?',
      inputs: [
        {
          name: 'Yes',
          type: 'radio',
          label: 'Yes',
          value: 'yes',
        },

        {
          name: 'No',
          type: 'radio',
          label: 'No',
          value: 'no'
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

            if (data == "yes") {
              this.presentAlertCheckbox("yes");

              //this.continuero();
            }
            else if (data == "no") {
              this.presentAlertCheckbox("no");
            }

          }
        }
      ]
    });

    await alert.present();

  }
  continuero() {
    console.log("ro");
    var appointmentdata = this.authservice.getappdata();
    var finalopcode = [];

    for (let i = 0; i < appointmentdata.OPCodeList.length; i++) {
      if (appointmentdata.OPCodeList[i].isChecked == true) {
        finalopcode.push(appointmentdata.OPCodeList[i]);
      }
    }
    if (finalopcode.length == 0) {
      this.authservice.showToast("Please select opcode");
    }
    else {
      console.log(finalopcode);
      let data = {
        'opcode': finalopcode,
        'dlrid': appointmentdata.DealershipId,
        'cid': appointmentdata.CustomerId,
        'vin': appointmentdata.VIN,
        'add1': appointmentdata.Address1,
        'add2': appointmentdata.Address2,
        'city': appointmentdata.City,
        'state': appointmentdata.State,
        'zip': appointmentdata.Zip,
        'homeno': appointmentdata.HomeNo,
        'workno': appointmentdata.WorkNo,
        'email': appointmentdata.CustomerEmail,
        'year': appointmentdata.Vehicaleyear,
        'make': appointmentdata.Vehicalemake,
        'model': appointmentdata.Vehicalemodel,
        'license': appointmentdata.LicensePlate,
        'color': appointmentdata.ColorId,
        'uid': appointmentdata.CreatedBy,
        'image': "no",
        'carimage': this.CarImageList,
      }
      this.authservice.setopcodero(data);
      if (this.platform.is("ipad")) {

        this.router.navigateByUrl('/rotab').then(() => {
          console.log('Published');
        });
      }
      else {
        //this.authservice.secustidvin(data);
        this.router.navigateByUrl('/createromain').then(() => {
          console.log('Published');
        });
      }

      //this.router.navigate(['/createro', finalopcode ]);
    }

  }


  async presentAlertCheckbox(val) {
    var email, text;
    const alert = await this.alertController.create({
      header: 'Do You Want?',
      inputs: [
        {
          name: 'Email',
          type: 'checkbox',
          label: 'Email',
          value: 'email',
        },

        {
          name: 'Text',
          type: 'checkbox',
          label: 'Text',
          value: 'text'
        },

        {
          name: 'None',
          type: 'checkbox',
          label: 'None',
          value: 'none'
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

            if (data.length == 0) {
              this.authservice.showToast("Please select option");
            }
            else {
              if (data.length == 2) {
                email = true;
                text = true;
              }
              else {
                if (data[0] == "email") {
                  email = true;
                  text = false;
                }
                else if (data[0] == "text") {
                  text = true;
                  email = false
                }
                else {
                  text = false;
                  email = false
                }
              }
              this.authservice.presentLoading();
              var appointmentdata = this.authservice.getappdata();
              var imgdata = this.authservice.getimagedata();
              console.log(appointmentdata);
              console.log(imgdata);
              let signdata = {
                "DealershipID": appointmentdata.DealershipId,
                "AppointmentID": appointmentdata.AppointmentId,
                "RONumber": "0",
                "VIN": appointmentdata.VIN,
                "CreatedBy": appointmentdata.CreatedBy,
                "ImageType": "1",
                "ImagePathList": this.signature.split(',').pop(),
                "DisplayOrderList": 0
              }
              this.CarImageList.push(signdata, imgdata);
              console.log(signdata);
              console.log(this.CarImageList);
              if (appointmentdata.AppointmentId == "") {
                this.authservice.InsertAppointment(appointmentdata.DealershipId, appointmentdata.CustomerId, appointmentdata.fname, appointmentdata.lname, appointmentdata.cname, appointmentdata.CreatedBy, appointmentdata.Status, appointmentdata.NotesList, appointmentdata.PromiseDate, appointmentdata.Promisetime, appointmentdata.AppointmentTime, appointmentdata.Transportation, appointmentdata.ColorId, appointmentdata.LicensePlate, appointmentdata.AverageMilesOrMonth, appointmentdata.Mileage, appointmentdata.VIN, appointmentdata.MakeId, appointmentdata.YearId, appointmentdata.ModelId, appointmentdata.TrimId, appointmentdata.OPCodeList, appointmentdata.LeftFrontwheel, appointmentdata.LeftFrontTire, appointmentdata.LeftRearwheel, appointmentdata.LeftRearTire, appointmentdata.RightFrontWheel, appointmentdata.RightFrontTire, appointmentdata.RightRearWheel, appointmentdata.RightRearTire, appointmentdata.WipersAndLightsList, appointmentdata.AppointmentId, appointmentdata.CreatedFor, appointmentdata.Vehicalemake, appointmentdata.Vehicalemodel, appointmentdata.CustomerEmail, appointmentdata.Vehicaleyear, appointmentdata.AdvisorName, email, text, appointmentdata.HomeNo, appointmentdata.WorkNo, appointmentdata.CellNo, appointmentdata.Zip, appointmentdata.Country, appointmentdata.State, appointmentdata.City, appointmentdata.Address1, appointmentdata.Address2, appointmentdata.Notes, this.CarImageList).subscribe(res => {
                  this.appres = res;
                  this.authservice.dismissLoading();
                  this.presentAlert1(this.appres.message, val);
                })

              }
              else {
                this.authservice.UpdateAppointment(appointmentdata.DealershipId, appointmentdata.CustomerId, appointmentdata.fname, appointmentdata.lname, appointmentdata.cname, appointmentdata.CreatedBy, appointmentdata.Status, appointmentdata.NotesList, appointmentdata.PromiseDate, appointmentdata.Promisetime, appointmentdata.AppointmentTime, appointmentdata.Transportation, appointmentdata.ColorId, appointmentdata.LicensePlate, appointmentdata.AverageMilesOrMonth, appointmentdata.Mileage, appointmentdata.VIN, appointmentdata.MakeId, appointmentdata.YearId, appointmentdata.ModelId, appointmentdata.TrimId, appointmentdata.OPCodeList, appointmentdata.LeftFrontwheel, appointmentdata.LeftFrontTire, appointmentdata.LeftRearwheel, appointmentdata.LeftRearTire, appointmentdata.RightFrontWheel, appointmentdata.RightFrontTire, appointmentdata.RightRearWheel, appointmentdata.RightRearTire, appointmentdata.WipersAndLightsList, appointmentdata.AppointmentId, appointmentdata.CreatedFor, appointmentdata.Vehicalemake, appointmentdata.Vehicalemodel, appointmentdata.CustomerEmail, appointmentdata.Vehicaleyear, appointmentdata.AdvisorName, email, text, appointmentdata.HomeNo, appointmentdata.WorkNo, appointmentdata.CellNo, appointmentdata.Zip, appointmentdata.Country, appointmentdata.State, appointmentdata.City, appointmentdata.Address1, appointmentdata.Address2, appointmentdata.Notes, this.CarImageList).subscribe(res => {
                  this.appres = res;
                  this.authservice.dismissLoading();
                  this.presentAlert1(this.appres.message, val);
                })
              }

            }
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlert1(msg, val) {
    const alert = await this.alertController.create({
      header: 'ION APPT',
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if (val == "no") {
              this.router.navigateByUrl('/home');
            }
            else if (val == "yes") {
              this.continuero();
            }

          }
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }

  ngAfterViewInit() {

    //  this.resizeSignaturePad();
  }



}
