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
  furl:any;
  username:any;
  videolist:any[]=[];
  appno:any;
  //ExtraImageList:any[]=[];
  public signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 700,
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
    this.storage.get('fullname').then((val => {
      this.username = val;
      this.username.replace(',','');
    }))
    this.storage.get('userid').then((val) => {
      this.userid = val;
      if (this.isedit == "true") {
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
    let object = {
      refresh : true
      }
     //this.presentAlertCheckbox2();
     this.router.navigate(['/home'],{ queryParams: object});
   // this.router.navigateByUrl('/home');
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
        let object = {
          refresh : true
          }
         //this.presentAlertCheckbox2();
         this.router.navigate(['/home'],{ queryParams: object});
       // this.router.navigateByUrl('/home');
      })
    }

    else {
      if (this.app == "true") {
        this.presentAlertCheckbox1();
      }
      else {
        this.presentAlertCheckbox2();
        
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
      var appointmentdata = this.authservice.getappdata();
      let imgdata = {
        "DealershipID": appointmentdata.DealershipId,
        "AppointmentID": appointmentdata.AppointmentId,
        "RONumber": "0",
        "VIN": appointmentdata.VIN,
        "CreatedBy": appointmentdata.CreatedBy,
        "ImageType": "0",
        "ImagePathList": "",
        "DisplayOrderList": ""
        // "type": "0",
        // "CompleteImage": this.takeimage,
        // "takeorder": this.takeorder
      }
      console.log(appointmentdata);
      console.log(imgdata);
      let signdata = {
        "DealershipID": appointmentdata.DealershipId,
        "AppointmentID": appointmentdata.AppointmentId,
        "RONumber": "0",
        "VIN": appointmentdata.VIN,
        "CreatedBy": appointmentdata.CreatedBy,
        "ImageType": "1",
        "ImagePathList": "",
        "DisplayOrderList": 0
      }
      var eximage = this.authservice.geimage();
      if(eximage){
        eximage = eximage.join();
      }
      else{
        eximage = "";
      }
      var vlist = this.authservice.getvlist();
      if(vlist){
       vlist = vlist.join();
      }
      else{
        vlist = "";
      }
      var vnlist = this.authservice.getvnlist();
      if(vnlist){
       vnlist = vnlist.join();
      }
      else{
        vnlist = "";
      }
      var eviimage = this.authservice.getvimgbaselist();
      if(eviimage){
        eviimage = eviimage.join();
      }
      else{
        eviimage = "";
      }
      var evimgname = this.authservice.getvimgnamelist();
      if(evimgname){
        evimgname = evimgname.join();
      }
      let vdata = {
        "VideoNameList": "",
        "VideoPathList": "",
        "VideoImageNameList":"",
        "VideoImagePathList":"",
        "VideoType": "0",
      }
      this.videolist.push(vdata);
      let eimage = {
        "DealershipID": appointmentdata.DealershipId,
        "AppointmentID": appointmentdata.AppointmentId,
        "RONumber": "0",
        "VIN": appointmentdata.VIN,
        "CreatedBy": appointmentdata.CreatedBy,
        "ImageType": "2",
        "ImagePathList": "",
        "DisplayOrderList": 0
      }
     
  
      this.CarImageList.push(signdata, imgdata,eimage);
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
        'carimage': [],
        'videodata':this.videolist,
        'appid':this.appno
       // 'eimage':this.ExtraImageList
      }
      this.authservice.setopcodero(data);
      if (this.platform.is("ipad") || this.platform.is("desktop")) {

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
                  email = false;
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
              var eximage = this.authservice.geimage();
              if(eximage){
                eximage = eximage.join();
              }
              else{
                eximage = "";
              }
              var vlist = this.authservice.getvlist();
              if(vlist){
               vlist = vlist.join();
              }
              else{
                vlist = "";
              }
              var vnlist = this.authservice.getvnlist();
              if(vnlist){
               vnlist = vnlist.join();
              }
              else{
                vnlist = "";
              }
              var eviimage = this.authservice.getvimgbaselist();
              if(eviimage){
                eviimage = eviimage.join();
              }
              else{
                eviimage = "";
              }
              var evimgname = this.authservice.getvimgnamelist();
              if(evimgname){
                evimgname = evimgname.join();
              }
              let vdata = {
                "VideoNameList": vnlist,
                "VideoPathList": vlist,
                "VideoImageNameList":evimgname,
                "VideoImagePathList":eviimage,
                "VideoType": "0",
              }
              this.videolist.push(vdata);
              let eimage = {
                "DealershipID": appointmentdata.DealershipId,
                "AppointmentID": appointmentdata.AppointmentId,
                "RONumber": "0",
                "VIN": appointmentdata.VIN,
                "CreatedBy": appointmentdata.CreatedBy,
                "ImageType": "2",
                "ImagePathList": eximage,
                "DisplayOrderList": 0
              }
             
          
              this.CarImageList.push(signdata, imgdata,eimage);
              //this.ExtraImageList.push(eimage);
              console.log(signdata);
              console.log(this.CarImageList);
              if (appointmentdata.AppointmentId == "") {
                this.authservice.InsertAppointment(appointmentdata.DealershipId, appointmentdata.CustomerId, appointmentdata.fname, appointmentdata.lname, appointmentdata.cname, appointmentdata.CreatedBy, appointmentdata.Status, appointmentdata.NotesList, appointmentdata.PromiseDate, appointmentdata.Promisetime, appointmentdata.AppointmentTime, appointmentdata.Transportation, appointmentdata.ColorId, appointmentdata.LicensePlate, appointmentdata.AverageMilesOrMonth, appointmentdata.Mileage, appointmentdata.VIN, appointmentdata.MakeId, appointmentdata.YearId, appointmentdata.ModelId, appointmentdata.TrimId, appointmentdata.OPCodeList, appointmentdata.LeftFrontwheel, appointmentdata.LeftFrontTire, appointmentdata.LeftRearwheel, appointmentdata.LeftRearTire, appointmentdata.RightFrontWheel, appointmentdata.RightFrontTire, appointmentdata.RightRearWheel, appointmentdata.RightRearTire, appointmentdata.WipersAndLightsList, appointmentdata.AppointmentId, appointmentdata.CreatedFor, appointmentdata.Vehicalemake, appointmentdata.Vehicalemodel, appointmentdata.CustomerEmail, appointmentdata.Vehicaleyear, appointmentdata.AdvisorName, email, text, appointmentdata.HomeNo, appointmentdata.WorkNo, appointmentdata.CellNo, appointmentdata.Zip, appointmentdata.Country, appointmentdata.State, appointmentdata.City, appointmentdata.Address1, appointmentdata.Address2, appointmentdata.Notes, this.CarImageList,this.videolist).subscribe(res => {
                  this.appres = res;
                  this.appno = this.appres.AppointmentId;
                  this.authservice.dismissLoading();
                  this.presentAlert1(this.appres.message, val);
                })

              }
              else {
                this.authservice.UpdateAppointment(appointmentdata.DealershipId, appointmentdata.CustomerId, appointmentdata.fname, appointmentdata.lname, appointmentdata.cname, appointmentdata.CreatedBy, appointmentdata.Status, appointmentdata.NotesList, appointmentdata.PromiseDate, appointmentdata.Promisetime, appointmentdata.AppointmentTime, appointmentdata.Transportation, appointmentdata.ColorId, appointmentdata.LicensePlate, appointmentdata.AverageMilesOrMonth, appointmentdata.Mileage, appointmentdata.VIN, appointmentdata.MakeId, appointmentdata.YearId, appointmentdata.ModelId, appointmentdata.TrimId, appointmentdata.OPCodeList, appointmentdata.LeftFrontwheel, appointmentdata.LeftFrontTire, appointmentdata.LeftRearwheel, appointmentdata.LeftRearTire, appointmentdata.RightFrontWheel, appointmentdata.RightFrontTire, appointmentdata.RightRearWheel, appointmentdata.RightRearTire, appointmentdata.WipersAndLightsList, appointmentdata.AppointmentId, appointmentdata.CreatedFor, appointmentdata.Vehicalemake, appointmentdata.Vehicalemodel, appointmentdata.CustomerEmail, appointmentdata.Vehicaleyear, appointmentdata.AdvisorName, email, text, appointmentdata.HomeNo, appointmentdata.WorkNo, appointmentdata.CellNo, appointmentdata.Zip, appointmentdata.Country, appointmentdata.State, appointmentdata.City, appointmentdata.Address1, appointmentdata.Address2, appointmentdata.Notes, this.CarImageList,this.videolist).subscribe(res => {
                  this.appres = res;
                  this.appno = this.appres.AppointmentId;
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

  async presentAlertCheckbox2() {
    var email, text;
    const alert = await this.alertController.create({
      header: 'Do you want to print RO?',
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
              //this.presentAlertCheckbox("yes");
            
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
        var eximage = this.authservice.geimage();
        if(eximage){
          eximage = eximage.join();
        }
        else{
          eximage = "";
        }
       
        let eimage = {
          "DealershipID": rocdata.dlrid,
          "AppointmentID": "0",
          "RONumber": "0",
          "VIN": rocdata.vin,
          "CreatedBy": rocdata.uid,
          "ImageType": "2",
          "ImagePathList": eximage,
          "DisplayOrderList": 0
        }
       
        var vlist = this.authservice.getvlist();
              if(vlist){
               vlist = vlist.join();
              }
              else{
                vlist = "";
              }
              var vnlist = this.authservice.getvnlist();
              if(vnlist){
               vnlist = vnlist.join();
              }
              else{
                vnlist = "";
              }
              var eviimage = this.authservice.getvimgbaselist();
              if(eviimage){
                eviimage = eviimage.join();
              }
              else{
                eviimage = "";
              }
              var evimgname = this.authservice.getvimgnamelist();
              if(evimgname){
                evimgname = evimgname.join();
              }
              let vdata = {
                "VideoNameList": vnlist,
                "VideoPathList": vlist,
                "VideoImageNameList":evimgname,
                "VideoImagePathList":eviimage,
                "VideoType": "0",
              }
              this.videolist.push(vdata);
            
              
              this.CarImageList.push(signdata, imgdata,eimage);
        //this.ExtraImageList.push(eimage);
        if (rocdata.rolist) {
          this.authservice.createtabro(rocdata.cid, rocdata.vin, rocdata.min, rocdata.sano, rocdata.tagno, rocdata.pono, rocdata.contact, rocdata.cname, rocdata.add1, rocdata.city, rocdata.state, rocdata.zip, rocdata.homeno, rocdata.workno, rocdata.email, rocdata.year, rocdata.make, rocdata.model, rocdata.license, rocdata.color, rocdata.uid, rocdata.mout, rocdata.wsdate, rocdata.wedate, rocdata.dlrid, rocdata.rnotes, rocdata.rolist, this.CarImageList, rocdata.rotype, rocdata.rono, rocdata.prodate,this.videolist).subscribe(res => {
            console.log(res);
            this.authservice.dismissLoading();
            this.rores = res;
            // this.authservice.showToast(this.rores.Message);
            this.presentAlert3(this.rores.Message);

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
            this.presentAlert3(this.rores.Message);

          }, err => {
            this.authservice.dismissLoading();
          })
        }
            }
          
            else if (data == "no") {
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
        var eximage = this.authservice.geimage();
        if(eximage){
          eximage = eximage.join();
        }
        else{
          eximage = "";
        }
       
        let eimage = {
          "DealershipID": rocdata.dlrid,
          "AppointmentID": "0",
          "RONumber": "0",
          "VIN": rocdata.vin,
          "CreatedBy": rocdata.uid,
          "ImageType": "2",
          "ImagePathList": eximage,
          "DisplayOrderList": 0
        }
        //this.CarImageList.push(signdata, imgdata,eimage);
        var vlist = this.authservice.getvlist();
              if(vlist){
               vlist = vlist.join();
              }
              else{
                vlist = "";
              }
              var vnlist = this.authservice.getvnlist();
              if(vnlist){
               vnlist = vnlist.join();
              }
              else{
                vnlist = "";
              }
              var eviimage = this.authservice.getvimgbaselist();
              if(eviimage){
                eviimage = eviimage.join();
              }
              else{
                eviimage = "";
              }
              var evimgname = this.authservice.getvimgnamelist();
              if(evimgname){
                evimgname = evimgname.join();
              }
              let vdata = {
                "VideoNameList": vnlist,
                "VideoPathList": vlist,
                "VideoImageNameList":evimgname,
                "VideoImagePathList":eviimage,
                "VideoType": "0",
              }
              this.videolist.push(vdata);
             
       
        this.CarImageList.push(signdata, imgdata,eimage);
        //this.ExtraImageList.push(eimage);
        if (rocdata.rolist) {
          this.authservice.createtabro(rocdata.cid, rocdata.vin, rocdata.min, rocdata.sano, rocdata.tagno, rocdata.pono, rocdata.contact, rocdata.cname, rocdata.add1, rocdata.city, rocdata.state, rocdata.zip, rocdata.homeno, rocdata.workno, rocdata.email, rocdata.year, rocdata.make, rocdata.model, rocdata.license, rocdata.color, rocdata.uid, rocdata.mout, rocdata.wsdate, rocdata.wedate, rocdata.dlrid, rocdata.rnotes, rocdata.rolist, this.CarImageList, rocdata.rotype, rocdata.rono, rocdata.prodate,this.videolist).subscribe(res => {
            console.log(res);
            this.authservice.dismissLoading();
            this.rores = res;
            // this.authservice.showToast(this.rores.Message);
            this.presentAlert4(this.rores.Message);

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
            this.presentAlert4(this.rores.Message);

          }, err => {
            this.authservice.dismissLoading();
          })
        }
            //  this.router.navigateByUrl('/home');
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
              let object = {
                refresh : true
                }
               //this.presentAlertCheckbox2();
               this.authservice.setvideodata("");
               this.authservice.setvideolist("");
               this.authservice.setvimgbaselist("");
               this.authservice.setvimglist("");
               this.authservice.setvlist("");
               this.authservice.setvimgbaselist("");
               this.authservice.setvimgnamelist("");
               this.authservice.setvnlist("");
               this.authservice.setimagedata("");
               this.authservice.seimage("");
               this.router.navigate(['/home'],{ queryParams: object});
              
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

  async presentAlert3(msg) {
    const alert = await this.alertController.create({
      header: 'ION APPT',
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
             this.authservice.printro(this.delarid,this.rores.RONumber,this.username).subscribe(res =>{
                console.log(res);
                this.furl = res;
                if (this.furl.URL) {
                  let object = {
                    fileurl: this.furl.URL,
                    delaerid:this.delarid,
                    rono:this.rores.RONumber,
                    username: this.username,
                    uid:this.userid,
                    isback : false
                  }
                   
                this.router.navigate(['/pdfview'], { queryParams: object });
                }
              });
          }
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }

  async presentAlert4(msg) {
    const alert = await this.alertController.create({
      header: 'ION APPT',
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            let object = {
              refresh : true
              }
             //this.presentAlertCheckbox2();
             this.router.navigate(['/home'],{ queryParams: object});
            //this.router.navigateByUrl('/home');

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
