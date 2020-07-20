import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoEditor } from '@ionic-native/video-editor/ngx';
import { File } from '@ionic-native/file/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { isUndefined } from 'util';
@Component({
  selector: 'app-searchappoinment',
  templateUrl: './searchappoinment.page.html',
  styleUrls: ['./searchappoinment.page.scss'],
})
export class SearchappoinmentPage implements OnInit {
  currentdate: any;
  fname: any;
  lname: any;
  vin: any;
  appointmentlist: any;
  dealerid: any;
  currentdate1: any;
  IsShow: any;
  Page: any;
  selectval: any;
  rono: any;
  choice: any;
  constructor(private file: File, private videoEditor: VideoEditor, private mediaCapture: MediaCapture, public activatedRoute: ActivatedRoute, private authservice: AuthService, private storage: Storage, public datepipe: DatePipe,
    private router: Router) {
    this.IsShow = false;
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data);
      this.Page = data.Page;
    })
  }

  ngOnInit() {
    this.storage.get('dealerid').then((val) => {
      console.log('dealerid', val);
      this.dealerid = val;
    });
  }

  radioGroupChange(e) {
    console.log(e.detail);
    this.selectval = e.detail.value;
  }
  SearchAppointment() {
    if (this.selectval == "appt") {
      if (this.currentdate == '' || this.currentdate == undefined || this.currentdate == null) {
        if (this.vin == '' || this.vin == undefined || this.vin == null) {
          if (this.fname == '' || this.fname == undefined || this.fname == null) {
            if (this.lname == '' || this.lname == undefined || this.lname == null) {
              this.authservice.showToast("Fill atleast one field");
            }
            else {
              this.authservice.presentLoading();
              if (this.currentdate != undefined || this.currentdate != null || this.currentdate != '') {
                this.currentdate1 = this.datepipe.transform(this.currentdate, 'MM/dd/yyyy');
              }
              console.log(this.currentdate1);
              if (this.selectval == "appt") {
                if (this.currentdate == '' || this.currentdate == undefined || this.currentdate == null) {
                  this.currentdate1 = "1900/01/01"
                }
                this.authservice.SearchAppointment(this.currentdate1, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
                  this.appointmentlist = res;
                  this.IsShow = true;
                  console.log(this.appointmentlist);
                  this.authservice.dismissLoading();
                })
              }
              else if (this.selectval == "ro") {
                if(this.rono == undefined){
                  this.rono = "";
                }
                this.authservice.Searchro(this.rono, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
                  this.appointmentlist = res;
                  this.IsShow = true;
                  console.log(this.appointmentlist);
                  this.authservice.dismissLoading();
                })
              }

            }
          }

          else {
            this.authservice.presentLoading();
            if (this.currentdate != undefined || this.currentdate != null || this.currentdate != '') {
              this.currentdate1 = this.datepipe.transform(this.currentdate, 'MM/dd/yyyy');
            }
            console.log(this.currentdate1);
            if (this.selectval == "appt") {
              if (this.currentdate == '' || this.currentdate == undefined || this.currentdate == null) {
                this.currentdate1 = "1900/01/01"
              }
              this.authservice.SearchAppointment(this.currentdate1, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
                this.appointmentlist = res;
                this.IsShow = true;
                console.log(this.appointmentlist);
                this.authservice.dismissLoading();
              })
            }
            else if (this.selectval == "ro") {
              if(this.rono == undefined){
                this.rono = "";
              }
              this.authservice.Searchro(this.rono, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
                this.appointmentlist = res;
                this.IsShow = true;
                console.log(this.appointmentlist);
                this.authservice.dismissLoading();
              })
            }

          }
        }
        else {
          this.authservice.presentLoading();
          if (this.currentdate != undefined || this.currentdate != null || this.currentdate != '') {
            this.currentdate1 = this.datepipe.transform(this.currentdate, 'MM/dd/yyyy');
          }
          console.log(this.currentdate1);
          if (this.selectval == "appt") {
            if (this.currentdate == '' || this.currentdate == undefined || this.currentdate == null) {
              this.currentdate1 = "1900/01/01"
            }
            this.authservice.SearchAppointment(this.currentdate1, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
              this.appointmentlist = res;
              this.IsShow = true;
              console.log(this.appointmentlist);
              this.authservice.dismissLoading();
            })
          }
          else if (this.selectval == "ro") {
            if(this.rono == undefined){
              this.rono = "";
            }
            this.authservice.Searchro(this.rono, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
              this.appointmentlist = res;
              this.IsShow = true;
              console.log(this.appointmentlist);
              this.authservice.dismissLoading();
            })
          }

        }
        //  this.authservice.showToast("Select Date");
        // }else{
        // this.authservice.presentLoading();    
        // this.currentdate1 =this.datepipe.transform(this.currentdate, 'MM/dd/yyyy');
        // console.log(this.currentdate1);
        // this.authservice.SearchAppointment(this.currentdate1,this.dealerid,this.fname,this.lname,this.vin).subscribe(res =>{
        //   this.appointmentlist = res;
        //   this.IsShow = true;
        //   console.log(this.appointmentlist);
        //   this.authservice.dismissLoading();
        // })
      }
      else {
        this.authservice.presentLoading();
        if (this.currentdate != undefined || this.currentdate != null || this.currentdate != '') {
          this.currentdate1 = this.datepipe.transform(this.currentdate, 'MM/dd/yyyy');
        }
        console.log(this.currentdate1);
        if (this.selectval == "appt") {
          if (this.currentdate == '' || this.currentdate == undefined || this.currentdate == null) {
            this.currentdate1 = "1900/01/01"
          }
          this.authservice.SearchAppointment(this.currentdate1, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
            this.appointmentlist = res;
            this.IsShow = true;
            console.log(this.appointmentlist);
            this.authservice.dismissLoading();
          })
        }
        else if (this.selectval == "ro") {
          if(this.rono == undefined){
            this.rono = "";
          }
          this.authservice.Searchro(this.rono, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
            this.appointmentlist = res;
            this.IsShow = true;
            console.log(this.appointmentlist);
            this.authservice.dismissLoading();
          })
        }

      }
    }
    // else {
    //   this.authservice.showToast("Please select type");
    // }

    else if (this.selectval == "ro") {
      if (this.rono == '' || this.rono == undefined || this.rono == null) {
        if (this.vin == '' || this.vin == undefined || this.vin == null) {
          if (this.fname == '' || this.fname == undefined || this.fname == null) {
            if (this.lname == '' || this.lname == undefined || this.lname == null) {
              this.authservice.showToast("Fill atleast one field");
            }
            else {
              this.authservice.presentLoading();
              if (this.currentdate != undefined || this.currentdate != null || this.currentdate != '') {
                this.currentdate1 = this.datepipe.transform(this.currentdate, 'MM/dd/yyyy');
              }
              console.log(this.currentdate1);
              if (this.selectval == "appt") {
                if (this.currentdate == '' || this.currentdate == undefined || this.currentdate == null) {
                  this.currentdate1 = "1900/01/01"
                }
                this.authservice.SearchAppointment(this.currentdate1, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
                  this.appointmentlist = res;
                  this.IsShow = true;
                  console.log(this.appointmentlist);
                  this.authservice.dismissLoading();
                })
              }
              else if (this.selectval == "ro") {
                if(this.rono == undefined){
                  this.rono = "";
                }
                this.authservice.Searchro(this.rono, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
                  this.appointmentlist = res;
                  this.IsShow = true;
                  console.log(this.appointmentlist);
                  this.authservice.dismissLoading();
                })
              }

            }
          }

          else {
            this.authservice.presentLoading();
            if (this.currentdate != undefined || this.currentdate != null || this.currentdate != '') {
              this.currentdate1 = this.datepipe.transform(this.currentdate, 'MM/dd/yyyy');
            }
            console.log(this.currentdate1);
            if (this.selectval == "appt") {
              if (this.currentdate == '' || this.currentdate == undefined || this.currentdate == null) {
                this.currentdate1 = "1900/01/01"
              }
              this.authservice.SearchAppointment(this.currentdate1, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
                this.appointmentlist = res;
                this.IsShow = true;
                console.log(this.appointmentlist);
                this.authservice.dismissLoading();
              })
            }
            else if (this.selectval == "ro") {
              if(this.rono == undefined){
                this.rono = "";
              }
              this.authservice.Searchro(this.rono, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
                this.appointmentlist = res;
                this.IsShow = true;
                console.log(this.appointmentlist);
                this.authservice.dismissLoading();
              })
            }

          }
        }
        else {
          this.authservice.presentLoading();
          if (this.currentdate != undefined || this.currentdate != null || this.currentdate != '') {
            this.currentdate1 = this.datepipe.transform(this.currentdate, 'MM/dd/yyyy');
          }
          console.log(this.currentdate1);
          if (this.selectval == "appt") {
            if (this.currentdate == '' || this.currentdate == undefined || this.currentdate == null) {
              this.currentdate1 = "1900/01/01"
            }
            this.authservice.SearchAppointment(this.currentdate1, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
              this.appointmentlist = res;
              this.IsShow = true;
              console.log(this.appointmentlist);
              this.authservice.dismissLoading();
            })
          }
          else if (this.selectval == "ro") {
            if(this.rono == undefined){
              this.rono = "";
            }
            this.authservice.Searchro(this.rono, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
              this.appointmentlist = res;
              this.IsShow = true;
              console.log(this.appointmentlist);
              this.authservice.dismissLoading();
            })
          }

        }
        //  this.authservice.showToast("Select Date");
        // }else{
        // this.authservice.presentLoading();    
        // this.currentdate1 =this.datepipe.transform(this.currentdate, 'MM/dd/yyyy');
        // console.log(this.currentdate1);
        // this.authservice.SearchAppointment(this.currentdate1,this.dealerid,this.fname,this.lname,this.vin).subscribe(res =>{
        //   this.appointmentlist = res;
        //   this.IsShow = true;
        //   console.log(this.appointmentlist);
        //   this.authservice.dismissLoading();
        // })
      }
      else {
        this.authservice.presentLoading();
        if (this.currentdate != undefined || this.currentdate != null || this.currentdate != '') {
          this.currentdate1 = this.datepipe.transform(this.currentdate, 'MM/dd/yyyy');
        }
        console.log(this.currentdate1);
        if (this.selectval == "appt") {
          if (this.currentdate == '' || this.currentdate == undefined || this.currentdate == null) {
            this.currentdate1 = "1900/01/01"
          }
          this.authservice.SearchAppointment(this.currentdate1, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
            this.appointmentlist = res;
            this.IsShow = true;
            console.log(this.appointmentlist);
            this.authservice.dismissLoading();
          })
        }
        else if (this.selectval == "ro") {
          if(this.rono == undefined){
            this.rono = "";
          }
          this.authservice.Searchro(this.rono, this.dealerid, this.fname, this.lname, this.vin).subscribe(res => {
            this.appointmentlist = res;
            this.IsShow = true;
            console.log(this.appointmentlist);
            this.authservice.dismissLoading();
          })
        }

      }
    }
    else {
      this.authservice.showToast("Please select type");
    }

  }

  GoToNext(AppointmentId, vin, ronumber) {
    if (this.Page == "TakeImage") {
      this.router.navigate(['/takeimage'], { queryParams: { AppointmentId: AppointmentId, Page: this.Page, VIN: vin, Isedit: true, ROnumber: ronumber } });
    }
    if (this.Page == "Signatue") {
      this.router.navigate(['/signature'], { queryParams: { AppointmentId: AppointmentId, Page: this.Page, VIN: vin, Isedit: true, ROnumber: ronumber } });
    }
    if (this.Page == "Video") {
      this.mediaCapture.captureVideo()
        .then(
          (data) => {
            console.log(data);
            var fileName = data[0].name;
            let dir = data[0].localURL.split('/');
            dir.pop();
            var fromDirectory = dir.join('/');
            var toDirectory = this.file.dataDirectory;
            this.file.copyFile(fromDirectory, fileName, toDirectory, fileName).then(res => {
              console.log('File successfully copied');
              console.log(fromDirectory);
              console.log(fileName);
              console.log(toDirectory);
              console.log(fileName);

              this.videoEditor.transcodeVideo({
                fileUri: toDirectory + fileName,
                outputFileName: data[0].name,
                videoBitrate: 50000,
                outputFileType: this.videoEditor.OutputFileType.MPEG4
              })
                .then((fileUri: string) => console.log('video1 transcode success', fileUri))
                .catch((error: any) => console.log('video1 transcode error', error));
            });
            //  this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + 'audioRecord.3gp'


            // this.router.navigate(['/playvideo']);
          },
          (err: CaptureError) => console.error(err)
        );
    }
  }

}
