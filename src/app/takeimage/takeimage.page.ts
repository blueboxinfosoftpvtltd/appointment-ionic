import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, ActionSheetController, IonRadioGroup, Platform, LoadingController, ToastController, AlertController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { AuthService } from '../auth.service';
import { HighlightimagePage } from '../highlightimage/highlightimage.page';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Base64 } from '@ionic-native/base64/ngx';
import { Observable, Observer } from 'rxjs';
import {
  MediaCapture,
  MediaFile,
  CaptureError
} from '@ionic-native/media-capture/ngx';
import { VideoEditor,CreateThumbnailOptions  } from '@ionic-native/video-editor/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import * as firebase from 'firebase';
import * as moment from "moment";
import * as aws from "aws-sdk";
const MEDIA_FOLDER_NAME = "IonAppointment";
//import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus/ngx';
@Component({
  selector: 'app-takeimage',
  templateUrl: './takeimage.page.html',
  styleUrls: ['./takeimage.page.scss'],
})
export class TakeimagePage implements OnInit {
  @ViewChild('radioGroup', { static: false }) radioGroup: IonRadioGroup
  @ViewChild('layout1', { static: false }) canvasRef: any;
  colors = ['#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];
  selectedColor = '#9e2956';
  CompleteImage: any = [];
  displayorder: any = [];
  takeimage: any;
  takeorder: any;
  captureDataUrl: any;
  image: any;
  canvasElement: any;
  loader: any;
  captureDataUrl1: any;
  captureDataUrl2: any;
  captureDataUrl3: any;
  captureDataUrl4: any;
  captureDataUrl5: any;
  captureDataUrl6: any;
  captureDataUrl7: any;
  captureDataUrl8: any;
  captureDataUrl9: any;
  captureDataUrl10: any;
  captureDataUrl11: any;
  captureDataUrl12: any;
  captureDataUrl13: any;
  orderindex: any;
  Id1: any;
  Id2: any;
  Id3: any;
  Id4: any;
  Id5: any;
  Id6: any;
  Id7: any;
  Id8: any;
  Id9: any;
  Id10: any;
  Id11: any;
  Id12: any;
  Id13: any;
  saveX: number;
  saveY: number;
  imageArray: any;
  currentDateTime: any;
  selectedRadioGroup: any;
  dataReturned: any;
  dealername:any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem: any;
  myButton: any;
  AppointmentId; any;
  ronumber: any;
  Page: any;
  userid: any;
  delarid: any;
  VIN: any;
  data: any;
  backpage: any;
  isedit: any;
  imglist: any[] = [];
  signlist: any[] = [];
  getres: any;
  ActiveSegment: any;
  path:any;
  videourl:any;
  files = [];
  imgurl:any;
  imgbase64:any;
  vlist:any[]=[];
  vnlist:any[]=[];
  vimglist:any[]=[];
  vimgbaselist:any[]=[];
  videolist:any;
  imgname:any;
  vimgnamelist:any[]=[];
  constructor(public activatedRoute: ActivatedRoute, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController,
    public file: File, public camera: Camera, public modalCtrl: ModalController, private router: Router,
    private authservice: AuthService, private storage: Storage, private base64: Base64,private mediaCapture: MediaCapture,
    private media: Media,
    private streamingMedia: StreamingMedia,private alertController: AlertController,private videoEditor: VideoEditor,private plt : Platform) {
    this.imageArray = [];
    // this.OpenModel('dnc',"1");

  }



  ngOnInit() {

    this.plt.ready().then(() => {
      this.path = this.file.documentsDirectory;
      this.file.checkDir(this.path, MEDIA_FOLDER_NAME).then(
        () => {
          //this.loadFiles();
        },
        err => {
          this.file.createDir(this.path, MEDIA_FOLDER_NAME, false);
        }
      );
    });

    this.storage.get('dealername').then(val=>{
      this.dealername = val;
    })

    this.videolist=this.authservice.getvideolist();
    if(this.videolist){
      for(let i=0; i<this.videolist.length;i++){
       // this.files.push(this.videolist[i]);
       this.getBase64ImageFromURL(this.videolist[i].ImagePath).subscribe(base64data => {
       var name,vurl,imgurl;
       name = this.videolist[i].VideoName;
       vurl = this.videolist[i].VideoPath;
        this.vlist.push(this.videolist[i].VideoPath);
        this.vnlist.push(this.videolist[i].VideoName);
        this.vimgnamelist.push(this.videolist[i].ImageName);
        this.vimglist.push(this.videolist[i].ImagePath);
       
          imgurl = base64data;
          console.log(base64data);
          let fdata = {
            VideoName : name,
            VideoPath : vurl,
            ImagePath:imgurl
          }
          this.files.push(fdata);
          this.vimgbaselist.push(base64data);
        })
      }
      this.authservice.setvideolist("");
    }

    
    // var cdate = (moment(new Date).format('YYYYMMDDHHmmss'));
    // var vin = this.authservice.getvin();
    // console.log(vin+'_'+cdate);
    // let fdata = {
    //   name : "demo",
    //   url : "https://firebasestorage.googleapis.com/v0/b/appointment-1cebd.appspot.com/o/videos%2FKNDJN2A20J7554004_20200520154044.mov?alt=media&token=a50f5004-fe5f-4e4d-a21c-f924e8162d03",
    //   image:"https://firebasestorage.googleapis.com/v0/b/appointment-1cebd.appspot.com/o/images%2FKNDJN2A29E7716766_20200520170218.jpg?alt=media&token=0c4a15a3-de3c-4a26-b7e2-beb3afd76b82"
    // }
    // this.files.push(fdata);
    // let fdata = {
    //   VideoName : name,
    //   VideoPath :"https://firebasestorage.googleapis.com/v0/b/appointment-1cebd.appspot.com/o/videos%2FKNDJN2A20J7554004_20200520154044.mov?alt=media&token=a50f5004-fe5f-4e4d-a21c-f924e8162d03",
    //   ImagePath:"https://firebasestorage.googleapis.com/v0/b/appointment-1cebd.appspot.com/o/images%2FKNDJN2A29E7716766_20200526093902.jpg?alt=media&token=a61c1ede-e04d-404b-a036-81e2b65750a5"
    // }
    //  this.files.push(fdata);
    //  this.files.push(fdata);
    //  this.files.push(fdata);
    
    this.ActiveSegment = "pic";
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data);
      this.AppointmentId = data.AppointmentId;
      this.Page = data.Page;
      this.VIN = data.VIN;
      this.backpage = data.backpage;
      this.isedit = data.Isedit;
      this.ronumber = data.ROnumber;
      if (this.AppointmentId == "") {
        this.AppointmentId = "0";
      }
      if (this.ronumber == undefined) {
        this.ronumber = "0";
      }
    })
   
    console.log(this.AppointmentId);
    this.storage.get('dealerid').then((val) => {
      this.delarid = val;
      // console.log(this.dealerid);
    })

    this.storage.get('userid').then((val) => {
      this.userid = val;
      var appid,rono;
      console.log(this.isedit);
      if (this.isedit == "true") {
        var appointmentdata = this.authservice.getappdata();
        var rodata = this.authservice.getrocdata();
        if(appointmentdata){
          appid = appointmentdata.AppointmentId;
        }
        if(rodata){
          rono = "0";
        }
        else{
          appid = this.AppointmentId;
          rono = this.ronumber;
        }
        this.authservice.getcarimage(this.delarid,appid,rono).subscribe((res => {
          this.getres = res;
          if (this.getres == null) {

          }
          else {
            console.log(this.getres);
            if (this.getres) {
              this.CompleteImage = [];
              this.displayorder = [];
              var eimage =[];
              for (let i = 0; i < this.getres.length; i++) {
                if (this.getres[i].ImageType == 0) {
                  this.imglist.push(this.getres[i]);

                  this.displayorder.push(this.getres[i].DisplayOrder);
                  this.getBase64ImageFromURL(this.getres[i].BuketURL).subscribe(base64data => {
                    console.log(base64data);
                    this["captureDataUrl" + (this.getres[i].DisplayOrder)] = 'data:image/jpeg;base64,' + base64data;
                    this.CompleteImage.push(base64data);

                    console.log(this.displayorder);
                    //this.base64Image = 'data:image/jpg;base64,'+base64data;
                  });
                 
                  console.log(this.captureDataUrl);
                }

                if(this.getres[i].VideoName != ""){
                
                  this.getBase64ImageFromURL(this.getres[i].BuketURL).subscribe(base64data => {
                    var name,vurl,imgurl;
                    name = this.getres[i].VideoName;
                    vurl = this.getres[i].VideoPath;
                     this.vlist.push(this.getres[i].VideoPath);
                     this.vnlist.push(this.getres[i].VideoName);
                     this.vimgnamelist.push(this.getres[i].ImageName);
                     this.vimglist.push(this.getres[i].BuketURL);
                    
                       imgurl = base64data;
                       console.log(base64data);
                       let fdata = {
                         VideoName : name,
                         VideoPath : vurl,
                         ImagePath:imgurl
                       }
                       this.files.push(fdata);
                       this.vimgbaselist.push(base64data);
                     })

                }

                if (this.getres[i].ImageType == 2) {
                  this.getBase64ImageFromURL(this.getres[i].BuketURL).subscribe(base64data => {
                    console.log(base64data);
                    this["captureDataUrl" + (this.getres[i].DisplayOrder)] = 'data:image/jpeg;base64,' + base64data;
                    
                    eimage.push(base64data);
                    

                    console.log(this.displayorder);
                    //this.base64Image = 'data:image/jpg;base64,'+base64data;
                  });
                 
                  console.log(this.captureDataUrl);
                }

                else {
                  this.signlist.push(this.getres[i]);
                }
              }
              this.authservice.seimage(eimage);
            }
            console.log(this.imglist);
            console.log(this.signlist);
          }
        }))
      }
      // console.log(this.dealerid);
    })

  }

  Ispic() {
    this.ActiveSegment = "pic";

  }

  Isvid() {
    this.ActiveSegment = "vid";
  }

  // img(e){
  //   let elem = e.target,
  //   imageIndex = parseInt(elem.dataset.img,10);
  //   if( imageIndex <= (this.imageArray.length -1) ) {
  //       elem.src = this.imageArray[imageIndex++];
  //       elem.dataset.img = imageIndex;
  //   } else {
  //       elem.src = this.imageArray[0];
  //       elem.dataset.img = 1;
  //   }
  // }


  openeditprofile(i) {
    if (i == 1) {
      if (this.captureDataUrl1 == undefined || this.captureDataUrl1 == "../assets/imgs/dd.png") {
        this.presentactionsheet(i);
        //this.OpenModel(this.captureDataUrl1,i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl1, i);
      }
    } else if (i == 2) {
      if (this.captureDataUrl2 == undefined || this.captureDataUrl2 == "../assets/imgs/dd.png") {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl2, i);
      }
    } else if (i == 3) {
      if (this.captureDataUrl3 == undefined || this.captureDataUrl3 == "../assets/imgs/dd.png") {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl3, i);
      }
    } else if (i == 4) {
      if (this.captureDataUrl4 == undefined || this.captureDataUrl4 == "../assets/imgs/dd.png") {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl4, i);
      }
    } else if (i == 5) {
      if (this.captureDataUrl5 == undefined || this.captureDataUrl5 == "../assets/imgs/dd.png") {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl5, i);
      }
    } else if (i == 6) {
      if (this.captureDataUrl6 == undefined || this.captureDataUrl6 == "../assets/imgs/dd.png") {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl6, i);
      }
    } else if (i == 7) {
      if (this.captureDataUrl7 == undefined || this.captureDataUrl7 == "../assets/imgs/dd.png") {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl7, i);
      }
    } else if (i == 8) {
      if (this.captureDataUrl8 == undefined || this.captureDataUrl8 == "../assets/imgs/dd.png") {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl8, i);
      }
    } else if (i == 9) {
      if (this.captureDataUrl9 == undefined || this.captureDataUrl9 == "../assets/imgs/dd.png") {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl9, i);
      }
    } else if (i == 10) {
      if (this.captureDataUrl10 == undefined || this.captureDataUrl10 == "../assets/imgs/dd.png") {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl10, i);
      }
    } else if (i == 11) {
      if (this.captureDataUrl11 == undefined || this.captureDataUrl11 == "../assets/imgs/dd.png") {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl11, i);
      }
    } else if (i == 12) {
      if (this.captureDataUrl12 == undefined || this.captureDataUrl12 == "../assets/imgs/dd.png") {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl12, i);
      }
    } else if (i == 13) {
      if (this.captureDataUrl13 == undefined || this.captureDataUrl13 == "../assets/imgs/dd.png") {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl13, i);
      }
    }

  }

  async presentactionsheet(i) {
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Option',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          handler: () => {
            this.takephoto(i);
          }
        },
        {
          text: 'Choose photo from Gallery',
          handler: () => {
            this.openGallery(i);
          }
        },
      ]
    });
    actionSheet.present();
  }

  async OpenModel(img, i) {
   // this.modalCtrl.create(NotenkategorieAddPage, this.klasse, { cssClass: "modal-fullscreen" })
    const modal = await this.modalCtrl.create({
      component: HighlightimagePage,
      componentProps: {
        "paramID": i,
        "paramImage": img,
       
      },
      cssClass: "modal-fullscreen" 
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        console.log(dataReturned);
        if (this.dataReturned.ID == 1) {
          this.captureDataUrl1 = this.dataReturned.Image;
          this.Id1 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 2) {
          this.captureDataUrl2 = this.dataReturned.Image;
          this.Id2 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 3) {
          this.captureDataUrl3 = this.dataReturned.Image;
          this.Id3 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 4) {
          this.captureDataUrl4 = this.dataReturned.Image;
          this.Id4 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 5) {
          this.captureDataUrl5 = this.dataReturned.Image;
          this.Id5 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 6) {
          this.captureDataUrl6 = this.dataReturned.Image;
          this.Id6 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 7) {
          this.captureDataUrl7 = this.dataReturned.Image;
          this.Id7 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 8) {
          this.captureDataUrl8 = this.dataReturned.Image;
          this.Id8 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 9) {
          this.captureDataUrl9 = this.dataReturned.Image;
          this.Id9 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 10) {
          this.captureDataUrl10 = this.dataReturned.Image;
          this.Id10 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 11) {
          this.captureDataUrl11 = this.dataReturned.Image;
          this.Id11 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 12) {
          this.captureDataUrl12 = this.dataReturned.Image;
          this.Id12 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 13) {
          this.captureDataUrl13 = this.dataReturned.Image;
          this.Id13 = this.dataReturned.ID;
        }
        if (this.CompleteImage.length == 0) {
          if (this.dataReturned.Image != "../assets/imgs/dd.png") {
            this.CompleteImage.push(this.dataReturned.Image);
            this.displayorder.push(this.dataReturned.ID);
          }
        }
        else {
          for (let i = 0; i < this.displayorder.length; i++) {
            if (Number(this.dataReturned.ID) == this.displayorder[i]) {
              this.CompleteImage.splice(Number(this.dataReturned.ID), 1);
              this.displayorder.splice(Number(this.dataReturned.ID), 1);
            }
            else {
              if (this.dataReturned.Image != "../assets/imgs/dd.png") {
                this.CompleteImage.push(this.dataReturned.Image);
                this.displayorder.push(this.dataReturned.ID);
              }
            }
          }

        }

      }
      else {
        if (this.dataReturned.ID == 1) {
          this.captureDataUrl1 = "../assets/imgs/dd.png";
          this.Id1 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 2) {
          this.captureDataUrl2 = "../assets/imgs/dd.png";
          this.Id2 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 3) {
          this.captureDataUrl3 = "../assets/imgs/dd.png";
          this.Id3 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 4) {
          this.captureDataUrl4 = "../assets/imgs/dd.png";
          this.Id4 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 5) {
          this.captureDataUrl5 = "../assets/imgs/dd.png";
          this.Id5 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 6) {
          this.captureDataUrl6 = "../assets/imgs/dd.png";
          this.Id6 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 7) {
          this.captureDataUrl7 = "../assets/imgs/dd.png";
          this.Id7 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 8) {
          this.captureDataUrl8 = "../assets/imgs/dd.png";
          this.Id8 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 9) {
          this.captureDataUrl9 = "../assets/imgs/dd.png";
          this.Id9 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 10) {
          this.captureDataUrl10 = "../assets/imgs/dd.png";
          this.Id10 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 11) {
          this.captureDataUrl11 = "../assets/imgs/dd.png";
          this.Id11 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 12) {
          this.captureDataUrl12 = "../assets/imgs/dd.png";
          this.Id12 = this.dataReturned.ID;
        }
        if (this.dataReturned.ID == 13) {
          this.captureDataUrl13 = "../assets/imgs/dd.png";
          this.Id13 = this.dataReturned.ID;
        }

        this.CompleteImage.splice(Number(this.dataReturned.ID), 1);
        this.displayorder.splice(Number(this.dataReturned.ID), 1);
        // for(let i=0 ;i<this.CompleteImage.length;i++){
        //   if(this.dataReturned.Image == this.CompleteImage[i]){
        //     this.CompleteImage.splice(i,1);
        //     this.displayorder.splice(i,1);
        //   }
        // }
      }

    });

    return await modal.present();
  }

  async takephoto(i) {
    let cameraOptions: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 500,
      targetHeight: 500
    }
    this.camera.getPicture(cameraOptions)
      .then((captureDataUrl) => {
        if (this.camera.PictureSourceType.CAMERA) {
          this.captureDataUrl = 'data:image/jpeg;base64,' + captureDataUrl;
          // let object = {
          //   ImagePath : captureDataUrl,
          //   displayorder: i
          // }
          this.orderindex = i;
          this.OpenModel(this.captureDataUrl, i);
        }
      }, (err) => {
        console.log(err);
      });


  }
 

  openGallery(i) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      // allowEdit: true,
      targetWidth: 500,
      targetHeight: 500
    }

    this.camera.getPicture(options).then((imageData) => {
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
      let object = {
        ImagePath: imageData,
        displayorder: i
      }
      this.orderindex = i;
      // this.CompleteImage.push(imageData);
      // this.displayorder.push(i);
      this.OpenModel(this.captureDataUrl, i);
      console.log(this.captureDataUrl);
    }, (err) => {
    })
  }

  show() {
    console.log(this.imageArray);
  }

  Next() {
    console.log(this.CompleteImage);
    let uimage = [];
    let uorder = [];
    this.CompleteImage.forEach(element => {
      if(!uimage.includes(element)){
        uimage.push(element);
      }
    });
    this.displayorder.forEach(element => {
      if(!uorder.includes(element)){
        uorder.push(element);
      }
    });
    // this.router.navigateByUrl('/signature');
    //   this.takeimage = this.CompleteImage.join();
    //   this.takeorder = this.displayorder.join();
    //   if(this.CompleteImage.length == 0){
    //     this.router.navigate(['/signature'],{ queryParams: {AppointmentId : this.AppointmentId , Page:"Signatue",VIN: this.VIN} });
    //    }else{
    //    this.authservice.presentLoading();
    //    this.authservice.CarImageInsert(this.delarid,this.AppointmentId,this.VIN,this.userid,"0",this.takeimage,this.takeorder,this.ronumber).subscribe(res =>{
    //      this.data = res;
    //      console.log(this.data);
    //      this.authservice.dismissLoading();
    //      this.authservice.showToast(this.data.Message);
    //      this.router.navigate(['/signature'],{ queryParams: {AppointmentId : this.AppointmentId , Page:"Signatue",VIN: this.VIN,ROnumber : this.ronumber} });
    //    })
    // }

    
    this.takeimage = uimage.join();
    this.takeorder = uorder.join();
    this.authservice.setvlist(this.vlist);
    this.authservice.setvnlist(this.vnlist);
    this.authservice.setvimglist(this.vimglist);
    this.authservice.setvimgbaselist(this.vimgbaselist);
    this.authservice.setvimgnamelist(this.vimgnamelist);
    // if(this.CompleteImage.length == 0){
    //   this.authservice.showToast("Select Image First");
    //  }else{
    //  this.authservice.presentLoading();
    //  this.authservice.CarImageInsert(this.delarid,this.AppointmentId,this.VIN,this.userid,"0",this.takeimage,this.takeorder,this.ronumber).subscribe(res =>{
    //    this.data = res;
    //    console.log(this.data);
    //    this.authservice.dismissLoading();
    //    this.authservice.showToast(this.data.Message);
    //    this.router.navigate(['/signature'],{ queryParams: {AppointmentId : this.AppointmentId , Page: this.Page,VIN: this.VIN,ROnumber : this.ronumber} });
    //  })

    var appointmentdata = this.authservice.getappdata();
    var rodata = this.authservice.getrocdata();
    if (this.AppointmentId && this.ronumber == "0") {
      let imgdata = {
        "DealershipID": appointmentdata.DealershipId,
        "AppointmentID": appointmentdata.AppointmentId,
        "RONumber": "0",
        "VIN": appointmentdata.VIN,
        "CreatedBy": appointmentdata.CreatedBy,
        "ImageType": "0",
        "ImagePathList": this.takeimage,
        "DisplayOrderList": this.takeorder
        // "type": "0",
        // "CompleteImage": this.takeimage,
        // "takeorder": this.takeorder
      }
      this.authservice.setimagedata(imgdata);
      this.router.navigate(['/signature'], { queryParams: { app: true } });
    }
    else {
      let imgdata = {
        "DealershipID": rodata.dlrid,
        "AppointmentID": "0",
        "RONumber": "0",
        "VIN": rodata.vin,
        "CreatedBy": rodata.uid,
        "ImageType": "0",
        "ImagePathList": this.takeimage,
        "DisplayOrderList": this.takeorder
        // "type": "0",
        // "CompleteImage": this.takeimage,
        // "takeorder": this.takeorder
      }
      this.authservice.setimagedata(imgdata);
      this.router.navigate(['/signature'], { queryParams: { ro: true } });
    }
    //}
  }

  skip() {
    console.log(this.CompleteImage);
    // this.router.navigateByUrl('/signature');
    //   this.takeimage = this.CompleteImage.join();
    //   this.takeorder = this.displayorder.join();
    //   if(this.CompleteImage.length == 0){
    //     this.router.navigate(['/signature'],{ queryParams: {AppointmentId : this.AppointmentId , Page:"Signatue",VIN: this.VIN} });
    //    }else{
    //    this.authservice.presentLoading();
    //    this.authservice.CarImageInsert(this.delarid,this.AppointmentId,this.VIN,this.userid,"0",this.takeimage,this.takeorder,this.ronumber).subscribe(res =>{
    //      this.data = res;
    //      console.log(this.data);
    //      this.authservice.dismissLoading();
    //      this.authservice.showToast(this.data.Message);
    //      this.router.navigate(['/signature'],{ queryParams: {AppointmentId : this.AppointmentId , Page:"Signatue",VIN: this.VIN,ROnumber : this.ronumber} });
    //    })
    // }


    this.takeimage = this.CompleteImage.join();
    this.takeorder = this.displayorder.join();
    // if(this.CompleteImage.length == 0){
    //   this.authservice.showToast("Select Image First");
    //  }else{
    //  this.authservice.presentLoading();
    //  this.authservice.CarImageInsert(this.delarid,this.AppointmentId,this.VIN,this.userid,"0",this.takeimage,this.takeorder,this.ronumber).subscribe(res =>{
    //    this.data = res;
    //    console.log(this.data);
    //    this.authservice.dismissLoading();
    //    this.authservice.showToast(this.data.Message);
    //    this.router.navigate(['/signature'],{ queryParams: {AppointmentId : this.AppointmentId , Page: this.Page,VIN: this.VIN,ROnumber : this.ronumber} });
    //  })

    var appointmentdata = this.authservice.getappdata();
    var rodata = this.authservice.getrocdata();
    if (this.AppointmentId && this.ronumber == "0") {
      let imgdata = {
        "DealershipID": appointmentdata.DealershipId,
        "AppointmentID": appointmentdata.AppointmentId,
        "RONumber": "0",
        "VIN": appointmentdata.VIN,
        "CreatedBy": appointmentdata.CreatedBy,
        "ImageType": "0",
        "ImagePathList": this.takeimage,
        "DisplayOrderList": this.takeorder
        // "type": "0",
        // "CompleteImage": this.takeimage,
        // "takeorder": this.takeorder
      }
      this.authservice.setimagedata(imgdata);
      this.router.navigate(['/signature'], { queryParams: { app: true } });
    }
    else {
      let imgdata = {
        "DealershipID": rodata.dlrid,
        "AppointmentID": "0",
        "RONumber": "0",
        "VIN": rodata.vin,
        "CreatedBy": rodata.uid,
        "ImageType": "0",
        "ImagePathList": this.takeimage,
        "DisplayOrderList": this.takeorder
        // "type": "0",
        // "CompleteImage": this.takeimage,
        // "takeorder": this.takeorder
      }
      this.authservice.setimagedata(imgdata);
      this.router.navigate(['/signature'], { queryParams: { ro: true } });
    }
    // this.router.navigate(['/signature'],{ queryParams: {AppointmentId : this.AppointmentId , Page:"Signatue",VIN: this.VIN} });
  }

  Save() {
    console.log(this.CompleteImage);
    let uimage = [];
    let uorder = [];
    this.CompleteImage.forEach(element => {
      if(!uimage.includes(element)){
        uimage.push(element);
      }
    });
    this.displayorder.forEach(element => {
      if(!uorder.includes(element)){
        uorder.push(element);
      }
    });
    this.takeimage = uimage.join();
    this.takeorder = uorder.join();
    if (this.CompleteImage.length == 0 && this.vlist.length == 0) {
      this.authservice.showToast("Pick Atleast Image Or Video");
    } else {

      if (this.Page) {
        var vnamel = this.vnlist.join();
        var vpathl = this.vlist.join();
        var ipathl = this.vimgbaselist.join();
        var inamel = this.vimgnamelist.join();
        this.authservice.presentLoading();
        this.authservice.CarImageInsert(this.delarid, this.AppointmentId, this.VIN, this.userid, "0", this.takeimage, this.takeorder, this.ronumber,vnamel,vpathl,ipathl,inamel).subscribe(res => {
          this.data = res;
          console.log(this.data);
          this.authservice.dismissLoading();
          this.authservice.showToast(this.data.Message);
          this.router.navigateByUrl('/home');
          //  this.router.navigate(['/signature'],{ queryParams: {AppointmentId : this.AppointmentId , Page: this.Page,VIN: this.VIN,ROnumber : this.ronumber} });
        })
      }
      else {
        var appointmentdata = this.authservice.getappdata();
        var rodata = this.authservice.getrocdata();
        if (this.AppointmentId && this.ronumber == "0") {
          let imgdata = {
            "DealershipID": appointmentdata.DealershipId,
            "AppointmentID": appointmentdata.AppointmentId,
            "RONumber": "0",
            "VIN": appointmentdata.VIN,
            "CreatedBy": appointmentdata.CreatedBy,
            "ImageType": "0",
            "ImagePathList": this.takeimage,
            "DisplayOrderList": this.takeorder
            // "type": "0",
            // "CompleteImage": this.takeimage,
            // "takeorder": this.takeorder
          }
         
          this.router.navigate(['/signature'], { queryParams: { app: true } });
        }
        else {
          let imgdata = {
            "DealershipID": rodata.dlrid,
            "AppointmentID": "0",
            "RONumber": "0",
            "VIN": rodata.vin,
            "CreatedBy": rodata.uid,
            "ImageType": "0",
            "ImagePathList": this.takeimage,
            "DisplayOrderList": this.takeorder
            // "type": "0",
            // "CompleteImage": this.takeimage,
            // "takeorder": this.takeorder
          }
          this.authservice.setimagedata(imgdata);
          
          this.router.navigate(['/signature'], { queryParams: { ro: true } });
        }
      }
    }
  }


  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  more() {
    this.router.navigate(['/moreimage']);
  }

  // upload(){
  
  // }
  video(){
    // this.streamingMedia.playVideo("https://testdoc0101.s3.amazonaws.com/Appointment/1/KNDJN2A29E7716766_20200601184638/KNDJN2A29E7716766_20200601184638.mp4?AWSAccessKeyId=AKIARH5747A23AQBWOPR&Expires=1591174607&Signature=BkxKepvnS6jihmCG1m0wrr1vV5c%3D");
   this.authservice.presentLoading();
//     var cdate = (moment(new Date).format('YYYYMMDDHHmmss'));
//     this.path = this.file.documentsDirectory + MEDIA_FOLDER_NAME;
//    // let path = this.file.documentsDirectory;
//    this.file.copyFile(this.file.applicationDirectory + "www/assets/", 'vd.mov', this.path, cdate+'.mov')
//    .then((entries) => {
//      console.log(entries);
//      let dirpath = entries.nativeURL;
//      let dirpathsegment = dirpath.split('/');
//      dirpathsegment.pop();
//      dirpath = dirpathsegment.join('/');
//      var cdate = (moment(new Date).format('YYYYMMDDHHmmss'));
//     var vin = this.authservice.getvin();
//     var option:CreateThumbnailOptions = {fileUri:dirpath+'/'+entries.name,width:512, height:256, atTime:5, outputFileName: vin+'_'+cdate, quality:50 };
//     this.videoEditor.createThumbnail(option).then(result=>{
//       console.log(result);
//       let imgdirpath = 'file://'+result;
//       console.log(imgdirpath);
//       let fileName = imgdirpath.substr(imgdirpath.lastIndexOf('/') + 1);
//       this.imgname = fileName;
//       this.imgname = this.imgname.split(".");
//       this.imgname = this.imgname[0];
//       console.log(fileName);
//      let imgdirpathsegment = imgdirpath.split('/');
//      imgdirpathsegment.pop();
//      imgdirpath = imgdirpathsegment.join('/');
//         this.file.readAsDataURL(imgdirpath,fileName).then((res)=>{
//        console.log(res);
//        var parts = res.split(";base64,");
//        var contentType = parts[0].replace("data:", "");
//        var base64 = parts[1];
//        this.imgbase64 = base64;
//       // var byteArray = this.base64ToByteArray(base64);
//      //  console.log(byteArray);
  
//       // this.file.readAsArrayBuffer(imgdirpath,fileName).then(async (buffer)=>{
//       //  //console.log(buffer);
//       // await this.uploadimg(buffer,fileName);
//        this.file.readAsArrayBuffer(dirpath,entries.name).then(async (buffer)=>{
//        //console.log(buffer);
//       await this.upload(buffer,entries.name);

//     //  },
//     //  err => this.authservice.dismissLoading()
//     //  )

//      },
//      err => this.authservice.dismissLoading()
//      )
     
//   },
//   err => this.authservice.dismissLoading()
//   )
// },
// err => this.authservice.dismissLoading()
// )
//     //  this.file.readAsArrayBuffer(dirpath,entries.name).then(async (buffer)=>{
//     //    //console.log(buffer);
//     //   await this.upload(buffer,entries.name);

//     //  },
//     //  err => this.authservice.dismissLoading()
//     //  )
//     },
//     err => this.authservice.dismissLoading()
//     )
  
    this.mediaCapture.captureVideo().then(
      (data: MediaFile[]) => {
        if (data.length > 0) {
          console.log(data[0].fullPath);
          this.copyFileToLocalDir(data[0].fullPath);
          
          //this.streamingMedia.playVideo("file://"+data[0].fullPath);
        }
      },
      (err: CaptureError) => this.authservice.dismissLoading()
     );
  }

  copyFileToLocalDir(fullPath) {
        let myPath = fullPath;
        // Make sure we copy from the right location
        if (fullPath.indexOf('file://') < 0) {
          myPath = 'file://' + fullPath;
        }
     
        const ext = myPath.split('.').pop();
        const d = Date.now();
        const newName = `${d}.${ext}`;
        
        const name = myPath.substr(myPath.lastIndexOf('/') + 1);
        //this.streamingMedia.playVideo(name);
        const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
        const copyTo = this.file.documentsDirectory + MEDIA_FOLDER_NAME;
     
        this.file.copyFile(copyFrom, name, copyTo, newName).then(
          (entries) => {
              let dirpath = entries.nativeURL;
              let dirpathsegment = dirpath.split('/');
              dirpathsegment.pop();
              dirpath = dirpathsegment.join('/');

              var cdate = (moment(new Date).format('YYYYMMDDHHmmss'));
              var vin = this.authservice.getvin();
              if(vin ==undefined){
                vin = this.VIN;
              }
              var option:CreateThumbnailOptions = {fileUri:dirpath+'/'+entries.name,width:1024, height:300, atTime:5, outputFileName: vin+'_'+cdate, quality:50 };
              this.videoEditor.createThumbnail(option).then(result=>{
                console.log(result);
                let imgdirpath = 'file://'+result;
                console.log(imgdirpath);
                let fileName = imgdirpath.substr(imgdirpath.lastIndexOf('/') + 1);
                this.imgname = fileName;
                this.imgname = this.imgname.split(".");
                this.imgname = this.imgname[0];
                console.log(fileName);
               let imgdirpathsegment = imgdirpath.split('/');
               imgdirpathsegment.pop();
               imgdirpath = imgdirpathsegment.join('/');
                  this.file.readAsDataURL(imgdirpath,fileName).then((res)=>{
                 console.log(res);
                 var parts = res.split(";base64,");
                 var contentType = parts[0].replace("data:", "");
                 var base64 = parts[1];
                 this.imgbase64 = base64;
                // var byteArray = this.base64ToByteArray(base64);
               //  console.log(byteArray);
            
                //this.file.readAsArrayBuffer(imgdirpath,fileName).then(async (buffer)=>{
                 //console.log(buffer);
                //await this.uploadimg(buffer,fileName);
                 this.file.readAsArrayBuffer(dirpath,entries.name).then(async (buffer)=>{
       //console.log(buffer);
      await this.upload(buffer,entries.name);

    //  },
    //  err => this.authservice.dismissLoading()
    //  )
              //    this.file.readAsArrayBuffer(dirpath,entries.name).then(async (buffer)=>{
              //    //console.log(buffer);
              //   await this.upload(buffer,entries.name);
          
              //  },
              //  err => this.authservice.dismissLoading()
              //  )
          
               },
               err => this.authservice.dismissLoading()
               )
               
            },
            err => this.authservice.dismissLoading()
            )
          }
              )

    //  this.file.readAsArrayBuffer(dirpath,entries.name).then(async (buffer)=>{
    //    //console.log(buffer);
    //   await this.upload(buffer,entries.name);

    //  },
    //  err => this.authservice.dismissLoading()
    //  )
          },
          error => {
            this.authservice.dismissLoading()
          }
        );
    
    }
    async uploadimg(buffer,name){
      
       let blob = new Blob([new Uint8Array (buffer)],{type:"image/jpeg"});
       console.log(blob);
      let storage = firebase.storage();
      storage.ref('images/'+name).put(blob).then((d)=>{
        storage.ref('images/'+name).getDownloadURL().then((res)=>{
          console.log(res);
          this.imgurl = res;

          //this.authservice.dismissLoading();
          //this.authservice.dismissLoading();
          // let vdata={
          //   "VideoNameList" : name,
          //   "VideoPathList" : this.videourl,
          //   "VideoType":"0"
          // }
          // let fdata = {
          //   name : name,
          //   url : this.videourl
          // }
          // this.files.push(fdata);
          // this.authservice.setvideodata(vdata);
          // this.presentAlert4("Video upload successfully");
          
          //this.streamingMedia.playVideo(res);
        },
        err => this.authservice.dismissLoading()
        )
       // this.streamingMedia.playVideo(d.downloadURL);
      },
      err => this.authservice.dismissLoading()
      )
    }
  async upload(buffer,name){
    var cdate = (moment(new Date).format('YYYYMMDDHHmmss'));
    var vin = this.authservice.getvin();
    if(vin ==undefined){
      vin = this.VIN;
    }
    name = vin+'_'+cdate;
     let blob = new Blob([new Uint8Array (buffer)],{type:"video/mov"});
     console.log(blob);

     return new Promise((resolve, reject) => {
      let time = new Date();
        let bucket = new aws.S3(
          {
            // AKIARH5747A23AQBWOPR
            // s+HtKFkFXKdypjGIBtnLCGZSHJhJotuvOw+hotah
            accessKeyId: 'AKIARH5747A24LWHRWKT',//  
            secretAccessKey: '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',//
            region: 'us-east-1'
          }
        );
        var app;
        if(this.AppointmentId == "0"){
          app = "Appointment";
        }
        else{
          app = "RO";
        }
    
        const params = {
          Bucket: 'appointmentids',//testdoc0101
          Key:  app+"/"+ this.dealername+"/"+vin +"/"+ cdate+"/"+name+ ".mp4",
          Body: blob,
          ContentType: "video/mp4"
        };
    
        console.log("params", params);
    
        bucket.upload(params, (err, data) => {
              console.log("Response is", data)
              if(err) {
                reject(err);
              } else { 
                this.videourl = data.Location;
        this.authservice.dismissLoading();
        // let vdata={
        //   "VideoNameList" : name,
        //   "VideoPathList" : this.videourl,
        //   "VideoType":"0",
        //   "imgurl":this.imgurl,
        //   "imgbase":this.imgbase64
        // }
        let fdata = {
          VideoName : name,
          VideoPath : this.videourl,
          ImagePath:this.imgbase64
        }
        this.files.push(fdata);
        this.vlist.push(this.videourl);
        this.vimglist.push(this.imgurl);
        this.vnlist.push(name);
        this.vimgbaselist.push(this.imgbase64);
        this.vimgnamelist.push(this.imgname);
        //this.authservice.setvideodata(vdata);
        this.presentAlert4("Video upload successfully");
                //this.streamingMedia.playVideo(data.Location);
               // resolve(imageName); 
              }
            });
          })

  //  let storage = firebase.storage();
    // storage.ref('videos/'+name).put(blob).then((d)=>{
    //   storage.ref('videos/'+name).getDownloadURL().then((res)=>{
    //     console.log(res);
    //     this.videourl = res;
    //     this.authservice.dismissLoading();
    //     // let vdata={
    //     //   "VideoNameList" : name,
    //     //   "VideoPathList" : this.videourl,
    //     //   "VideoType":"0",
    //     //   "imgurl":this.imgurl,
    //     //   "imgbase":this.imgbase64
    //     // }
    //     let fdata = {
    //       VideoName : name,
    //       VideoPath : this.videourl,
    //       ImagePath:this.imgurl
    //     }
    //     this.files.push(fdata);
    //     this.vlist.push(this.videourl);
    //     this.vimglist.push(this.imgurl);
    //     this.vnlist.push(name);
    //     this.vimgbaselist.push(this.imgbase64);
    //     this.vimgnamelist.push(this.imgname);
    //     //this.authservice.setvideodata(vdata);
    //     this.presentAlert4("Video upload successfully");
        
    //     //this.streamingMedia.playVideo(res);
    //   },
    //   err => this.authservice.dismissLoading()
    //   )
    //  // this.streamingMedia.playVideo(d.downloadURL);
    // },
    // err => this.authservice.dismissLoading()
    // )
  }
  async presentAlert4(msg) {
    const alert = await this.alertController.create({
      header: 'ION APPT',
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
           // this.router.navigateByUrl('/home');

          }
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }

  async remove(i){
    const alert = await this.alertController.create({
      header: 'ION APPT',
      message: 'Do you want to delete this video?',
      buttons: [
        {
          text: 'Cancel',
          handler: (blah) => {
           // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
           this.files.splice(i,1);
           this.vlist.splice(i,1);
           this.vnlist.splice(i,1);
           this.vimglist.splice(i,1);
           this.vimgbaselist.splice(i,1);
           this.vimgnamelist.splice(i,1);
          }
        }
      ]
    });

    await alert.present();
  }

  playvideo(url){
    console.log(url);
    this.streamingMedia.playVideo(url);
  }

}
