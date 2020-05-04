import { Component, OnInit } from '@angular/core';
import {  PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverCtrl: PopoverController,private router: Router,private mediaCapture: MediaCapture) { }

  ngOnInit() {
  }

  close(){
      this.popoverCtrl.dismiss().then(() => {  });
    }

  takesignature(){
    this.router.navigate(['/createappointment']);
    this.close();
  }

  takeimage(){
    this.router.navigate(['/createappointment']);
    this.close();
  }

  takevideo(){
    this.close();
    let options: CaptureImageOptions = { limit: 3 };
    this.mediaCapture.captureVideo()
    .then(
      (data: MediaFile[]) =>{ console.log(data);
        this.router.navigate(['/playvideo']);
      },
      (err: CaptureError) => console.error(err)
    );    
  }
  }

