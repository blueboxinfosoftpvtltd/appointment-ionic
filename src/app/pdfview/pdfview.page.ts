import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/File/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { AuthService } from '../auth.service';
import { Events, ModalController, PopoverController, LoadingController, AlertController, MenuController, ToastController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-pdfview',
  templateUrl: './pdfview.page.html',
  styleUrls: ['./pdfview.page.scss'],
})
export class PdfviewPage implements OnInit {
  furl: any;
  did:any;
  rono:any;
  username:any;
  uid:any;
  pres:any;
  previousUrl : any;
  isback:any;
  copies:any[]=[];
  copyname:any;
  ccopy:any;
  cres:any;
  constructor(public activatedRoute: ActivatedRoute, private document: DocumentViewer, private file: File, private ft: FileTransfer,public auth : AuthService,private alertController: AlertController,private router: Router) {

    
    this.copies.push("Customer Copy");
    this.copies.push("Workorder Copy");
    this.copyname = "Workorder Copy";
    this.ccopy = "Workorder Copy";
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data);
      this.furl = data.fileurl;
      this.did=data.delaerid;
      this.rono=data.rono;
      this.username=data.username;
      this.uid=data.uid;
      if(data.isback != undefined || data.isback != null){
       this.isback = data.isback;
      }
     
      //this.downloadAndOpenPdf();

      //this.document.viewDocument(this.furl, 'application/pdf', options)
    })
  }
  Changecopy(){
    if(this.ccopy == "Workorder Copy"){
      this.auth.printro(this.did,"CustomerCopy",this.rono,this.username).subscribe(res =>{
        console.log(res);
        this.cres = res;
        if (this.cres.URL) {
          this.furl = "";
          this.furl = this.cres.URL;
          this.ccopy = "Customer Copy";
        }
      })
    }
    else{
      this.auth.printro(this.did,"WorkOrderCopy",this.rono,this.username).subscribe(res =>{
        console.log(res);
        this.cres = res;
        if (this.cres.URL) {
          this.furl = "";
          this.furl = this.cres.URL;
          this.ccopy = "Workorder Copy";
        }
      })
    }
  }

  print(){
    this.auth.printrof(this.did,this.rono,this.username,this.uid,this.furl,"").subscribe(res =>{
      console.log(res);
      this.pres = res;
      
      this.presentAlert3( this.pres.Message);
      // 
    })
  }

  backbtn(){
    this.router.navigateByUrl('/home');
  }
  async presentAlert3(msg) {
    const alert = await this.alertController.create({
      header: 'ION APPT',
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigateByUrl('/home');
          }
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }
  // downloadAndOpenPdf() {

  //   const options: DocumentViewerOptions = {
  //     title: 'My PDF',
  //     email: {
  //       enabled: true
  //     },
  //     print: {
  //       enabled: true
  //     },
  //   }

  //   // let downloadUrl = 'https://devdactic.com/html/5-simple-hacks-LBT.pdf';

  //   let path = this.file.documentsDirectory

  //   const transfer = this.ft.create();

  //   transfer.download(this.furl, path + 'myfile.pdf').then(entry => {

  //     let url = entry.toURL();

  //     this.document.viewDocument(url, 'application/pdf', options);
  
  //   });


  // }

  ngOnInit() {
  }

}
