import { Component, OnInit } from '@angular/core';
import { Events, ModalController, PopoverController, LoadingController, AlertController, MenuController, ToastController, Platform } from '@ionic/angular';
import { AddvehiclePage } from '../addvehicle/addvehicle.page'
import { AuthService } from '../../app/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverPage } from '../popover/popover.page'
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/File/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
// import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';

@Component({
  selector: 'app-rohistorypdf',
  templateUrl: './rohistorypdf.page.html',
  styleUrls: ['./rohistorypdf.page.scss'],
})
export class RohistorypdfPage implements OnInit {
  dataReturned: any;
  IsValue: any;
  fname: any = "";
  lname: any = "";
  public messages;
  toast: any;
  loading: any;
  gres:any;
  res: any[] =[];

  vgres:any;
  vres: any[] =[];
  vindex: any;
  custid: any;
  
  index: any;
  dealerid: any;
  cname: any = "";
  furl: any;
  Page: any;
  pagename: any;
  phno: any = "";
  vin: any = "";
  stockno: any = "";
  op: any;
  val: any;
  from: any = 0;
  to: any = 10;
  /*constructor(private storage: Storage,public loadingController: LoadingController, private authservice: AuthService,)
  {

    this.storage.get('dealerid').then((val) => {
      console.log('dealerid', val);
      this.dealerid = val;
    });
  }
  ngOnInit() {
   // this.authservice.presentLoading();
  }*/

  constructor(private events: Events, private storage: Storage, public toastController: ToastController, public loadingController: LoadingController, private authservice: AuthService, public popoverCtrl: PopoverController, public modalCtrl: ModalController, private router: Router, private document: DocumentViewer, public activatedRoute: ActivatedRoute, public platform: Platform, private alertController: AlertController, private file: File, private ft: FileTransfer) {

    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data);
      this.Page = data.Page;
      if (this.Page == "appt") {
        this.pagename = "Book Appointment";
      }
      else if (this.Page == "ro") {
        this.pagename = "Create RO";
      }
    })
    this.IsValue = 0;
    this.res = new Array();
    console.log(this.res)
    this.storage.get('dealerid').then((val) => {
      console.log('dealerid', val);
      this.dealerid = val;
    });
  }

  ngOnInit() {
   
   }
   async presentLoading() {
    const loading = await this.loadingController.create({
      //cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

  }


  gethistory(vin) {
 
    let object = {
      Page: this.Page
    }
    const options: DocumentViewerOptions = {
      title: 'My PDF',
      email: {
        enabled: true
      },
      print: {
        enabled: true
      },
    }
    this.authservice.getrohistory(vin, this.dealerid).subscribe((res => {
      console.log(res);
      this.furl = res;
      if (this.furl.URL) {
        // let object = {
        //   fileurl: this.furl.URL
        // }
        let path = this.file.documentsDirectory

        const transfer = this.ft.create();
    
        transfer.download(this.furl.URL, path + 'myfile.pdf').then(entry => {
    
          let url = entry.toURL();
    
          this.document.viewDocument(url, 'application/pdf', options);
      
        });
      //  this.router.navigate(['/rohistorypdf'], { queryParams: object });
      }
      else {
        this.presentAlert3(this.furl.Message);
      }

      //this.router.navigateByUrl('/pdfview',{queryParams: object});
      //   this.previewAnyFile.preview(this.furl)
      // .then((res: any) => console.log(res))
      // .catch((error: any) => console.error(error));
      // PreviewAnyFile.preview(this.furl);
      //  this.document.viewDocument(this.furl,'application/pdf',options)
    }))
  }
  async presentAlert3(msg) {
    const alert = await this.alertController.create({
      header: 'ION APPT',
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {

          }
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }

}