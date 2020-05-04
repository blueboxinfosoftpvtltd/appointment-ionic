import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalController, ActionSheetController, IonRadioGroup ,Platform, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { AuthService } from '../auth.service';
import { HighlightimagePage } from '../highlightimage/highlightimage.page';
import { Router,ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Base64 } from '@ionic-native/base64/ngx';
import { Observable,Observer } from 'rxjs';
@Component({
  selector: 'app-takeimage',
  templateUrl: './takeimage.page.html',
  styleUrls: ['./takeimage.page.scss'],
})
export class TakeimagePage implements OnInit {
  @ViewChild('radioGroup', {static: false}) radioGroup: IonRadioGroup
  @ViewChild('layout1', {static: false}) canvasRef: any;
  colors = ['#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];
  selectedColor = '#9e2956';
  CompleteImage: any =  [];
  displayorder: any =  [];
  takeimage: any;
  takeorder:any;
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
  orderindex:any;
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
  selectedRadioGroup:any;
  dataReturned: any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem:any;
  myButton: any;
  AppointmentId; any;
  ronumber:any;
  Page: any;
  userid: any;
  delarid: any;
  VIN: any;
  data: any;
  backpage:any;
  isedit:any;
  imglist:any[]=[];
  signlist:any[]=[];
  getres:any;
  constructor(public activatedRoute : ActivatedRoute,public toastCtrl: ToastController,public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController,
    public file: File, public camera: Camera,public modalCtrl : ModalController,private router: Router,
    private authservice:AuthService,private storage: Storage,private base64: Base64) {
      this.imageArray = [];
      // this.OpenModel('dnc',"1");
      
     }
    

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((data)=>{
      console.log(data);
      this.AppointmentId = data.AppointmentId;
      this.Page = data.Page;
      this.VIN = data.VIN;
      this.backpage = data.backpage;
      this.isedit = data.Isedit;
      this.ronumber = data.ROnumber;
    })
    if(this.AppointmentId == undefined){
      this.AppointmentId = "0";
    }
    if(this.ronumber == undefined){
      this.ronumber = "0";
    }
    console.log(this.AppointmentId);
    this.storage.get('dealerid').then((val) => {
      this.delarid = val;
     // console.log(this.dealerid);
   })

   this.storage.get('userid').then((val) => {
     this.userid = val;
     console.log(this.isedit);
     if(this.isedit == "true"){
      var appointmentdata = this.authservice.getappdata();
      var rodata = this.authservice.getrocdata();
       this.authservice.getcarimage(this.delarid,appointmentdata.AppointmentId).subscribe((res =>{
         this.getres = res;
         if(this.getres == null){

         }
         else{
         console.log(this.getres);
         if(this.getres){
          this.CompleteImage =  [];
          this.displayorder =  [];
         for(let i=0 ; i<this.getres.length;i++){
           if(this.getres[i].ImageType == 0){
             this.imglist.push(this.getres[i]);
            
             this.displayorder.push(this.getres[i].DisplayOrder);
              this.getBase64ImageFromURL(this.getres[i].BuketURL).subscribe(base64data => {
              console.log(base64data);
              this["captureDataUrl"+(this.getres[i].DisplayOrder)]='data:image/jpeg;base64,' + base64data;
             this.CompleteImage.push(base64data);
            
             console.log(this.displayorder);
          //this.base64Image = 'data:image/jpg;base64,'+base64data;
        });
            //  this.base64.encodeFile(this.getres[i].BuketURL).then((base64File: string) => {
            //   console.log(base64File);
            //   this.CompleteImage.push(base64File);
            //   this.displayorder.push(i+1);
            // }, (err) => {
            //   console.log(err);
            // });
            //  this.CompleteImage.push(this.getres[i].BuketURL);
             //this.captureDataUrl = "captureDataUrl" + [i+1];
              //this.captureDataUrl=this.getres[i].BuketURL;
             
             console.log(this.captureDataUrl);
           }
           else{
            this.signlist.push(this.getres[i]);
           }
         }
        }
         console.log(this.imglist);
         console.log(this.signlist);
        }
       }))
     }
    // console.log(this.dealerid);
  })
   
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
   if(i == 1){
     if(this.captureDataUrl1 == undefined || this.captureDataUrl1=="../assets/imgs/dd.png"){
      this.presentactionsheet(i);
      //this.OpenModel(this.captureDataUrl1,i);
     }else{
       this.orderindex = i;
      this.OpenModel(this.captureDataUrl1,i);
     }
   }else if(i == 2){
    if(this.captureDataUrl2 == undefined || this.captureDataUrl2=="../assets/imgs/dd.png"){
     this.presentactionsheet(i);
    }else{
      this.orderindex = i;
     this.OpenModel(this.captureDataUrl2,i);
    } 
  }else if(i == 3){
    if(this.captureDataUrl3 == undefined || this.captureDataUrl3=="../assets/imgs/dd.png"){
     this.presentactionsheet(i);
    }else{
      this.orderindex = i;
     this.OpenModel(this.captureDataUrl3,i);
    }
  }else if(i == 4){
    if(this.captureDataUrl4 == undefined || this.captureDataUrl4=="../assets/imgs/dd.png"){
     this.presentactionsheet(i);
    }else{
      this.orderindex = i;
     this.OpenModel(this.captureDataUrl4,i);
    }
  }else if(i == 5){
    if(this.captureDataUrl5 == undefined || this.captureDataUrl5=="../assets/imgs/dd.png"){
     this.presentactionsheet(i);
    }else{
      this.orderindex = i;
     this.OpenModel(this.captureDataUrl5,i);
    }
  }else if(i == 6){
    if(this.captureDataUrl6 == undefined || this.captureDataUrl6=="../assets/imgs/dd.png"){
     this.presentactionsheet(i);
    }else{
      this.orderindex = i;
     this.OpenModel(this.captureDataUrl6,i);
    }
  }else if(i == 7){
    if(this.captureDataUrl7 == undefined || this.captureDataUrl7=="../assets/imgs/dd.png"){
     this.presentactionsheet(i);
    }else{
      this.orderindex = i;
     this.OpenModel(this.captureDataUrl7,i);
    }
  }else if(i == 8){
    if(this.captureDataUrl8 == undefined || this.captureDataUrl8=="../assets/imgs/dd.png"){
     this.presentactionsheet(i);
    }else{
      this.orderindex = i;
     this.OpenModel(this.captureDataUrl8,i);
    }
  }else if(i == 9){
    if(this.captureDataUrl9 == undefined || this.captureDataUrl9=="../assets/imgs/dd.png"){
     this.presentactionsheet(i);
    }else{
      this.orderindex = i;
     this.OpenModel(this.captureDataUrl9,i);
    }
  }else if(i == 10){
    if(this.captureDataUrl10 == undefined || this.captureDataUrl10=="../assets/imgs/dd.png"){
     this.presentactionsheet(i);
    }else{
      this.orderindex = i;
     this.OpenModel(this.captureDataUrl10,i);
    }
  }else if(i == 11){
    if(this.captureDataUrl11 == undefined || this.captureDataUrl11=="../assets/imgs/dd.png"){
     this.presentactionsheet(i);
    }else{
      this.orderindex = i;
     this.OpenModel(this.captureDataUrl11,i);
    }
  }else if(i == 12){
    if(this.captureDataUrl12 == undefined || this.captureDataUrl12=="../assets/imgs/dd.png"){
     this.presentactionsheet(i);
    }else{
      this.orderindex = i;
     this.OpenModel(this.captureDataUrl12,i);
    }
  }else if(i == 13){
    if(this.captureDataUrl13 == undefined || this.captureDataUrl13=="../assets/imgs/dd.png"){
     this.presentactionsheet(i);
    }else{
      this.orderindex = i;
     this.OpenModel(this.captureDataUrl13,i);
    }
  }

  }

  async presentactionsheet(i){
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

  async OpenModel(img,i) {
    const modal = await this.modalCtrl.create({
      component: HighlightimagePage,
      componentProps: {
        "paramID": i,
        "paramImage": img
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        console.log(dataReturned);
        if(this.dataReturned.ID == 1){
          this.captureDataUrl1 = this.dataReturned.Image;
          this.Id1 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 2){
          this.captureDataUrl2 = this.dataReturned.Image;
          this.Id2 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 3){
          this.captureDataUrl3 = this.dataReturned.Image;
          this.Id3 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 4){
          this.captureDataUrl4 = this.dataReturned.Image;
          this.Id4 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 5){
          this.captureDataUrl5 = this.dataReturned.Image;
          this.Id5 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 6){
          this.captureDataUrl6 = this.dataReturned.Image;
          this.Id6 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 7){
          this.captureDataUrl7 = this.dataReturned.Image;
          this.Id7 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 8){
          this.captureDataUrl8 = this.dataReturned.Image;
          this.Id8 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 9){
          this.captureDataUrl9 = this.dataReturned.Image;
          this.Id9 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 10){
          this.captureDataUrl10 = this.dataReturned.Image;
          this.Id10 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 11){
          this.captureDataUrl11 = this.dataReturned.Image;
          this.Id11 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 12){
          this.captureDataUrl12 = this.dataReturned.Image;
          this.Id12 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 13){
          this.captureDataUrl13 = this.dataReturned.Image;
          this.Id13 = this.dataReturned.ID;
        }
        if(this.CompleteImage.length == 0){
          if(this.dataReturned.Image != "../assets/imgs/dd.png"){
          this.CompleteImage.push(this.dataReturned.Image);
          this.displayorder.push(this.dataReturned.ID);
          }
      }
      else{
        for(let i=0 ; i<this.displayorder.length;i++){
          if(Number(this.dataReturned.ID) == this.displayorder[i]){
            this.CompleteImage.splice(Number(this.dataReturned.ID),1);
            this.displayorder.splice(Number(this.dataReturned.ID),1);
          }
          else{
            if(this.dataReturned.Image != "../assets/imgs/dd.png"){
            this.CompleteImage.push(this.dataReturned.Image);
            this.displayorder.push(this.dataReturned.ID);
            }
          }
        }
      
      }
        
      }
      else{
        if(this.dataReturned.ID == 1){
          this.captureDataUrl1 = "../assets/imgs/dd.png";
          this.Id1 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 2){
          this.captureDataUrl2 = "../assets/imgs/dd.png";
          this.Id2 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 3){
          this.captureDataUrl3 = "../assets/imgs/dd.png";
          this.Id3 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 4){
          this.captureDataUrl4 = "../assets/imgs/dd.png";
          this.Id4 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 5){
          this.captureDataUrl5 = "../assets/imgs/dd.png";
          this.Id5 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 6){
          this.captureDataUrl6 = "../assets/imgs/dd.png";
          this.Id6 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 7){
          this.captureDataUrl7 = "../assets/imgs/dd.png";
          this.Id7 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 8){
          this.captureDataUrl8 = "../assets/imgs/dd.png";
          this.Id8 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 9){
          this.captureDataUrl9 = "../assets/imgs/dd.png";
          this.Id9 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 10){
          this.captureDataUrl10 = "../assets/imgs/dd.png";
          this.Id10 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 11){
          this.captureDataUrl11 = "../assets/imgs/dd.png";
          this.Id11 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 12){
          this.captureDataUrl12 = "../assets/imgs/dd.png";
          this.Id12 = this.dataReturned.ID;
        }
        if(this.dataReturned.ID == 13){
          this.captureDataUrl13 = "../assets/imgs/dd.png";
          this.Id13 = this.dataReturned.ID;
        }

            this.CompleteImage.splice(Number(this.dataReturned.ID),1);
            this.displayorder.splice(Number(this.dataReturned.ID),1);
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
          this.OpenModel(this.captureDataUrl,i);
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
        ImagePath : imageData,
        displayorder: i
      }
      this.orderindex = i;
      // this.CompleteImage.push(imageData);
      // this.displayorder.push(i);
      this.OpenModel(this.captureDataUrl,i);
      console.log(this.captureDataUrl);
    }, (err) => {
    })
  }

  show(){
  console.log(this.imageArray);
  }

  Next(){
    console.log( this.CompleteImage);
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
    if(this.AppointmentId == "true"){
    let imgdata={
      "DealershipID":appointmentdata.DealershipId,
      "AppointmentID":appointmentdata.AppointmentId,
      "RONumber":"0",
      "VIN":appointmentdata.VIN,
      "CreatedBy":appointmentdata.CreatedBy,
      "ImageType": "0",
      "ImagePathList": this.takeimage,
      "DisplayOrderList": this.takeorder
      // "type": "0",
      // "CompleteImage": this.takeimage,
      // "takeorder": this.takeorder
    }
    this.authservice.setimagedata(imgdata);
    this.router.navigate(['/signature'],{ queryParams: {app :true} });
  }
   else{
    let imgdata={
      "DealershipID":rodata.dlrid,
      "AppointmentID":"0",
      "RONumber":"0",
      "VIN":rodata.vin,
      "CreatedBy":rodata.uid,
      "ImageType": "0",
      "ImagePathList": this.takeimage,
      "DisplayOrderList": this.takeorder
      // "type": "0",
      // "CompleteImage": this.takeimage,
      // "takeorder": this.takeorder
    }
    this.authservice.setimagedata(imgdata);
    this.router.navigate(['/signature'],{ queryParams: {ro :true} });
   }
   //}
  }

  skip(){
    console.log( this.CompleteImage);
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
    if(this.AppointmentId == "true"){
    let imgdata={
      "DealershipID":appointmentdata.DealershipId,
      "AppointmentID":appointmentdata.AppointmentId,
      "RONumber":"0",
      "VIN":appointmentdata.VIN,
      "CreatedBy":appointmentdata.CreatedBy,
      "ImageType": "0",
      "ImagePathList": this.takeimage,
      "DisplayOrderList": this.takeorder
      // "type": "0",
      // "CompleteImage": this.takeimage,
      // "takeorder": this.takeorder
    }
    this.authservice.setimagedata(imgdata);
    this.router.navigate(['/signature'],{ queryParams: {app :true} });
  }
   else{
    let imgdata={
      "DealershipID":rodata.dlrid,
      "AppointmentID":"0",
      "RONumber":"0",
      "VIN":rodata.vin,
      "CreatedBy":rodata.uid,
      "ImageType": "0",
      "ImagePathList": this.takeimage,
      "DisplayOrderList": this.takeorder
      // "type": "0",
      // "CompleteImage": this.takeimage,
      // "takeorder": this.takeorder
    }
    this.authservice.setimagedata(imgdata);
    this.router.navigate(['/signature'],{ queryParams: {ro :true} });
   }
    // this.router.navigate(['/signature'],{ queryParams: {AppointmentId : this.AppointmentId , Page:"Signatue",VIN: this.VIN} });
  }

  Save(){
    console.log(this.CompleteImage);
    this.takeimage = this.CompleteImage.join();
    this.takeorder = this.displayorder.join();
    if(this.CompleteImage.length == 0){
      this.authservice.showToast("Select Image First");
     }else{
    
     if(this.Page){
      this.authservice.presentLoading();
     this.authservice.CarImageInsert(this.delarid,this.AppointmentId,this.VIN,this.userid,"0",this.takeimage,this.takeorder,"0").subscribe(res =>{
       this.data = res;
       console.log(this.data);
       this.authservice.dismissLoading();
       this.authservice.showToast(this.data.Message);
       this.router.navigateByUrl('/home');
      //  this.router.navigate(['/signature'],{ queryParams: {AppointmentId : this.AppointmentId , Page: this.Page,VIN: this.VIN,ROnumber : this.ronumber} });
     })
     }
     else{
    var appointmentdata = this.authservice.getappdata();
    var rodata = this.authservice.getrocdata();
    if(this.AppointmentId == "true"){
    let imgdata={
      "DealershipID":appointmentdata.DealershipId,
      "AppointmentID":appointmentdata.AppointmentId,
      "RONumber":"0",
      "VIN":appointmentdata.VIN,
      "CreatedBy":appointmentdata.CreatedBy,
      "ImageType": "0",
      "ImagePathList": this.takeimage,
      "DisplayOrderList": this.takeorder
      // "type": "0",
      // "CompleteImage": this.takeimage,
      // "takeorder": this.takeorder
    }
    this.authservice.setimagedata(imgdata);
    this.router.navigate(['/signature'],{ queryParams: {app :true} });
  }
   else{
    let imgdata={
      "DealershipID":rodata.dlrid,
      "AppointmentID":"0",
      "RONumber":"0",
      "VIN":rodata.vin,
      "CreatedBy":rodata.uid,
      "ImageType": "0",
      "ImagePathList": this.takeimage,
      "DisplayOrderList": this.takeorder
      // "type": "0",
      // "CompleteImage": this.takeimage,
      // "takeorder": this.takeorder
    }
    this.authservice.setimagedata(imgdata);
    this.router.navigate(['/signature'],{ queryParams: {ro :true} });
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

}
