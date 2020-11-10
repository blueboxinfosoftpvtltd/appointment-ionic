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
import * as aws from 'aws-sdk';
import * as moment from 'moment';
import { Buffer } from 'buffer';
import { AwsService } from '../services/aws.service';

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
  empdealerid: any;
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
  videolist2:any[]=[];
  
  appno:any;
  dealername: string;

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


  isEnabled: any;
  dealer: any;
  dealers: any;
  dealerid: any;
 
  public showedit = false;
  
  constructor(private awsService: AwsService, private router: Router, public activatedRoute: ActivatedRoute, private authservice: AuthService, private storage: Storage, private loc: Location, private alertController: AlertController, public platform: Platform) {

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
    console.log(this.ronumber);
    if (this.AppointmentId == undefined) {
      this.AppointmentId = "0";
    }
    if(this.isedit == "true"){
      this.editpresentAlertCheckbox1();
      this.showedit = true;
     
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
    /*this.storage.get('Employee_id').then((val) => {
      console.log(val);
      console.log(this.delarid);

      this.empdealerid = val.filter((item) => {
        console.log(item);
        return item.DealershipId == this.delarid;

      });
      console.log(this.empdealerid);
      if(this.empdealerid.length > 0)
      {
        this.userid = this.empdealerid[0].PKEmployeeID;
      }
      
      console.log(this.userid);
      if (this.isedit == "true") {
      }
     
    })*/

   this.storage.get('userid').then((val) => {
      this.userid = val;
      if (this.isedit == "true") {
      }
      // console.log(this.dealerid);
    })
    
    this.storage.get('dealername').then(val=>{
      this.dealername = val;
    })

    //this.videolist = this.authservice.getvideolist();
    var vlist = this.authservice.getvlist();
    var vidlist = this.authservice.getvidlist();
    var vnlist = this.authservice.getvnlist();
    var eviimage = this.authservice.getvimgbaselist();
    var evimgname = this.authservice.getvimgnamelist();

    console.log('Video List :', JSON.stringify(vlist));
  /*  console.log('Video List :', JSON.stringify(vlist));
    console.log('Video Id : ', JSON.stringify(vidlist));
    console.log('Video Name List  :', JSON.stringify(vnlist));
    console.log('Video Image : ', JSON.stringify(eviimage));
    console.log('Video Image Name :', JSON.stringify(evimgname));*/

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

    /*if (this.signature != '' && this.signature == undefined) {
      //  this.signature = this.signaturePad.toDataURL();
      this.signature = '';
      this.authservice.showToast('You have to Signature first.');
    }*/
 
    var data1 = { "image1": this.signature };

    let object = {
      ImagePath: this.signature,
      displayorder: "0"
    }
    this.finalsignature.push(this.signature);
    console.log(this.signature);

    if (this.Page) {
      this.authservice.presentLoading();
      this.authservice.CarImageInsert(this.delarid, this.AppointmentId, this.VIN, this.userid, "1", this.signature.split(',').pop(), "0", this.ronumber,"","","","").subscribe(res => {
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
      } else {
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
      var eximage = this.authservice.getCarExtraImages();
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
      var vidlist = this.authservice.getvidlist();
      if(vidlist){
       vidlist = vidlist.join();
      }
      else{
        vidlist = "";
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
        "VideoMasterIDList": "",
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
        'videodata':[],
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

            this.saveAppointmentData(data, email, text, val);

          }
        }
      ]
    });
    await alert.present();
  }

  async saveAppointmentData(data, email, text, val) {
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
      var carImageIndexes = this.authservice.getSelectedCarImageIndex();
      const carImageList = imgdata.ImagePathList;
      // to store uploaded image path
      let uploadedCarImagespath = await this.uploadImages(appointmentdata, (carImageList != null && carImageList != undefined) ? carImageList : [])
      .then(data => {
        return data;
      });
      let carImages = [{
        "DealershipID": appointmentdata.DealershipId,
        "AppointmentID": appointmentdata.AppointmentId,
        "RONumber": "0",
        "VIN": appointmentdata.VIN,
        "CreatedBy": appointmentdata.CreatedBy,
        "ImageType": "0",
        "ImagePathList": uploadedCarImagespath.join(","),
        "DisplayOrderList": carImageIndexes.join(",")
      }];

      // upload extra images
      var carExtraImagesData = this.authservice.getCarExtraImages();
      const uploadedCarExtraImagesPath = await this.uploadImages(appointmentdata, carExtraImagesData)
      .then(data => {
        return data;
      });
      // creare indexes for extra images
      let carExtraImagesIndexes = [];
      for (let index = 0; index < uploadedCarExtraImagesPath.length; index++) {
        carExtraImagesIndexes.push("0");
      }
      // prepare data for extra images
      const carExtraImages = [{
        "DealershipID": appointmentdata.DealershipId,
        "AppointmentID": appointmentdata.AppointmentId,
        "RONumber": "0",
        "VIN": appointmentdata.VIN,
        "CreatedBy": appointmentdata.CreatedBy,
        "ImageType": "2",
        "ImagePathList": uploadedCarExtraImagesPath.join(","),
        "DisplayOrderList": carExtraImagesIndexes.join(",")
      }];

      // upload signature
      console.log("uploading sign");
      
      var signatureImagesPath = await this.uploadImages(appointmentdata, this.finalsignature)
      .then((data => {
        return data;
      }));
      // prepare data for signature image
      const signatureImages = [{
        "DealershipID": appointmentdata.DealershipId,
        "AppointmentID": appointmentdata.AppointmentId,
        "RONumber": "0",
        "VIN": appointmentdata.VIN,
        "CreatedBy": appointmentdata.CreatedBy,
        "ImageType": "1",
        "ImagePathList": signatureImagesPath.join(","),
        "DisplayOrderList": "1"
      }]

      var vlist = this.authservice.getvlist();
      console.log("Tejash Video List : " + vlist );
      if(vlist && vlist.length > 0) {
        vlist = vlist.join(",");
      } else {
        vlist = "";
      }

      var vidlist = this.authservice.getvidlist();
      console.log("Tejash Video Id List : " + vidlist );
      if(vidlist && vidlist.length > 0 ) {
        vidlist = vidlist.join(",");
      } else {
        vidlist = "";
      }

      var vnlist = this.authservice.getvnlist();
      console.log("Tejash Video Name List : " + vnlist );
      if(vnlist && vnlist.length > 0 ) {
        vnlist = vnlist.join(",");
      } else {
        vnlist = "";
      }

      var eviimage = this.authservice.getvimglist();
      console.log("Video Image : " + eviimage );
      if(eviimage && eviimage.length > 0 ) {
        eviimage = eviimage.join(",");
      } else {
        eviimage = "";
      }

      var evimgname = this.authservice.getvimgnamelist();
      console.log("Video Name : " + evimgname );
      if(evimgname && evimgname.length > 0 ) {
        evimgname = evimgname.join(",");
      }
      else {
        evimgname = "";
      }

      const vdata = {
        "VideoMasterIDList": vidlist,
        "VideoNameList": vnlist,
        "VideoPathList": vlist,
        "VideoImageNameList":evimgname,
        "VideoImagePathList":eviimage,
        "VideoType": "0",
      }

      this.videolist.push(vdata);
      console.log('Add Detail : ', JSON.stringify(this.videolist));

      if (appointmentdata.AppointmentId == "") {
        this.authservice.InsertAppointment(
          appointmentdata.DealershipId,
          appointmentdata.CustomerId, 
          appointmentdata.fname, appointmentdata.lname, appointmentdata.cname, 
          appointmentdata.CreatedBy, appointmentdata.Status, appointmentdata.NotesList, 
          appointmentdata.PromiseDate, appointmentdata.Promisetime, 
          appointmentdata.AppointmentTime, appointmentdata.Transportation, 
          appointmentdata.ColorId, appointmentdata.LicensePlate, 
          appointmentdata.AverageMilesOrMonth, appointmentdata.Mileage, 
          appointmentdata.VIN, appointmentdata.MakeId, appointmentdata.YearId, 
          appointmentdata.ModelId, appointmentdata.TrimId, appointmentdata.OPCodeList, 
          appointmentdata.LeftFrontwheel, appointmentdata.LeftFrontTire, 
          appointmentdata.LeftRearwheel, appointmentdata.LeftRearTire, 
          appointmentdata.RightFrontWheel, appointmentdata.RightFrontTire, 
          appointmentdata.RightRearWheel, appointmentdata.RightRearTire, 
          appointmentdata.WipersAndLightsList, appointmentdata.AppointmentId, 
          appointmentdata.CreatedFor, appointmentdata.Vehicalemake, 
          appointmentdata.Vehicalemodel, appointmentdata.CustomerEmail, 
          appointmentdata.Vehicaleyear, appointmentdata.AdvisorName, email, text, 
          appointmentdata.HomeNo, appointmentdata.WorkNo, appointmentdata.CellNo, 
          appointmentdata.Zip, appointmentdata.Country, appointmentdata.State,
          appointmentdata.City, appointmentdata.Address1, appointmentdata.Address2, 
          appointmentdata.Notes, carImages, carExtraImages, this.videolist, signatureImages)
          .subscribe(res => {
            this.appres = res;
            this.appno = this.appres.AppointmentId;
            console.log("appno: ", this.appno);
            this.authservice.dismissLoading();
            this.presentAlert1(this.appres.message, val);
        }, (error) => {
          this.authservice.dismissLoading();
          console.log(error);
          
        });

      }
      else {
        this.authservice.UpdateAppointment(appointmentdata.DealershipId, 
          appointmentdata.CustomerId, appointmentdata.fname, appointmentdata.lname,
          appointmentdata.cname, appointmentdata.CreatedBy, appointmentdata.Status, 
          appointmentdata.NotesList, appointmentdata.PromiseDate, appointmentdata.Promisetime, 
          appointmentdata.AppointmentTime, appointmentdata.Transportation, 
          appointmentdata.ColorId, appointmentdata.LicensePlate, 
          appointmentdata.AverageMilesOrMonth, appointmentdata.Mileage, appointmentdata.VIN, 
          appointmentdata.MakeId, appointmentdata.YearId, appointmentdata.ModelId, 
          appointmentdata.TrimId, appointmentdata.OPCodeList, appointmentdata.LeftFrontwheel, 
          appointmentdata.LeftFrontTire, appointmentdata.LeftRearwheel, 
          appointmentdata.LeftRearTire, appointmentdata.RightFrontWheel, 
          appointmentdata.RightFrontTire, appointmentdata.RightRearWheel, 
          appointmentdata.RightRearTire, appointmentdata.WipersAndLightsList, 
          appointmentdata.AppointmentId, appointmentdata.CreatedFor, appointmentdata.Vehicalemake, 
          appointmentdata.Vehicalemodel, appointmentdata.CustomerEmail, appointmentdata.Vehicaleyear, 
          appointmentdata.AdvisorName, email, text, appointmentdata.HomeNo, appointmentdata.WorkNo, 
          appointmentdata.CellNo, appointmentdata.Zip, appointmentdata.Country, appointmentdata.State, 
          appointmentdata.City, appointmentdata.Address1, appointmentdata.Address2, 
          appointmentdata.Notes, carImages, carExtraImages, this.videolist, signatureImages).subscribe(res => {
            this.appres = res;
            this.appno = this.appres.AppointmentId;
            console.log("appno: ", this.appno);
            
            this.authservice.dismissLoading();
            this.presentAlert1(this.appres.message, val);
        })
      }

    }
  }

  async uploadSingleImage(appointmentdata : any, image: any, imageType: string) {
    let vin = appointmentdata.VIN;
    let app = null;
    if (appointmentdata.AppointmentId != "0") {
      app = "Appointment";
    } else {
      app = "RO";
    }
    let currentTime = moment();
    console.log('now', currentTime);
    
    let todayDate = currentTime.format('YMMDD');
    console.log('todayDate', todayDate);

    let randomNum = Math.round(Math.random() * 100000);
    console.log('random number', randomNum);

    let imageName = vin + "_" + currentTime.format('YMMDDHHmmss') + "_" + randomNum +"."+imageType;
    console.log(imageName);
    let key = app + "/" + this.dealername + "/Images/" + vin + "/" + todayDate + "/" + imageName;
    
    let path = await this.awsService.uploadVideo(key, image).then((data: any) => {
      console.log('upload_url', data.Location);
      return data.Location;
    });
    return path;
  }

  async uploadImages(appointmentdata: any, images: any[]) {
    let result = [];
    if (images) {
      for (let index = 0; index < images.length; index++) {
        const image = images[index];
        let base64data = "";
        let extension = "";
        if (image.indexOf("png") !== -1) {
          extension = "png";
          base64data = image.replace("data:image/png;base64,", "");
        } else {
          extension = "jpg";
          base64data = image.replace("data:image/jpeg;base64,", "");
        }
        

        await this.uploadSingleImage(appointmentdata, base64data, extension).then((path: any) => {
          result.push(path);
        }); 
      }
    }
    console.log('file upload done');
    return result;
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
        console.log(rocdata);
        var imgdata = this.authservice.getimagedata();
        console.log(imgdata);

        /*  Add For Temp */
          let carImages1 = [{
            "DealershipID": rocdata.dlrid,
            "AppointmentID": "0",
            "RONumber": "0",
            "VIN": rocdata.VIN,
            "CreatedBy": rocdata.uid,
            "ImageType": "0",
            "ImagePathList": "",
            "DisplayOrderList": 0
          }];
      /*  End For Temp */
        
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
        var eximage = this.authservice.getCarExtraImages();
        if(eximage && eximage.length > 0  ){
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
        console.log("Print Video List" + vlist );
              if(vlist && vlist.length > 0 ){
               vlist = vlist.join();
              }
              else{
                vlist = "";
              }
              var vidlist = this.authservice.getvidlist();
              console.log("Print Video Id List" + vidlist );
              if(vidlist && vidlist.length > 0 ){
               vidlist = vidlist.join();
              }
              else{
                vidlist = "";
              }

              var vnlist = this.authservice.getvnlist();
              console.log("Print Video Name List" + vnlist );
              if(vnlist && vnlist.length > 0 ){
               vnlist = vnlist.join();
              }
              else{
                vnlist = "";
              }
              var eviimage = this.authservice.getvimgbaselist();
              console.log("Print Video Image Base List" + eviimage );
              if(eviimage && eviimage.length > 0 ){
                eviimage = eviimage.join();
              }
              else{
                eviimage = "";
              }
              var evimgname = this.authservice.getvimgnamelist();
              console.log("Print Video Image Name List" + evimgname );
              if(evimgname && evimgname.length > 0 ){
                evimgname = evimgname.join();
              }
              else{
                evimgname = "";
              }
              let vdata = {
                "VideoMasterIDList": vidlist,
                "VideoNameList": vnlist,
                "VideoPathList": vlist,
                "VideoImageNameList":evimgname,
                "VideoImagePathList":eviimage,
                "VideoType": "0",
              }
              this.videolist.push(vdata);
              console.log('Print Video Detail', JSON.stringify(this.videolist));
              
            //  this.CarImageList.push(signdata, imgdata,eimage);
              this.CarImageList.push(signdata, carImages1,eimage);
            
              
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

        /*  Add For Temp */
        let carImages1 = [{
          "DealershipID": rocdata.dlrid,
          "AppointmentID": "0",
          "RONumber": "0",
          "VIN": rocdata.VIN,
          "CreatedBy": rocdata.uid,
          "ImageType": "0",
          "ImagePathList": "",
          "DisplayOrderList": 0
        }];
    /*  End For Temp */

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
        var eximage = this.authservice.getCarExtraImages();
        if(eximage && eximage.length > 0  ){
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
        console.log("vlist" + vlist );
              if(vlist && vlist.length > 0 ){
               vlist = vlist.join();
              }
              else{
                vlist = "";
              }
              var vidlist = this.authservice.getvidlist();
              console.log("vidlist" + vidlist );
              if(vidlist && vidlist.length > 0  ){
               vidlist = vidlist.join();
              }
              else{
                vidlist = "";
              }

              var vnlist = this.authservice.getvnlist();
              console.log("vnlist" + vnlist );
              if(vnlist && vnlist.length > 0  ){
               vnlist = vnlist.join();
              }
              else{
                vnlist = "";
              }
              var eviimage = this.authservice.getvimgbaselist();
              console.log("eviimage" + eviimage );
              if(eviimage && eviimage.length > 0  ){
                eviimage = eviimage.join();
              }
              else{
                eviimage = "";
              }
              var evimgname = this.authservice.getvimgnamelist();
              console.log("evimgname" + evimgname );
              if(evimgname && evimgname.length > 0  ){
                evimgname = evimgname.join();
              }
              else{
                evimgname = "";
              }
              let vdata = {
                "VideoMasterIDList": vidlist,
                "VideoNameList": vnlist,
                "VideoPathList": vlist,
                "VideoImageNameList":evimgname,
                "VideoImagePathList":eviimage,
                "VideoType": "0",
              }
            
              this.videolist.push(vdata);
              console.log('Video Detail', JSON.stringify(this.videolist));
       
        //this.CarImageList.push(signdata, imgdata,eimage);
        this.CarImageList.push(signdata, carImages1,eimage);
            
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
               this.authservice.setvidlist("");
               this.authservice.setvnlist("");
               this.authservice.setimagedata("");
               this.authservice.setCarExtraImages("");
               this.authservice.setSelectedCarImages([], []);
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
      message: 'Record saved successfully...!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log(this.ronumber);
            console.log(this.delarid);
            console.log(this.rores.RONumber);
            console.log(this.username);
             this.authservice.printro(this.delarid,"WorkOrderCopy",this.ronumber,this.username).subscribe(res =>{
                console.log(res);
                this.furl = res;
                if (this.furl.URL) {
                  let object = {
                    fileurl: this.furl.URL,
                    delaerid:this.delarid,
                   // rono:this.rores.RONumber,
                    rono:this.ronumber,
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


  async editpresentAlertCheckbox1() {
    var email, text;
    const alert = await this.alertController.create({
      header: 'Do you want to send approval link to customer ?',
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
            this.signaturePad.off();
            if (this.isedit == "true") {
              this.router.navigate(['/takeimage'], { queryParams: { AppointmentId : this.AppointmentId,backpage:"true",Isedit:true } });
            }
          }
          
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data)
            console.log('Confirm Ok');
            this.signaturePad.off();
            if(data == '' || data == null || data == undefined){
            
              this.editpresentAlertCheckbox1();
              this.authservice.alertshow("Please select One");
            }
            if (data == "yes") {
              this.editpresentAlertCheckbox("yes");

              //this.continuero();
            }
            else if (data == "no") {
              //this.editpresentAlert4("No Update Data");
              this.editpresentAlertCheckboxno("no");
            }
           

          }
        }
      ]
    });

    await alert.present();

  }


  async editpresentAlertCheckbox(val) {
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

            this.EditAppointmentData(data, email, text, val);

          }
        }
      ]
    });
    await alert.present();
  }
  async EditAppointmentData(data, email, text, val) {
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
      var carImageIndexes = this.authservice.getSelectedCarImageIndex();
      const carImageList = imgdata.ImagePathList;
      // to store uploaded image path
      let uploadedCarImagespath = await this.uploadImages(appointmentdata, (carImageList != null && carImageList != undefined) ? carImageList : [])
      .then(data => {
        return data;
      });
      let carImages = [{
        "DealershipID": appointmentdata.DealershipId,
        "AppointmentID": appointmentdata.AppointmentId,
        "RONumber": "0",
        "VIN": appointmentdata.VIN,
        "CreatedBy": appointmentdata.CreatedBy,
        "ImageType": "0",
        "ImagePathList": uploadedCarImagespath.join(","),
        "DisplayOrderList": carImageIndexes.join(",")
      }];

      // upload extra images
      var carExtraImagesData = this.authservice.getCarExtraImages();
      const uploadedCarExtraImagesPath = await this.uploadImages(appointmentdata, carExtraImagesData)
      .then(data => {
        return data;
      });
      // creare indexes for extra images
      let carExtraImagesIndexes = [];
      for (let index = 0; index < uploadedCarExtraImagesPath.length; index++) {
        carExtraImagesIndexes.push("0");
      }
      // prepare data for extra images
      const carExtraImages = [{
        "DealershipID": appointmentdata.DealershipId,
        "AppointmentID": appointmentdata.AppointmentId,
        "RONumber": "0",
        "VIN": appointmentdata.VIN,
        "CreatedBy": appointmentdata.CreatedBy,
        "ImageType": "2",
        "ImagePathList": uploadedCarExtraImagesPath.join(","),
        "DisplayOrderList": carExtraImagesIndexes.join(",")
      }];

      // upload signature
      console.log("uploading sign");
      
      var signatureImagesPath = await this.uploadImages(appointmentdata, this.finalsignature)
      .then((data => {
        return data;
      }));
      // prepare data for signature image
      const signatureImages = [{
        "DealershipID": appointmentdata.DealershipId,
        "AppointmentID": appointmentdata.AppointmentId,
        "RONumber": "0",
        "VIN": appointmentdata.VIN,
        "CreatedBy": appointmentdata.CreatedBy,
        "ImageType": "1",
        "ImagePathList": signatureImagesPath.join(","),
        "DisplayOrderList": "1"
      }]

      var vlist = this.authservice.getvlist();
      console.log("Tejash Video List : " + vlist );
      if(vlist && vlist.length > 0) {
        vlist = vlist.join(",");
      } else {
        vlist = "";
      }


      var vidlist = this.authservice.getvidlist();
      console.log("Tejash Video Id List : " + vidlist );
      if(vidlist && vidlist.length > 0 ) {
        vidlist = vidlist.join(",");
      } else {
        vidlist = "";
      }

      var vnlist = this.authservice.getvnlist();
      console.log("Tejash Video Name List : " + vnlist );
      if(vnlist && vnlist.length > 0 ) {
        vnlist = vnlist.join(",");
      } else {
        vnlist = "";
      }

      var eviimage = this.authservice.getvimglist();
      console.log("Video Image : " + eviimage );
      if(eviimage && eviimage.length > 0 ) {
        eviimage = eviimage.join(",");
      } else {
        eviimage = "";
      }

      var evimgname = this.authservice.getvimgnamelist();
      console.log("Video Name : " + evimgname );
      if(evimgname && evimgname.length > 0) {
        evimgname = evimgname.join(",");
      }
      else {
        evimgname = "";
      }

      const vdata = {
        "VideoMasterIDList": vidlist,
        "VideoNameList": vnlist,
        "VideoPathList": vlist,
        "VideoImageNameList":evimgname,
        "VideoImagePathList":eviimage,
        "VideoType": "0",
      }

      this.videolist.push(vdata);
      console.log('Video Yes Time Detail : ', JSON.stringify(this.videolist));

      if (appointmentdata.AppointmentId == "") {
        this.authservice.InsertAppointment(
          appointmentdata.DealershipId,
          appointmentdata.CustomerId, 
          appointmentdata.fname, appointmentdata.lname, appointmentdata.cname, 
          appointmentdata.CreatedBy, appointmentdata.Status, appointmentdata.NotesList, 
          appointmentdata.PromiseDate, appointmentdata.Promisetime, 
          appointmentdata.AppointmentTime, appointmentdata.Transportation, 
          appointmentdata.ColorId, appointmentdata.LicensePlate, 
          appointmentdata.AverageMilesOrMonth, appointmentdata.Mileage, 
          appointmentdata.VIN, appointmentdata.MakeId, appointmentdata.YearId, 
          appointmentdata.ModelId, appointmentdata.TrimId, appointmentdata.OPCodeList, 
          appointmentdata.LeftFrontwheel, appointmentdata.LeftFrontTire, 
          appointmentdata.LeftRearwheel, appointmentdata.LeftRearTire, 
          appointmentdata.RightFrontWheel, appointmentdata.RightFrontTire, 
          appointmentdata.RightRearWheel, appointmentdata.RightRearTire, 
          appointmentdata.WipersAndLightsList, appointmentdata.AppointmentId, 
          appointmentdata.CreatedFor, appointmentdata.Vehicalemake, 
          appointmentdata.Vehicalemodel, appointmentdata.CustomerEmail, 
          appointmentdata.Vehicaleyear, appointmentdata.AdvisorName, email, text, 
          appointmentdata.HomeNo, appointmentdata.WorkNo, appointmentdata.CellNo, 
          appointmentdata.Zip, appointmentdata.Country, appointmentdata.State,
          appointmentdata.City, appointmentdata.Address1, appointmentdata.Address2, 
          appointmentdata.Notes, carImages, carExtraImages, this.videolist, signatureImages)
          .subscribe(res => {
            this.appres = res;
            this.appno = this.appres.AppointmentId;
            console.log("appno: ", this.appno);
            this.authservice.dismissLoading();
            this.editpresentAlert1(this.appres.message, val);
        }, (error) => {
          this.authservice.dismissLoading();
          console.log(error);
          
        });

      }
      else {
        this.authservice.UpdateAppointment(appointmentdata.DealershipId, 
          appointmentdata.CustomerId, appointmentdata.fname, appointmentdata.lname,
          appointmentdata.cname, appointmentdata.CreatedBy, appointmentdata.Status, 
          appointmentdata.NotesList, appointmentdata.PromiseDate, appointmentdata.Promisetime, 
          appointmentdata.AppointmentTime, appointmentdata.Transportation, 
          appointmentdata.ColorId, appointmentdata.LicensePlate, 
          appointmentdata.AverageMilesOrMonth, appointmentdata.Mileage, appointmentdata.VIN, 
          appointmentdata.MakeId, appointmentdata.YearId, appointmentdata.ModelId, 
          appointmentdata.TrimId, appointmentdata.OPCodeList, appointmentdata.LeftFrontwheel, 
          appointmentdata.LeftFrontTire, appointmentdata.LeftRearwheel, 
          appointmentdata.LeftRearTire, appointmentdata.RightFrontWheel, 
          appointmentdata.RightFrontTire, appointmentdata.RightRearWheel, 
          appointmentdata.RightRearTire, appointmentdata.WipersAndLightsList, 
          appointmentdata.AppointmentId, appointmentdata.CreatedFor, appointmentdata.Vehicalemake, 
          appointmentdata.Vehicalemodel, appointmentdata.CustomerEmail, appointmentdata.Vehicaleyear, 
          appointmentdata.AdvisorName, email, text, appointmentdata.HomeNo, appointmentdata.WorkNo, 
          appointmentdata.CellNo, appointmentdata.Zip, appointmentdata.Country, appointmentdata.State, 
          appointmentdata.City, appointmentdata.Address1, appointmentdata.Address2, 
          appointmentdata.Notes, carImages, carExtraImages, this.videolist, signatureImages).subscribe(res => {
            this.appres = res;
            this.appno = this.appres.AppointmentId;
            console.log("appno: ", this.appno);
            
            this.authservice.dismissLoading();
            this.editpresentAlert1(this.appres.message, val);
        })
      }

    }
  }



  async editpresentAlertCheckboxno(val) {
    var email, text;
    this.authservice.presentLoading();
    var appointmentdata = this.authservice.getappdata();
      
    var imgdata = this.authservice.getimagedata();
    var carImageIndexes = this.authservice.getSelectedCarImageIndex();
    const carImageList = imgdata.ImagePathList;
    // to store uploaded image path
    let uploadedCarImagespath = await this.uploadImages(appointmentdata, (carImageList != null && carImageList != undefined) ? carImageList : [])
    .then(data => {
      return data;
    });
    let carImages = [{
      "DealershipID": appointmentdata.DealershipId,
      "AppointmentID": appointmentdata.AppointmentId,
      "RONumber": "0",
      "VIN": appointmentdata.VIN,
      "CreatedBy": appointmentdata.CreatedBy,
      "ImageType": "0",
      "ImagePathList": uploadedCarImagespath.join(","),
      "DisplayOrderList": carImageIndexes.join(",")
    }];

    // upload extra images
    var carExtraImagesData = this.authservice.getCarExtraImages();
    const uploadedCarExtraImagesPath = await this.uploadImages(appointmentdata, carExtraImagesData)
    .then(data => {
      return data;
    });
    // creare indexes for extra images
    let carExtraImagesIndexes = [];
    for (let index = 0; index < uploadedCarExtraImagesPath.length; index++) {
      carExtraImagesIndexes.push("0");
    }
    // prepare data for extra images
    const carExtraImages = [{
      "DealershipID": appointmentdata.DealershipId,
      "AppointmentID": appointmentdata.AppointmentId,
      "RONumber": "0",
      "VIN": appointmentdata.VIN,
      "CreatedBy": appointmentdata.CreatedBy,
      "ImageType": "2",
      "ImagePathList": uploadedCarExtraImagesPath.join(","),
      "DisplayOrderList": carExtraImagesIndexes.join(",")
    }];

    // upload signature
    console.log("uploading sign");
    
    var signatureImagesPath = await this.uploadImages(appointmentdata, this.finalsignature)
    .then((data => {
      return data;
    }));
    // prepare data for signature image
    const signatureImages = [{
      "DealershipID": appointmentdata.DealershipId,
      "AppointmentID": appointmentdata.AppointmentId,
      "RONumber": "0",
      "VIN": appointmentdata.VIN,
      "CreatedBy": appointmentdata.CreatedBy,
      "ImageType": "1",
      "ImagePathList": signatureImagesPath.join(","),
      "DisplayOrderList": "1"
    }]
/*  Video Data  Start */
    var vlist = this.authservice.getvlist();
    console.log("Edti Time Video List : " + vlist );
    if(vlist && vlist.length > 0 ) {
      vlist = vlist.join(",");
    } else {
      vlist = "";
    }

    var vidlist = this.authservice.getvidlist();
    console.log("Edti Time Video Id List : " + vidlist );
    if(vidlist && vidlist.length > 0 ) {
      vidlist = vidlist.join(",");
    } else {
      vidlist = "";
    }

    var vnlist = this.authservice.getvnlist();
    console.log("Edti Time Video Name List : " + vnlist );
    if(vnlist && vnlist.length > 0 ) {
      vnlist = vnlist.join(",");
    } else {
      vnlist = "";
    }

    var eviimage = this.authservice.getvimglist();
    console.log("Edti Time Video Image : " + eviimage );
    if(eviimage && eviimage.length > 0 ) {
      eviimage = eviimage.join(",");
    } else {
      eviimage = "";
    }

    var evimgname = this.authservice.getvimgnamelist();
    console.log("Edti Time Video Name : " + evimgname );
    if(evimgname && evimgname.length > 0) {
      evimgname = evimgname.join(",");
    }
    else {
      evimgname = "";
    }

    const vdata = {
      "VideoMasterIDList": vidlist,
      "VideoNameList": vnlist,
      "VideoPathList": vlist,
      "VideoImageNameList":evimgname,
      "VideoImagePathList":eviimage,
      "VideoType": "0",
    }

    this.videolist.push(vdata);
    console.log('Video No Time Detail : ', JSON.stringify(this.videolist));
/*  Video Data  End */

    if (appointmentdata.AppointmentId == "") {
      this.authservice.InsertAppointment(
        appointmentdata.DealershipId,
        appointmentdata.CustomerId, 
        appointmentdata.fname, appointmentdata.lname, appointmentdata.cname, 
        appointmentdata.CreatedBy, appointmentdata.Status, appointmentdata.NotesList, 
        appointmentdata.PromiseDate, appointmentdata.Promisetime, 
        appointmentdata.AppointmentTime, appointmentdata.Transportation, 
        appointmentdata.ColorId, appointmentdata.LicensePlate, 
        appointmentdata.AverageMilesOrMonth, appointmentdata.Mileage, 
        appointmentdata.VIN, appointmentdata.MakeId, appointmentdata.YearId, 
        appointmentdata.ModelId, appointmentdata.TrimId, appointmentdata.OPCodeList, 
        appointmentdata.LeftFrontwheel, appointmentdata.LeftFrontTire, 
        appointmentdata.LeftRearwheel, appointmentdata.LeftRearTire, 
        appointmentdata.RightFrontWheel, appointmentdata.RightFrontTire, 
        appointmentdata.RightRearWheel, appointmentdata.RightRearTire, 
        appointmentdata.WipersAndLightsList, appointmentdata.AppointmentId, 
        appointmentdata.CreatedFor, appointmentdata.Vehicalemake, 
        appointmentdata.Vehicalemodel, appointmentdata.CustomerEmail, 
        appointmentdata.Vehicaleyear, appointmentdata.AdvisorName, email, text, 
        appointmentdata.HomeNo, appointmentdata.WorkNo, appointmentdata.CellNo, 
        appointmentdata.Zip, appointmentdata.Country, appointmentdata.State,
        appointmentdata.City, appointmentdata.Address1, appointmentdata.Address2, 
        appointmentdata.Notes, carImages, carExtraImages, this.videolist, signatureImages)
        .subscribe(res => {
          this.appres = res;
          this.appno = this.appres.AppointmentId;
          console.log("appno: ", this.appno);
          this.authservice.dismissLoading();
          this.editpresentAlert1(this.appres.message, val);
      }, (error) => {
        this.authservice.dismissLoading();
        console.log(error);
        
      });

    }
    else {
      this.authservice.UpdateAppointment(appointmentdata.DealershipId, 
        appointmentdata.CustomerId, appointmentdata.fname, appointmentdata.lname,
        appointmentdata.cname, appointmentdata.CreatedBy, appointmentdata.Status, 
        appointmentdata.NotesList, appointmentdata.PromiseDate, appointmentdata.Promisetime, 
        appointmentdata.AppointmentTime, appointmentdata.Transportation, 
        appointmentdata.ColorId, appointmentdata.LicensePlate, 
        appointmentdata.AverageMilesOrMonth, appointmentdata.Mileage, appointmentdata.VIN, 
        appointmentdata.MakeId, appointmentdata.YearId, appointmentdata.ModelId, 
        appointmentdata.TrimId, appointmentdata.OPCodeList, appointmentdata.LeftFrontwheel, 
        appointmentdata.LeftFrontTire, appointmentdata.LeftRearwheel, 
        appointmentdata.LeftRearTire, appointmentdata.RightFrontWheel, 
        appointmentdata.RightFrontTire, appointmentdata.RightRearWheel, 
        appointmentdata.RightRearTire, appointmentdata.WipersAndLightsList, 
        appointmentdata.AppointmentId, appointmentdata.CreatedFor, appointmentdata.Vehicalemake, 
        appointmentdata.Vehicalemodel, appointmentdata.CustomerEmail, appointmentdata.Vehicaleyear, 
        appointmentdata.AdvisorName, email, text, appointmentdata.HomeNo, appointmentdata.WorkNo, 
        appointmentdata.CellNo, appointmentdata.Zip, appointmentdata.Country, appointmentdata.State, 
        appointmentdata.City, appointmentdata.Address1, appointmentdata.Address2, 
        appointmentdata.Notes, carImages, carExtraImages, this.videolist, signatureImages).subscribe(res => {
          this.appres = res;
          this.appno = this.appres.AppointmentId;
          console.log("appno: ", this.appno);
          
          this.authservice.dismissLoading();
          this.editpresentAlert1(this.appres.message, val);
      })
    }

  }
  async editpresentAlert1(msg, val) {
    const alert = await this.alertController.create({
      header: 'ION APPT',
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
           /* if (val == "no") {*/
              let object = {
               refresh : true,
               //isEnabled : this.isEnabled,
               //dealer : this.dealer
               
                }
               //this.presentAlertCheckbox2();
               this.authservice.setvideodata("");
               this.authservice.setvideolist("");
               this.authservice.setvimgbaselist("");
               this.authservice.setvimglist("");
               this.authservice.setvlist("");
               this.authservice.setvimgbaselist("");
               this.authservice.setvimgnamelist("");
               this.authservice.setvidlist("");
               this.authservice.setvnlist("");
               this.authservice.setimagedata("");
               this.authservice.setCarExtraImages("");
               this.authservice.setSelectedCarImages([], []);
               this.router.navigate(['/home'],{ queryParams: object});
              
            /*}
            else if (val == "yes") {
              this.continuero();
            }*/

          }
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }

  async editpresentAlert4(msg) {
    const alert = await this.alertController.create({
      header: 'ION APPT',
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            let object = {
              refresh : true,
              //isEnabled : this.isEnabled,
              //dealer : this.dealer
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



}
