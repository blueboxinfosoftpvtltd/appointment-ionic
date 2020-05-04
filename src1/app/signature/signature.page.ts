import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Router,ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthService } from '../auth.service';
import { IfStmt } from '@angular/compiler';
import { Location } from "@angular/common";
@Component({
  selector: 'app-signature',
  templateUrl: './signature.page.html',
  styleUrls: ['./signature.page.scss'],
})
export class SignaturePage implements OnInit {
  @ViewChild(SignaturePad, {static: false}) signaturePad: SignaturePad;
  AppointmentId; any;
  Page: any;
  userid: any;
  delarid: any;
  VIN: any;
  data: any;
  array: any;
  finalsignature: any =Array();
  public signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 300,
    'canvasHeight': 300,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };
  isDrawing: any;
  signature: any;
  constructor(private router: Router,public activatedRoute : ActivatedRoute, private authservice:AuthService,private storage: Storage,private loc : Location) { 
    this.activatedRoute.queryParams.subscribe((data)=>{
      console.log(data);
      this.AppointmentId = data.AppointmentId;
      this.Page = data.Page;
      this.VIN = data.VIN
    })
    console.log(this.AppointmentId);
  }

  ngOnInit() {
    this.storage.get('dealerid').then((val) => {
      this.delarid = val;
     // console.log(this.dealerid);
   })

   this.storage.get('userid').then((val) => {
     this.userid = val;
    // console.log(this.dealerid);
  })
  }

  ionViewDidEnter() {
    this.signaturePad.clear();
  }

  drawComplete() {
    this.isDrawing = false;
  }

  drawStart() {
    this.isDrawing = true;
  }

  finish(){
    
    this.router.navigateByUrl('/home');
  }

  savePad() {
    this.signature = this.signaturePad.toDataURL();
    var data1 = { "image1": this.signature };
    
    let object = {
      ImagePath : this.signature,
      displayorder: "0"
    }
    this.finalsignature.push(this.signature);
    console.log(this.signature);

    if(this.Page){
      this.authservice.presentLoading();
      this.authservice.CarImageInsert(this.delarid,this.AppointmentId,this.VIN,this.userid,"1",   this.signature.split(',').pop() ,"0").subscribe(res =>{
        this.data = res;
        console.log(this.data);
        this.authservice.dismissLoading();
        this.authservice.showToast(this.data.Message);
        this.router.navigateByUrl('/home');
      })
    }else{
      this.router.navigateByUrl('/home');
    }       
  }

  prev(){
   this.loc.back();
  }

  clearPad() {
    this.signaturePad.clear();
  }


}
