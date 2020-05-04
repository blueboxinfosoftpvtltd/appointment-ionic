import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController, IonRadioGroup, Platform, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthService } from 'src/app/auth.service';
import { Location } from "@angular/common";
import { HighlightimagePage } from '../highlightimage/highlightimage.page';
@Component({
  selector: 'app-moreimage',
  templateUrl: './moreimage.page.html',
  styleUrls: ['./moreimage.page.scss'],
})
export class MoreimagePage implements OnInit {

  images: any[] = [];
  captureDataUrl: any;
  simages:any[]=[];
  eimage : any;
  dataReturned:any;
  curl:any;
  constructor(public camera: Camera, public actionSheetCtrl: ActionSheetController,private auth : AuthService, private loc: Location,public modalCtrl: ModalController) { }

  ngOnInit() {
    this.eimage=this.auth.geimage();
    if(this.eimage){
      for(let i=0;i<this.eimage.length;i++){
        this.images.push('data:image/jpeg;base64,' + this.eimage[i]);
        this.simages.push(this.eimage[i]);
      }
      this.auth.seimage(this.simages);
    }
  }

  takeimage() {
  this.presentactionsheet();
//  this.curl = this.curl.split(',');
//  //this.images.push(this.curl[1]);
//  var i = this.images.length;
//  this.OpenModel(this.curl,-1);
    
  }
  edit(i,img){
    this.OpenModel(img,i);
  }

  async presentactionsheet() {
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Option',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          handler: () => {
            this.takephoto();
          }
        },
        {
          text: 'Choose photo from Gallery',
          handler: () => {
            this.openGallery();
          }
        },
      ]
    });
    actionSheet.present();
  }

  async takephoto() {
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
          this.OpenModel(this.captureDataUrl,-1);
        }
      }, (err) => {
        console.log(err);
      });


  }

  openGallery() {
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
      //this.images.push(this.captureDataUrl);
      //this.simages.push(imageData);
      var i = this.images.length;
      this.OpenModel(this.captureDataUrl,-1);
    }, (err) => {
    })
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
         if(this.dataReturned.ID == -1){
          this.images.push(this.dataReturned.Image);
          this.dataReturned.Image  = this.dataReturned.Image.split(',');
         this.simages.push(this.dataReturned.Image[1]);
         }
         else{
          this.images.splice(this.dataReturned.ID,1);
           this.images.splice(this.dataReturned.ID,0,this.dataReturned.Image);
           this.simages.splice(this.dataReturned.ID,1);
           this.dataReturned.Image  = this.dataReturned.Image.split(',');
           //this.simages = this.dataReturned.Image[1];
           this.simages.splice(this.dataReturned.ID,0,this.dataReturned.Image[1]);
         }
         
        
        //  if (this.dataReturned.ID == 1) {
        //    this.captureDataUrl1 = this.dataReturned.Image;
        //    this.Id1 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 2) {
        //    this.captureDataUrl2 = this.dataReturned.Image;
        //    this.Id2 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 3) {
        //    this.captureDataUrl3 = this.dataReturned.Image;
        //    this.Id3 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 4) {
        //    this.captureDataUrl4 = this.dataReturned.Image;
        //    this.Id4 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 5) {
        //    this.captureDataUrl5 = this.dataReturned.Image;
        //    this.Id5 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 6) {
        //    this.captureDataUrl6 = this.dataReturned.Image;
        //    this.Id6 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 7) {
        //    this.captureDataUrl7 = this.dataReturned.Image;
        //    this.Id7 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 8) {
        //    this.captureDataUrl8 = this.dataReturned.Image;
        //    this.Id8 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 9) {
        //    this.captureDataUrl9 = this.dataReturned.Image;
        //    this.Id9 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 10) {
        //    this.captureDataUrl10 = this.dataReturned.Image;
        //    this.Id10 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 11) {
        //    this.captureDataUrl11 = this.dataReturned.Image;
        //    this.Id11 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 12) {
        //    this.captureDataUrl12 = this.dataReturned.Image;
        //    this.Id12 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 13) {
        //    this.captureDataUrl13 = this.dataReturned.Image;
        //    this.Id13 = this.dataReturned.ID;
        //  }
        //  if (this.CompleteImage.length == 0) {
        //    if (this.dataReturned.Image != "../assets/imgs/dd.png") {
        //      this.CompleteImage.push(this.dataReturned.Image);
        //      this.displayorder.push(this.dataReturned.ID);
        //    }
        //  }
        //  else {
        //    for (let i = 0; i < this.displayorder.length; i++) {
        //      if (Number(this.dataReturned.ID) == this.displayorder[i]) {
        //        this.CompleteImage.splice(Number(this.dataReturned.ID), 1);
        //        this.displayorder.splice(Number(this.dataReturned.ID), 1);
        //      }
        //      else {
        //        if (this.dataReturned.Image != "../assets/imgs/dd.png") {
        //          this.CompleteImage.push(this.dataReturned.Image);
        //          this.displayorder.push(this.dataReturned.ID);
        //        }
        //      }
        //    }
 
        //  }
 
       }
       else {
        //  if (this.dataReturned.ID == 1) {
        //    this.captureDataUrl1 = "../assets/imgs/dd.png";
        //    this.Id1 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 2) {
        //    this.captureDataUrl2 = "../assets/imgs/dd.png";
        //    this.Id2 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 3) {
        //    this.captureDataUrl3 = "../assets/imgs/dd.png";
        //    this.Id3 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 4) {
        //    this.captureDataUrl4 = "../assets/imgs/dd.png";
        //    this.Id4 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 5) {
        //    this.captureDataUrl5 = "../assets/imgs/dd.png";
        //    this.Id5 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 6) {
        //    this.captureDataUrl6 = "../assets/imgs/dd.png";
        //    this.Id6 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 7) {
        //    this.captureDataUrl7 = "../assets/imgs/dd.png";
        //    this.Id7 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 8) {
        //    this.captureDataUrl8 = "../assets/imgs/dd.png";
        //    this.Id8 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 9) {
        //    this.captureDataUrl9 = "../assets/imgs/dd.png";
        //    this.Id9 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 10) {
        //    this.captureDataUrl10 = "../assets/imgs/dd.png";
        //    this.Id10 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 11) {
        //    this.captureDataUrl11 = "../assets/imgs/dd.png";
        //    this.Id11 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 12) {
        //    this.captureDataUrl12 = "../assets/imgs/dd.png";
        //    this.Id12 = this.dataReturned.ID;
        //  }
        //  if (this.dataReturned.ID == 13) {
        //    this.captureDataUrl13 = "../assets/imgs/dd.png";
        //    this.Id13 = this.dataReturned.ID;
        //  }
 
        //  this.CompleteImage.splice(Number(this.dataReturned.ID), 1);
        //  this.displayorder.splice(Number(this.dataReturned.ID), 1);
        //  // for(let i=0 ;i<this.CompleteImage.length;i++){
         //   if(this.dataReturned.Image == this.CompleteImage[i]){
         //     this.CompleteImage.splice(i,1);
         //     this.displayorder.splice(i,1);
         //   }
         // }
       }
 
     });
 
     return await modal.present();
   }

  save(){

    // for(let i =0 ; i<this.images.length;i++){
    //   var str = this.images[i];
    //   str = str.split(',');
    //   this.simages.push(str[1]);
    // }
    this.auth.seimage(this.simages);
    this.loc.back();
  }

  remove(i) {
    this.images.splice(i, 1);
  }


}
