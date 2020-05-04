import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalController, NavParams,ActionSheetController, IonRadioGroup ,Platform, LoadingController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-highlightimage',
  templateUrl: './highlightimage.page.html',
  styleUrls: ['./highlightimage.page.scss'],
})
export class HighlightimagePage implements OnInit {
  @ViewChild('radioGroup', {static: false}) radioGroup: IonRadioGroup
  @ViewChild('layout', {static: false}) canvasRef: any;
  colors = ['#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];
  selectedColor = '#9e2956';
  CompleteImage: Array<string> = new Array();
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
  saveX: number;
  saveY: number;
  imageArray: any;
  canvasImage: any;
  currentDateTime: any;
  selectedRadioGroup:any;
  dataReturned: any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem:any;
  modalImage: any;
  modelId: any;
  imgComment: Array<string> = new Array();
  constructor(public toastCtrl: ToastController,public modalCtrl : ModalController,private navParams: NavParams,
    public actionSheetCtrl: ActionSheetController) {
   }

  ngOnInit() {  
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.captureDataUrl = this.navParams.data.paramImage;
    console.log(this.captureDataUrl);
    setTimeout(() => {
      this.imageLoad();
    }, 1000);
  }



  async closeModal() {
    // const onClosedData: string = "Wrapped Up!";
    if(this.canvasImage == undefined){
      this.canvasImage = this.captureDataUrl;
    }
    // if(this.canvasImage == undefined || this.canvasImage == null || this.canvasImage == "" || this.canvasImage == "null"){
    //   this.canvasImage = null;
    // }
    // else{
    //   this.canvasImage = this.captureDataUrl;
    // }
    console.log(this.canvasImage);
    await this.modalCtrl.dismiss({ 'ID':this.modelId,'Image':this.canvasImage});
  }

  imageLoad() {
    this.image = this.captureDataUrl;
    if (this.image) {
      this.afterImageLoad();
    }
  }

  afterImageLoad() {
    let canvas = this.canvasRef.nativeElement;
    let context = canvas.getContext('2d');

    let source = new Image();
    source.crossOrigin = 'Anonymous';
    source.onload = () => {
      source.height = 500;
      source.width = 300;
      canvas.height = source.height;
      canvas.width = source.width;
      context.drawImage(source, 10, 10);
      this.image = canvas.toDataURL();
    };
    source.src = this.image;

    console.log(this.image);
  }

  clearCanvas() {
    //this.canvasImage = '../assets/imgs/dd.png';
    this.canvasElement = this.canvasRef.nativeElement;
    //var canvasPosition = this.canvasElement.getBoundingClientRect();
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.image = this.captureDataUrl;
    if (this.image) {
      this.afterImageLoad();
    }
    //this.closeModal();
  }

  selectColor(color: any) {
    this.selectedColor = color;
    this.CompleteImage = [];
  }

  async startDrawing(ev: any) {

      this.canvasElement = this.canvasRef.nativeElement;
      var canvasPosition = this.canvasElement.getBoundingClientRect();

      this.saveX = ev.touches[0].pageX - canvasPosition.x;
      this.saveY = ev.touches[0].pageY - canvasPosition.y;
    
  }

  
  radioGroupChange(event) {
    console.log("radioGroupChange",event.detail);
    this.selectedRadioGroup = event.detail;
  }
 
  radioFocus() {
    console.log("radioFocus");
  }

  radioSelect(event) {
    console.log("radioSelect",event.detail);
    this.selectedRadioItem = event.detail;
  }

  radioBlur() {
    console.log("radioBlur");
  }

  async moved(ev: any) { 
      this.canvasElement = this.canvasRef.nativeElement;
      var canvasPosition = this.canvasElement.getBoundingClientRect();
      let ctx = this.canvasElement.getContext('2d');
      let currentX = ev.touches[0].pageX - canvasPosition.x;
      let currentY = ev.touches[0].pageY - canvasPosition.y;

      ctx.lineJoin = 'round';
      ctx.strokeStyle = this.selectedColor;
      ctx.lineWidth = 5;

      ctx.beginPath();
      ctx.moveTo(this.saveX, this.saveY);
      ctx.lineTo(currentX, currentY);
      ctx.closePath();

      ctx.stroke();

      this.saveX = currentX;
      this.saveY = currentY;
  }


  savePad() {
    console.log(this.canvasElement);
    if(this.canvasElement == undefined){
      this.canvasImage = this.captureDataUrl;
    }else{
      this.canvasImage = this.canvasElement.toDataURL();
    }
    
    //this.CompleteImage.push(this.canvasImage);
    console.log(this.canvasImage);
    console.log(this.CompleteImage);
    this.closeModal();
   
  }
  

}
