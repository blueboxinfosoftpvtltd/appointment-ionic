import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Base64 } from "@ionic-native/base64/ngx";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";
import {
  CaptureError,
  MediaCapture,
  MediaFile,
} from "@ionic-native/media-capture/ngx";
import { Media } from "@ionic-native/media/ngx";
import { StreamingMedia } from "@ionic-native/streaming-media/ngx";
import {
  CreateThumbnailOptions,
  VideoEditor,
} from "@ionic-native/video-editor/ngx";
import {
  ActionSheetController,
  AlertController,
  IonRadioGroup,
  LoadingController,
  ModalController,
  Platform,
  ToastController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import * as aws from "aws-sdk";
import * as firebase from "firebase";
import * as moment from "moment";
import { Observable, Observer } from "rxjs";
import { AuthService } from "../auth.service";
import { HighlightimagePage } from "../highlightimage/highlightimage.page";
import { AwsService } from "../services/aws.service";
const MEDIA_FOLDER_NAME = "IonAppointment";
//import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus/ngx';
@Component({
  selector: "app-takeimage",
  templateUrl: "./takeimage.page.html",
  styleUrls: ["./takeimage.page.scss"],
})
export class TakeimagePage implements OnInit {
  @ViewChild("radioGroup", { static: false }) radioGroup: IonRadioGroup;
  @ViewChild("layout1", { static: false }) canvasRef: any;
  colors = [
    "#9e2956",
    "#c2281d",
    "#de722f",
    "#edbf4c",
    "#5db37e",
    "#459cde",
    "#4250ad",
    "#802fa3",
  ];
  selectedColor = "#9e2956";
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
  dealername: any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem: any;
  myButton: any;
  AppointmentId;
  any;
  ronumber: any;
  Page: any;
  userid: any;
  delarid: any;
  empdealerid: any;
  Videoid: any;
  VIN: any;
  data: any;
  backpage: any;
  isedit: any;
  imglist: any[] = [];
  signlist: any[] = [];
  getres: any;
  getvideores: any;
  ActiveSegment: any;
  path: any;
  videourl: any;
  files = [];
  imgurl: any;

  imgbase64: any;
  vlist: any[] = [];
  vidlist: any[] = [];
  vnlist: any[] = [];
  vimglist: any[] = [];
  vimgbaselist: any[] = [];
  videolist: any;
  videolist2: any;
  imgname: any;
  vimgnamelist: any[] = [];

  vid: any;
  resposeData: any;

  selectedCarImageIndex: any[] = [];
  selectedCarImageData: any[] = [];
  public backdisabled = false;
  username: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public file: File,
    public camera: Camera,
    public modalCtrl: ModalController,
    private router: Router,
    private authservice: AuthService,
    private storage: Storage,
    private base64: Base64,
    private mediaCapture: MediaCapture,
    private media: Media,
    private streamingMedia: StreamingMedia,
    private alertController: AlertController,
    private videoEditor: VideoEditor,
    private plt: Platform,
    private awsService: AwsService
  ) {
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
        (err) => {
          this.file.createDir(this.path, MEDIA_FOLDER_NAME, false);
        }
      );
    });

    this.storage.get("dealername").then((val) => {
      this.dealername = val;
    });
    this.storage.get("username").then((val) => {
      this.username = val;
    });

    this.videolist = this.authservice.getvideolist();
    console.log(this.videolist);
    if (this.videolist) {
      console.log(this.videolist.length);
      for (let i = 0; i < this.videolist.length; i++) {
        console.log("Video " + i + " name:" + this.videolist[i].VideoName);
        // this.files.push(this.videolist[i]);
        console.log("Image " + i + " Path:" + this.videolist[i].ImagePath);

        this.getBase64ImageFromURL(this.videolist[i].ImagePath).subscribe(
          (base64data) => {
            var name, vurl, imgurl;
            name = this.videolist[i].VideoName;
            vurl = this.videolist[i].VideoPath;

            this.vid = this.videolist[i].VideoMasterID;
            console.log(this.vid);

            /*
        this.vlist.push(this.videolist[i].VideoPath);
        this.vnlist.push(this.videolist[i].VideoName);
        this.vimgnamelist.push(this.videolist[i].ImageName);
        this.vimglist.push(this.videolist[i].ImagePath);
       */
            /*imgurl = this.videolist[i].ImagePath;
         console.log("Image " + i + " URL:" + imgurl);*/
            imgurl = base64data;
            console.log("Image " + i + " BASE:" + base64data);

            let fdata = {
              VideoMasterID: this.vid,
              VideoName: name,
              VideoPath: vurl,
              ImagePath: imgurl,
            };

            this.files.push(fdata);
            this.vimgbaselist.push(base64data);
          }
        );
        console.log("Loop : " + i);
        console.log("Loop in Video Length: " + this.videolist.length);
      }
      this.authservice.setvideolist("");
    }

    //this.videolist2=[];
    /*this.videolist2 = this.authservice.getvideolist();
  
    if(this.videolist2){
      
      for(let i=0; i<this.videolist2.length;i++){
       // this.files.push(this.videolist[i]);
       console.log(this.videolist2[i]);
       
       this.getBase64ImageFromURL(this.videolist2[i].ImagePath).subscribe(base64data => {
       var name,vurl,imgurl;
       name = this.videolist2[i].VideoName;
       vurl = this.videolist2[i].VideoPath;
       
       this.vid = this.videolist2[i].VideoMasterID;
       console.log(this.vid);
       
        this.vidlist.push(this.videolist2[i].VideoMasterID);
        this.vlist.push(this.videolist2[i].VideoPath);
        this.vnlist.push(this.videolist2[i].VideoName);
        this.vimgnamelist.push(this.videolist2[i].ImageName);
        this.vimglist.push(this.videolist2[i].ImagePath);

        console.log('VIDLIST', JSON.stringify(this.vidlist));
        console.log('VLIST', JSON.stringify(this.vlist));
        console.log('VNLIST', JSON.stringify(this.vnlist));
        console.log('VIMGNAMELIST', JSON.stringify(this.vimgnamelist));
        console.log('VIMGLIST', JSON.stringify(this.vimglist));
    
        
       
          imgurl = base64data;
          console.log(base64data);
          let fdata = {
            VideoMasterID : this.vid,
            VideoName : name,
            VideoPath : vurl,
            ImagePath:imgurl
          }
        
          this.files.push(fdata);
          console.log(this.files);
          this.vimgbaselist.push(base64data);
        })
        console.log('Loop : ' + i);
        console.log('Loop in Video Length: ' + this.videolist2.length);
      }
      console.log('Video End List : ' + this.videolist2);
      this.authservice.setvideolist("");
    }*/

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
    this.backdisabled = true;
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
    });

    console.log(this.AppointmentId);
    this.storage.get("dealerid").then((val) => {
      this.delarid = val;
      // console.log(this.dealerid);
    });

    /* this.storage.get("Employee_id").then((val) => {
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
      
      console.log(this.userid);*/
    this.storage.get("userid").then((val) => {
      this.userid = val;

      var appid, rono;
      console.log(this.isedit);
      if (this.isedit == "true") {
        this.backdisabled = false;
        var appointmentdata = this.authservice.getappdata();
        var rodata = this.authservice.getrocdata();
        if (appointmentdata) {
          appid = appointmentdata.AppointmentId;
        }
        if (rodata) {
          rono = "0";
        } else {
          appid = this.AppointmentId;
          rono = this.ronumber;
        }

        /*  Image List Start */
        this.authservice
          .getcarimage(this.delarid, appid, rono)
          .subscribe((res) => {
            this.getres = res;
            console.log(this.getres);
            if (this.getres == null) {
            } else {
              if (this.getres) {
                this.CompleteImage = [];
                this.displayorder = [];
                var eimage = [];

                for (let i = 0; i < this.getres.length; i++) {
                  const image = this.getres[i];
                  console.log("captureDataUrl" + image.DisplayOrder + " : " + image.ImagePath);
                  
                  // car images
                  if (image.ImageType == 0) {
                    this["captureDataUrl" + image.DisplayOrder] = image.ImagePath;

                    // this.imglist.push(this.getres[i]);

                    // this.displayorder.push(this.getres[i].DisplayOrder);
                    // this.getBase64ImageFromURL(this.getres[i].ImagePath).subscribe(base64data => {
                    // this["captureDataUrl" + (this.getres[i].DisplayOrder)] = 'data:image/jpeg;base64,' + base64data;
                    // this.CompleteImage.push(base64data);

                    // console.log(this.displayorder);
                    //this.base64Image = 'data:image/jpg;base64,'+base64data;
                    // });
                    // console.log(this.captureDataUrl);
                  }

                  if (this.getres[i].VideoName != "") {
                    this.getBase64ImageFromURL(
                      this.getres[i].ImagePath
                    ).subscribe((base64data) => {
                      var name, vurl, imgurl;
                      name = this.getres[i].VideoName;
                      vurl = this.getres[i].VideoPath;

                      /*   this.vid = this.getres[i].VideoMasterID;
                      console.log(this.vid);*/

                      /*  this.vlist.push(this.getres[i].VideoPath);
                       this.vnlist.push(this.getres[i].VideoName);
                       this.vimgnamelist.push(this.getres[i].ImageName);
                       this.vimglist.push(this.getres[i].ImagePath);*/

                      imgurl = base64data;
                      console.log(base64data);
                      let fdata1 = {
                        VideoMasterID: " ",
                        VideoName: name,
                        VideoPath: vurl,
                        ImagePath: imgurl,
                      };
                      //  console.log(fdata1);

                      console.log(this.files);
                      //this.files.push(fdata1);
                      //this.vimgbaselist.push(base64data);
                    });
                  }

                  if (this.getres[i].ImageType == 2) {
                    // this.captureDataUrl1 = this.getres[i].ImagePath;
                    eimage.push(image.ImagePath);

                    // this.getBase64ImageFromURL(this.getres[i].ImagePath).subscribe(base64data => {
                    //   // this["captureDataUrl" + (this.getres[i].DisplayOrder)] = 'data:image/jpeg;base64,' + base64data;

                    //   // eimage.push(base64data);

                    //   // console.log(this.displayorder);
                    //   //this.base64Image = 'data:image/jpg;base64,'+base64data;
                    // });
                  } else {
                    this.signlist.push(this.getres[i]);
                  }
                }
                // this.authservice.setCarExtraImages(eimage);
                this.authservice.setCarExtraImagesList(eimage);
              }
              console.log(this.imglist);
              console.log(this.signlist);
            }
          });
        /* Image List End */

        /* Video List start */

        /*  this.authservice.GetCarVideoList(this.delarid,appid,rono).subscribe((res => {
          if (res != null) {
            console.log(res);
            
          }
          
          this.getvideores = res;
          console.log(this.getvideores); 
          if (this.getvideores == null) {

          }
          else {
            if (this.getvideores) {
            
              for (let i = 0; i < this.getvideores.length; i++) {
              
                if(this.getvideores[i].VideoName != ""){
                
                    this.getBase64ImageFromURL(this.getvideores[i].ImagePath).subscribe(base64data => {
                      var name,vurl,imgurl;
                      name = this.getvideores[i].VideoName;
                      vurl = this.getvideores[i].VideoPath;
                      this.vlist.push(this.getvideores[i].VideoPath);
                      this.vnlist.push(this.getvideores[i].VideoName);
                      this.vimgnamelist.push(this.getvideores[i].ImageName);
                      this.vimglist.push(this.getvideores[i].ImagePath);
                      
                        imgurl = base64data;
                        console.log(base64data);
                        let fdata1 = {
                          VideoName : name,
                          VideoPath : vurl,
                          ImagePath:imgurl
                        }
                      //  console.log(fdata1);
                      
                        console.log(this.files);
                        //this.files.push(fdata1);

                      //  console.log('FILES_DATA', JSON.stringify(this.files));
                      // this.vimgbaselist.push(base64data);

                      
                      })

                }
              else {
                  this.signlist.push(this.getvideores[i]);
                }
              }
              // this.authservice.setCarExtraImages(eimage);
              //this.authservice.setCarExtraImagesList(eimage);
            }
            console.log(this.imglist);
            console.log(this.signlist);
          }
        }))*/
        /* Video List End */
      }
      // console.log(this.dealerid);
    });
  }

  /*back(){
    if (this.isedit == "true") {
        this.backdisabled = true;
    }
    else{
      this.backdisabled = false;
    }
    
  }*/
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
      if (
        this.captureDataUrl1 == undefined ||
        this.captureDataUrl1 == "../assets/imgs/dd.png"
      ) {
        this.presentactionsheet(i);
        //this.OpenModel(this.captureDataUrl1,i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl1, i);
      }
    } else if (i == 2) {
      if (
        this.captureDataUrl2 == undefined ||
        this.captureDataUrl2 == "../assets/imgs/dd.png"
      ) {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl2, i);
      }
    } else if (i == 3) {
      if (
        this.captureDataUrl3 == undefined ||
        this.captureDataUrl3 == "../assets/imgs/dd.png"
      ) {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl3, i);
      }
    } else if (i == 4) {
      if (
        this.captureDataUrl4 == undefined ||
        this.captureDataUrl4 == "../assets/imgs/dd.png"
      ) {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl4, i);
      }
    } else if (i == 5) {
      if (
        this.captureDataUrl5 == undefined ||
        this.captureDataUrl5 == "../assets/imgs/dd.png"
      ) {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl5, i);
      }
    } else if (i == 6) {
      if (
        this.captureDataUrl6 == undefined ||
        this.captureDataUrl6 == "../assets/imgs/dd.png"
      ) {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl6, i);
      }
    } else if (i == 7) {
      if (
        this.captureDataUrl7 == undefined ||
        this.captureDataUrl7 == "../assets/imgs/dd.png"
      ) {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl7, i);
      }
    } else if (i == 8) {
      if (
        this.captureDataUrl8 == undefined ||
        this.captureDataUrl8 == "../assets/imgs/dd.png"
      ) {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl8, i);
      }
    } else if (i == 9) {
      if (
        this.captureDataUrl9 == undefined ||
        this.captureDataUrl9 == "../assets/imgs/dd.png"
      ) {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl9, i);
      }
    } else if (i == 10) {
      if (
        this.captureDataUrl10 == undefined ||
        this.captureDataUrl10 == "../assets/imgs/dd.png"
      ) {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl10, i);
      }
    } else if (i == 11) {
      if (
        this.captureDataUrl11 == undefined ||
        this.captureDataUrl11 == "../assets/imgs/dd.png"
      ) {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl11, i);
      }
    } else if (i == 12) {
      if (
        this.captureDataUrl12 == undefined ||
        this.captureDataUrl12 == "../assets/imgs/dd.png"
      ) {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl12, i);
      }
    } else if (i == 13) {
      if (
        this.captureDataUrl13 == undefined ||
        this.captureDataUrl13 == "../assets/imgs/dd.png"
      ) {
        this.presentactionsheet(i);
      } else {
        this.orderindex = i;
        this.OpenModel(this.captureDataUrl13, i);
      }
    }
  }

  async presentactionsheet(i) {
    let actionSheet = await this.actionSheetCtrl.create({
      header: "Option",
      cssClass: "action-sheets-basic-page",
      buttons: [
        {
          text: "Take photo",
          role: "destructive",
          handler: () => {
            this.takephoto(i);
          },
        },
        {
          text: "Choose photo from Gallery",
          handler: () => {
            this.openGallery(i);
          },
        },
      ],
    });
    actionSheet.present();
  }

  async OpenModel(img, i) {
    // this.modalCtrl.create(NotenkategorieAddPage, this.klasse, { cssClass: "modal-fullscreen" })
    const modal = await this.modalCtrl.create({
      component: HighlightimagePage,
      componentProps: {
        paramID: i,
        paramImage: img,
      },
      cssClass: "modal-fullscreennew",
    });

    modal.onDidDismiss().then((dataReturned) => {
      // get the index of current photo
      const index = this.selectedCarImageIndex.indexOf(dataReturned.data.ID);
      console.log("INDEX", index);
      this["captureDataUrl" + dataReturned.data.ID] = dataReturned.data.Image;
      // check if photo already exists or not
      if (index !== -1) {
        // change the existing photo
        this.selectedCarImageIndex[index] = dataReturned.data.ID;
        this.selectedCarImageData[index] = dataReturned.data.Image;
      } else {
        // add new photo to array
        this.selectedCarImageIndex.push(dataReturned.data.ID);
        this.selectedCarImageData.push(dataReturned.data.Image);
      }

      console.log("ids: ", this.selectedCarImageIndex);
    });

    return await modal.present();
  }

  async takephoto(i) {
    let cameraOptions: CameraOptions = {
      quality: 75,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      /*targetWidth: 745,
      targetHeight: 610,*/
      targetWidth: 400,
      targetHeight: 400,
      correctOrientation: true,
    };
    this.camera.getPicture(cameraOptions).then(
      (captureDataUrl) => {
        if (this.camera.PictureSourceType.CAMERA) {
          this.captureDataUrl = "data:image/jpeg;base64," + captureDataUrl;
          // let object = {
          //   ImagePath : captureDataUrl,
          //   displayorder: i
          // }
          this.orderindex = i;
          this.OpenModel(this.captureDataUrl, i);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openGallery(i) {
    const options: CameraOptions = {
      quality: 75,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      // allowEdit: true,
      /* targetWidth: 745,
      targetHeight: 610*/
      targetWidth: 380,
      targetHeight: 380,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        console.log("Image Data Check: " + imageData);
        this.captureDataUrl = "data:image/jpeg;base64," + imageData;
        // this.captureDataUrl = 'data:image/png;base64,' + imageData;

        console.log("Base 64 Check: " + this.captureDataUrl);

        let object = {
          ImagePath: imageData,
          displayorder: i,
        };
        this.orderindex = i;
        // this.CompleteImage.push(imageData);
        // this.displayorder.push(i);
        this.OpenModel(this.captureDataUrl, i);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  show() {
    console.log(this.imageArray);
  }

  Next() {
    // pass selected image's index to auth service
    this.authservice.setSelectedCarImages(
      this.selectedCarImageIndex,
      this.selectedCarImageData
    );

    // let uimage = [];
    // let uorder = [];
    // this.CompleteImage.forEach(element => {
    //   if(!uimage.includes(element)){
    //     uimage.push(element);
    //   }
    // });
    // this.displayorder.forEach(element => {
    //   if(!uorder.includes(element)){
    //     uorder.push(element);
    //   }
    // });
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

    // this.takeimage = uimage.join();
    // this.takeorder = uorder.join();
    // this.authservice.setvlist(this.vlist);
    // this.authservice.setvnlist(this.vnlist);
    // this.authservice.setvimglist(this.vimglist);
    // this.authservice.setvimgbaselist(this.vimgbaselist);
    // this.authservice.setvimgnamelist(this.vimgnamelist);
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

    /*var zz = [];
    this.videolist.forEach(element => {
      zz.push(element.VideoPath);
      
    });
    var yy = zz.join(',');
    console.log('Video test list demo:', JSON.stringify(yy));
    this.authservice.setvlist(yy);*/
    this.authservice.setvlist(this.vlist);
    this.authservice.setvidlist(this.vidlist);
    this.authservice.setvnlist(this.vnlist);
    this.authservice.setvimglist(this.vimglist);
    this.authservice.setvimgbaselist(this.vimgbaselist);
    this.authservice.setvimgnamelist(this.vimgnamelist);

    console.log("Video List :", JSON.stringify(this.vlist));
    console.log("Video Id : ", JSON.stringify(this.vidlist));
    console.log("Video Name List  :", JSON.stringify(this.vnlist));
    console.log("Video Image : ", JSON.stringify(this.vimglist));
    console.log("Video Image List :", JSON.stringify(this.vimgbaselist));
    console.log("Video Image Name :", JSON.stringify(this.vimgnamelist));

    var appointmentdata = this.authservice.getappdata();
    var rodata = this.authservice.getrocdata();
    if (this.AppointmentId && this.ronumber == "0") {
      let imgdata = {
        DealershipID: appointmentdata.DealershipId,
        AppointmentID: appointmentdata.AppointmentId,
        RONumber: "0",
        VIN: appointmentdata.VIN,
        CreatedBy: appointmentdata.CreatedBy,
        ImageType: "0",
        ImagePathList: this.selectedCarImageData,
        DisplayOrderList: this.selectedCarImageIndex,
        // "type": "0",
        // "CompleteImage": this.takeimage,
        // "takeorder": this.takeorder
      };
      this.authservice.setimagedata(imgdata);
      //  this.router.navigate(['/signature'], { queryParams: { app: true } });

      if (this.isedit == "true") {
        this.router.navigate(["/signature"], {
          queryParams: {
            AppointmentId: this.AppointmentId,
            Isedit: true,
            app: true,
          },
        });
      } else {
        this.router.navigate(["/signature"], { queryParams: { app: true } });
      }
    } else {
      let imgdata = {
        DealershipID: rodata.dlrid,
        AppointmentID: "0",
        RONumber: "0",
        VIN: rodata.vin,
        CreatedBy: rodata.uid,
        ImageType: "0",
        ImagePathList: this.selectedCarImageData,
        DisplayOrderList: this.selectedCarImageIndex,
        // "type": "0",
        // "CompleteImage": this.takeimage,
        // "takeorder": this.takeorder
      };
      this.authservice.setimagedata(imgdata);
      // this.router.navigate(['/signature'], { queryParams: { ro: true } });
      if (this.isedit == "true") {
        this.router.navigate(["/signature"], {
          queryParams: {
            AppointmentId: this.AppointmentId,
            Isedit: true,
            app: true,
          },
        });
      } else {
        this.router.navigate(["/signature"], {
          queryParams: { ROnumber: this.ronumber, ro: true },
        });
      }
    }
    //}
  }

  skip() {
    console.log(this.CompleteImage);
    this.authservice.setSelectedCarImages(
      this.selectedCarImageIndex,
      this.selectedCarImageData
    );

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
        DealershipID: appointmentdata.DealershipId,
        AppointmentID: appointmentdata.AppointmentId,
        RONumber: "0",
        VIN: appointmentdata.VIN,
        CreatedBy: appointmentdata.CreatedBy,
        ImageType: "0",
        //"ImagePathList": this.takeimage,
        // "DisplayOrderList": this.takeorder
        ImagePathList: this.selectedCarImageData,
        DisplayOrderList: this.selectedCarImageIndex,
        // "type": "0",
        // "CompleteImage": this.takeimage,
        // "takeorder": this.takeorder
      };
      this.authservice.setimagedata(imgdata);
      //this.router.navigate(['/signature'], { queryParams: { app: true } });
      if (this.isedit == "true") {
        this.router.navigate(["/signature"], {
          queryParams: {
            AppointmentId: this.AppointmentId,
            Isedit: true,
            app: true,
          },
        });
      } else {
        this.router.navigate(["/signature"], { queryParams: { app: true } });
      }
    } else {
      let imgdata = {
        DealershipID: rodata.dlrid,
        AppointmentID: "0",
        RONumber: "0",
        VIN: rodata.vin,
        CreatedBy: rodata.uid,
        ImageType: "0",
        //"ImagePathList": this.takeimage,
        //"DisplayOrderList": this.takeorder

        ImagePathList: this.selectedCarImageData,
        DisplayOrderList: this.selectedCarImageIndex,
        // "type": "0",
        // "CompleteImage": this.takeimage,
        // "takeorder": this.takeorder
      };
      this.authservice.setimagedata(imgdata);
      //this.router.navigate(['/signature'], { queryParams: { ro: true } });
      if (this.isedit == "true") {
        this.router.navigate(["/signature"], {
          queryParams: {
            AppointmentId: this.AppointmentId,
            Isedit: true,
            app: true,
          },
        });
      } else {
        this.router.navigate(["/signature"], {
          queryParams: { ROnumber: this.ronumber, ro: true },
        });
      }
    }
    // this.router.navigate(['/signature'],{ queryParams: {AppointmentId : this.AppointmentId , Page:"Signatue",VIN: this.VIN} });
  }

  Save() {
    console.log(this.CompleteImage);
    let uimage = [];
    let uorder = [];
    this.CompleteImage.forEach((element) => {
      if (!uimage.includes(element)) {
        uimage.push(element);
      }
    });
    this.displayorder.forEach((element) => {
      if (!uorder.includes(element)) {
        uorder.push(element);
      }
    });
    this.takeimage = uimage.join();
    this.takeorder = uorder.join();
    if (this.CompleteImage.length == 0 && this.vlist.length == 0) {
      this.authservice.alertshow("Pick Atleast Image Or Video");
    } else {
      if (this.Page) {
        var vidl = this.vidlist.join();
        var vnamel = this.vnlist.join();
        var vpathl = this.vlist.join();
        var ipathl = this.vimgbaselist.join();
        var inamel = this.vimgnamelist.join();
        this.authservice.presentLoading();
        this.authservice
          .CarImageInsert(
            this.delarid,
            this.AppointmentId,
            this.VIN,
            this.userid,
            "0",
            this.takeimage,
            this.takeorder,
            this.ronumber,
            vnamel,
            vpathl,
            ipathl,
            inamel
          )
          .subscribe((res) => {
            this.data = res;
            console.log(this.data);
            this.authservice.dismissLoading();
            this.authservice.showToast(this.data.Message);
            this.router.navigateByUrl("/home");
            //  this.router.navigate(['/signature'],{ queryParams: {AppointmentId : this.AppointmentId , Page: this.Page,VIN: this.VIN,ROnumber : this.ronumber} });
          });
      } else {
        var appointmentdata = this.authservice.getappdata();
        var rodata = this.authservice.getrocdata();
        if (this.AppointmentId && this.ronumber == "0") {
          let imgdata = {
            DealershipID: appointmentdata.DealershipId,
            AppointmentID: appointmentdata.AppointmentId,
            RONumber: "0",
            VIN: appointmentdata.VIN,
            CreatedBy: appointmentdata.CreatedBy,
            ImageType: "0",
            ImagePathList: this.takeimage,
            DisplayOrderList: this.takeorder,
            // "type": "0",
            // "CompleteImage": this.takeimage,
            // "takeorder": this.takeorder
          };

          //  this.router.navigate(['/signature'], { queryParams: { app: true } });
          if (this.isedit == "true") {
            this.router.navigate(["/signature"], {
              queryParams: {
                AppointmentId: this.AppointmentId,
                Isedit: true,
                app: true,
              },
            });
          } else {
            this.router.navigate(["/signature"], {
              queryParams: { app: true },
            });
          }
        } else {
          let imgdata = {
            DealershipID: rodata.dlrid,
            AppointmentID: "0",
            RONumber: "0",
            VIN: rodata.vin,
            CreatedBy: rodata.uid,
            ImageType: "0",
            ImagePathList: this.takeimage,
            DisplayOrderList: this.takeorder,
            // "type": "0",
            // "CompleteImage": this.takeimage,
            // "takeorder": this.takeorder
          };
          this.authservice.setimagedata(imgdata);

          //this.router.navigate(['/signature'], { queryParams: { ro: true } });
          if (this.isedit == "true") {
            this.router.navigate(["/signature"], {
              queryParams: {
                AppointmentId: this.AppointmentId,
                Isedit: true,
                app: true,
              },
            });
          } else {
            this.router.navigate(["/signature"], {
              queryParams: { ROnumber: this.ronumber, ro: true },
            });
          }
        }
      }
    }
  }

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = "Anonymous";
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
    this.router.navigate(["/moreimage"]);
  }

  video() {
    // this.streamingMedia.playVideo("https://testdoc0101.s3.amazonaws.com/Appointment/1/KNDJN2A29E7716766_20200601184638/KNDJN2A29E7716766_20200601184638.mp4?AWSAccessKeyId=AKIARH5747A23AQBWOPR&Expires=1591174607&Signature=BkxKepvnS6jihmCG1m0wrr1vV5c%3D");
    // this.authservice.presentLoading();
    this.mediaCapture.captureVideo().then(
      (data: MediaFile[]) => {
        this.authservice.dismissLoading();
        if (data.length > 0) {
          console.log("VIDEO_DATA", data);
          
          console.log("VIDEO_PATH", data[0].fullPath);
          this.copyFileToLocalDir(data[0].fullPath);

          //this.streamingMedia.playVideo("file://"+data[0].fullPath);
        }
      },
      (err: CaptureError) => {
        console.log("CAPTURE_ERROR", err);

        this.dummyUpload();
        
        this.authservice.dismissLoading();
      }
    );
  }

  dummyUpload() {
    const name = "DummyVideo.mp4";
    this.videourl = "https://appointmentids.s3.amazonaws.com/Appointment/MONROEVILLE%20KIA/KNDPM3AC7J7393422/20201118111456/KNDPM3AC7J7393422_20201118111456.mp4";
    this.imgbase64 = "";
    this.imgurl = "https://appointmentids.s3.amazonaws.com/Appointment/MONROEVILLE%20KIA/Images/KNDPM3AC7J7393422/20201118/KNDPM3AC7J7393422_20201118111456_52889.jpg";
    this.imgname = "DummyImage.jpg";

    let fdata = {
      VideoName: name,
      VideoPath: this.videourl,
      ImagePath: this.imgbase64,
      // ImagePath : this.videourl
    };
    //this.videolist.push(fdata);
    this.files.push(fdata);
    this.vlist.push(this.videourl);
    this.vimglist.push(this.imgurl);
    this.vnlist.push(name);
    this.vimgbaselist.push(this.imgbase64);
    this.vimgnamelist.push(this.imgname);

    console.log('FILES_DATA', JSON.stringify(this.files));
    console.log("VLIST", JSON.stringify(this.vlist));
    console.log("VIMGLIST", JSON.stringify(this.vimglist));
    console.log("VNLIST", JSON.stringify(this.vnlist));
    console.log("VIDLIST", JSON.stringify(this.vidlist));
    console.log("VIMGNAMELIST", JSON.stringify(this.vimgnamelist));
    console.log("VIMGBASELIST", JSON.stringify(this.vimgbaselist));

    this.authservice.setvidlist(this.vidlist);
    this.authservice.setvlist(this.vlist);
    this.authservice.setvimglist(this.vimglist);
    this.authservice.setvnlist(this.vnlist);
    this.authservice.setvimgnamelist(this.vimgnamelist);

    this.authservice.dismissLoading();

    // this.authservice.setvideodata(fdata);
    this.presentAlert4("Video upload successfully");
  }

  copyFileToLocalDir(fullPath) {
    let myPath = fullPath;
    // Make sure we copy from the right location
    if (fullPath.indexOf("file://") < 0) {
      myPath = "file://" + fullPath;
    }

    const ext = myPath.split(".").pop();
    const d = Date.now();
    const newName = `${d}.${ext}`;

    const name = myPath.substr(myPath.lastIndexOf("/") + 1);
    //this.streamingMedia.playVideo(name);
    const copyFrom = myPath.substr(0, myPath.lastIndexOf("/") + 1);
    const copyTo = this.file.documentsDirectory + MEDIA_FOLDER_NAME;

    this.file.copyFile(copyFrom, name, copyTo, newName).then(
      (entries) => {
        let dirpath = entries.nativeURL;
        let dirpathsegment = dirpath.split("/");
        dirpathsegment.pop();
        dirpath = dirpathsegment.join("/");

        var cdate = moment(new Date()).format("YYYYMMDDHHmmss");
        var vin = this.authservice.getvin();
        if (vin == undefined) {
          vin = this.VIN;
        }
        var option: CreateThumbnailOptions = {
          fileUri: dirpath + "/" + entries.name,
          width: 1024,
          height: 300,
          atTime: 3,
          outputFileName: vin + "_" + cdate,
          quality: 50,
        };
        this.videoEditor.createThumbnail(option).then((result) => {
          console.log("Video Result:" + result);
          let imgdirpath = "file://" + result;
          console.log("Video Image Path :" + imgdirpath);
          let fileName = imgdirpath.substr(imgdirpath.lastIndexOf("/") + 1);
          this.imgname = fileName;
          this.imgname = this.imgname.split(".");
          this.imgname = this.imgname[0];
          console.log("Video File Name :" + fileName);
          let imgdirpathsegment = imgdirpath.split("/");
          imgdirpathsegment.pop();
          imgdirpath = imgdirpathsegment.join("/");
          this.file.readAsDataURL(imgdirpath, fileName).then(
            (res) => {
              console.log("THUMBNAIL_BASE64", res);
              const images = [];
              images.push(res);
              var appointmentdata = this.authservice.getappdata();

              this.uploadThumbnail(appointmentdata, images);

              var parts = res.split(",");
              var contentType = parts[0].replace("data:", "");
              var base64 = parts[1];
              this.imgbase64 = base64; 
              // console.log(this.imgbase64);
              // var byteArray = this.base64ToByteArray(base64);
              //  console.log(byteArray);

              //this.file.readAsArrayBuffer(imgdirpath,fileName).then(async (buffer)=>{
              //console.log(buffer);
              //await this.uploadimg(buffer,fileName);
              this.file.readAsArrayBuffer(dirpath, entries.name).then(
                async (buffer) => {
                  //   console.log(buffer);
                  await this.upload(buffer, entries.name);

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
                (err) => this.authservice.dismissLoading()
              );
            },
            (err) => this.authservice.dismissLoading()
          );
        });

        //  this.file.readAsArrayBuffer(dirpath,entries.name).then(async (buffer)=>{
        //    //console.log(buffer);
        //   await this.upload(buffer,entries.name);

        //  },
        //  err => this.authservice.dismissLoading()
        //  )
      },
      (error) => {
        this.authservice.dismissLoading();
      }
    );
  }

  async uploadThumbnail(appointmentdata: any, images: any[]) {
    let uploadedCarImagespath = await this.uploadImages(
      appointmentdata,
      images
    );

    if (uploadedCarImagespath.length > 0) {
      this.imgurl = uploadedCarImagespath[0];
    }
    console.log("THUMBNAIL_PATH", JSON.stringify(uploadedCarImagespath));
  }

  async uploadSingleImage(appointmentdata: any, image: any, imageType: string) {
    let vin = appointmentdata.VIN;
    let app = null;
    if (appointmentdata.AppointmentId != "0") {
      app = "Appointment";
    } else {
      app = "RO";
    }
    let currentTime = moment();
    console.log("now", currentTime);

    let todayDate = currentTime.format("YMMDD");
    console.log("todayDate", todayDate);

    let randomNum = Math.round(Math.random() * 100000);
    console.log("random number", randomNum);

    let imageName =
      vin +
      "_" +
      currentTime.format("YMMDDHHmmss") +
      "_" +
      randomNum +
      "." +
      imageType;
    console.log(imageName);
    let key =
      app +
      "/" +
      this.dealername +
      "/Images/" +
      vin +
      "/" +
      todayDate +
      "/" +
      imageName;

    let path = await this.awsService
      .uploadVideo(key, image)
      .then((data: any) => {
        console.log("upload_url", data.Location);
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

        await this.uploadSingleImage(
          appointmentdata,
          base64data,
          extension
        ).then((path: any) => {
          result.push(path);
        });
      }
    }
    console.log("file upload done");
    return result;
  }

  async uploadimg(buffer, name) {
    let blob = new Blob([new Uint8Array(buffer)], { type: "image/jpeg" });
    console.log(blob);
    let storage = firebase.storage();
    storage
      .ref("images/" + name)
      .put(blob)
      .then(
        (d) => {
          storage
            .ref("images/" + name)
            .getDownloadURL()
            .then(
              (res) => {
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
              (err) => this.authservice.dismissLoading()
            );
          // this.streamingMedia.playVideo(d.downloadURL);
        },
        (err) => this.authservice.dismissLoading()
      );
  }
  async upload(buffer, name) {
    var cdate = moment(new Date()).format("YYYYMMDDHHmmss");
    var vin = this.authservice.getvin();
    if (vin == undefined) {
      vin = this.VIN;
    }
    name = vin + "_" + cdate;
    let blob = new Blob([new Uint8Array(buffer)], { type: "video/mov" });
    console.log(blob);

    return new Promise((resolve, reject) => {
      let time = new Date();
      let bucket = new aws.S3({
        // AKIARH5747A23AQBWOPR
        // s+HtKFkFXKdypjGIBtnLCGZSHJhJotuvOw+hotah
        accessKeyId: "AKIARH5747A24LWHRWKT", //
        secretAccessKey: "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", //
        region: "us-east-1",
      });
      var app;
      var AppointmentId = this.AppointmentId;
      console.log("This Appointment : " + AppointmentId);

      var ROnumber = this.ronumber;
      console.log("This Ro Number : " + ROnumber);

      if (this.AppointmentId == "0") {
        app = "Appointment";
      } else {
        //app = "RO";
        if (this.ronumber != 0) {
          app = "RO";
        } else {
          app = "Appointment";
        }
      }

      const params = {
        Bucket: "appointmentids", //testdoc0101
        Key:
          app +
          "/" +
          this.dealername +
          "/" +
          vin +
          "/" +
          cdate +
          "/" +
          name +
          ".mp4",
        Body: blob,
        ContentType: "video/mp4",
      };

      console.log("params", JSON.stringify(params));

      bucket.upload(params, (err, data) => {
        console.log("VIDEO_UPLOAD_RESPONSE", JSON.stringify(data));
        if (err) {
          console.log('VIDEO_UPLOAD_ERROR', err);
          
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
            VideoName: name,
            VideoPath: this.videourl,
            ImagePath: this.imgbase64,
            // ImagePath : this.videourl
          };
          //this.videolist.push(fdata);
          this.files.push(fdata);
          this.vlist.push(this.videourl);
          this.vimglist.push(this.imgurl);
          this.vnlist.push(name);
          this.vimgbaselist.push(this.imgbase64);
          this.vimgnamelist.push(this.imgname);

          console.log('FILES_DATA', JSON.stringify(this.files));
          console.log("VLIST", JSON.stringify(this.vlist));
          console.log("VIMGLIST", JSON.stringify(this.vimglist));
          console.log("VNLIST", JSON.stringify(this.vnlist));
          console.log("VIDLIST", JSON.stringify(this.vidlist));
          console.log("VIMGNAMELIST", JSON.stringify(this.vimgnamelist));
          console.log("VIMGBASELIST", JSON.stringify(this.vimgbaselist));

          this.authservice.setvidlist(this.vidlist);
          this.authservice.setvlist(this.vlist);
          this.authservice.setvimglist(this.vimglist);
          this.authservice.setvnlist(this.vnlist);
          this.authservice.setvimgnamelist(this.vimgnamelist);

          // this.authservice.setvideodata(fdata);
          this.presentAlert4("Video upload successfully");
          //this.streamingMedia.playVideo(data.Location);
          // resolve(imageName);
        }
      });
    });

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
      header: "ION APPT",
      message: msg,
      buttons: [
        {
          text: "OK",
          handler: () => {
            // this.router.navigateByUrl('/home');
          },
        },
      ],
      backdropDismiss: false,
    });

    await alert.present();
  }

  async remove(i, vid) {
    const alert = await this.alertController.create({
      header: "ION APPT",
      message: "Do you want to delete this video?",
      buttons: [
        {
          text: "Cancel",
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          },
        },
        {
          text: "Ok",
          handler: () => {
            console.log("Video List - 2 : " + this.videolist);
            console.log(i);
            console.log("IS_EDIT :", this.isedit);

            //  this.videolist2 = this.authservice.getvideolist();
            console.log("Video Test List : " + this.videolist);

            if (this.isedit == "true") {
              console.log("Remove Video Id :", JSON.stringify(this.vid));
              console.log("Remove Delar Id : ", JSON.stringify(this.delarid));
              console.log(
                "Remove Appointment Id :",
                JSON.stringify(this.AppointmentId)
              );
              console.log("Remove Ro Number : ", JSON.stringify(this.ronumber));
              console.log("Remove User Id :", JSON.stringify(this.userid));

              this.Videoid = this.vid;
              console.log(this.Videoid);

              this.Videoid = vid;
              console.log(this.Videoid);
              console.log(this.videolist);

              this.authservice
                .DeleteCarVideo(
                  this.Videoid,
                  this.delarid,
                  this.AppointmentId,
                  this.ronumber,
                  this.userid
                )
                .subscribe((res) => {
                  console.log("VIDEO_DELETED", res);
                  this.files.splice(i, 1);
                  this.vlist.splice(i, 1);
                  this.vnlist.splice(i, 1);
                  this.vimglist.splice(i, 1);
                  this.vimgbaselist.splice(i, 1);
                  this.vimgnamelist.splice(i, 1);

                  /*    this.videolist = this.videolist.filter((item => {
                    console.log(item);
                    return item.VideoMasterID != this.Videoid;
            
                  }));
                  console.log(this.videolist);*/
                }, (error) => {
                  console.log("DELETE_VIDEO_ERROR : " + error);
                });
            } else {
              this.files.splice(i, 1);
              this.vlist.splice(i, 1);
              this.vnlist.splice(i, 1);
              this.vimglist.splice(i, 1);
              this.vimgbaselist.splice(i, 1);
              this.vimgnamelist.splice(i, 1);
            }
          },
        },
      ],
    });

    await alert.present();
  }

  playvideo(url) {
    console.log(url);
    this.streamingMedia.playVideo(url);
  }
}
