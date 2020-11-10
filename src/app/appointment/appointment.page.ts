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
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage {
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
  username: any;

  vehicleList: any = [];
  loadingVehicles: boolean = false;
  selectedCustomerIndex: any = null;

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
    this.storage.get('username').then((val => {
      this.username = val;
    }))
  }
  logout() {
    this.showAlert();
  }

  async  showAlert() {
    const prompt = this.alertController.create({
      header: "Appointment",
      message: "Are you sure you want to logout?",
      backdropDismiss: false,
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            this.storage.set('islogin', false);
            this.router.navigateByUrl('/login', { replaceUrl: true });

          }
        },
        {
          text: 'No',
          handler: data => {
            console.log('No clicked');
          }
        }
      ]
    });
    (await prompt).present();
  }



  async AddVehicle(CustomerId) {
    const modal = await this.modalCtrl.create({
      component: AddvehiclePage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        "CustomerId": CustomerId,
        "paramTitle": "Add Vehicle"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  openlist(index, event) {
    event.stopPropagation();
    this.selectedCustomerIndex = index;
    const customer = this.res[index];
    // remove existing records
    this.vehicleList = [];
    this.loadingVehicles = true;
    const data = {
      FkDealershipId : this.dealerid + "",
      FkCustomerId : customer.CustomerId + "",
      VIN : "",
      StockNo : ""
    };
    // call get vehicles by customer api
    this.authservice.getVehiclesByCustomer(data).subscribe(response => {
      // hide loading message
      this.loadingVehicles = false;
      if (response != null) {
        // assign response
        this.vehicleList = response;
      }
    }, (error) => {
      // hide loading message
      this.loadingVehicles = false;
    });
  }

  openbtn(i,e){
    e.stopPropagation();
    if(this.IsValue == 0){
      this.IsValue = 1;
      this.index = i;
      this.openlist(i, e);
    }
    else{
       this.hidelist(e);
    }

  }

  hidelist(e) {
    e.stopPropagation();
    this.selectedCustomerIndex = null;
    this.vehicleList = [];
  }

  Createro(CustomerId, vin) {
    let data = {
      'CustomerId': CustomerId,
      "VIN": vin
    }
    // this.authservice.secustidvin(data);
    // this.router.navigateByUrl('/createromain').then(() => {
    //   console.log('Published');
    // });
    if (this.platform.is("ipad") || this.platform.is("desktop")) {
      this.authservice.secustidvin(data);
      this.router.navigateByUrl('/rotab').then(() => {
        console.log('Published');
      });
    }
    else {
      this.authservice.secustidvin(data);
      this.router.navigateByUrl('/createromain').then(() => {
        console.log('Published');
      });
    }
  }

  CreateAppointment(CustomerId, vin) {
    let data = {
      'CustomerId': CustomerId,
      "VIN": vin
    }

    this.authservice.secustidvin(data);
    this.router.navigateByUrl('/createappointment').then(() => {
      // this.events.publish('GetCustomerId', data);

      console.log('Published');
    });


    // this.router.navigateByUrl('/createappointment');
  }


  async openpopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event: ev,
      translucent: true,
      cssClass: 'custom-popover'
    });
    return await popover.present();
  }

  setFilteredItems(event) {
    console.log(event);
  }
  Search() {
    // if(this.fname == null || this.fname == '' || this.fname == undefined ){
    //   if(this.lname == null || this.lname == '' || this.lname == undefined){
    //     if(this.cname == null || this.cname == '' || this.cname == undefined){
    //       this.authservice.showToast("Enter atleast  !!");
    //     }
    //     else{
    //if (this.op && this.val) {
    if (this.fname.length > 0 || this.lname.length > 0 || this.cname.length > 0 || this.vin.length > 0 || this.phno.length > 0 || this.stockno > 0) {
     // if(this.vin.length > 0){
      this.authservice.presentLoading();
      if(this.Page == "appt"){
      this.authservice.GetSearchCustomer(this.fname, this.lname, this.vin, this.cname, this.phno, this.stockno, this.dealerid,0, 10).subscribe(res => {
        this.res = [];
        this.vehicleList = [];
        this.gres = res;
        if(this.gres != null){
          for(let i=0;i<this.gres.length;i++){
            this.res.push(this.gres[i]);
          }
          
          console.log(this.res);
          this.authservice.dismissLoading();
        }
        else{
          this.authservice.dismissLoading();
        }
        

      })
    }
    else{
      this.authservice.GetSearchroCustomer(this.fname, this.lname, this.vin, this.cname, this.phno, this.stockno, this.dealerid,0, 10).subscribe(res => {
        this.res = [];
        this.vehicleList = [];
        this.gres = res;

        if(this.gres != null){

        for(let i=0;i<this.gres.length;i++){
          this.res.push(this.gres[i]);
        }
        
        console.log(this.res);
        this.authservice.dismissLoading();
      }
      else{
        this.authservice.dismissLoading();
      }

      })
    }
  // }
  // else{
  //   this.authservice.showToast("Enter atleast six digit");
  // }

    }
    else {
      this.authservice.alertshow("Enter atleast one value");
    }

    //  }
    // else {
    //   this.authservice.showToast("Enter value");
    //}
    //     }
    //   }

    // }
  }
 
  newgethistory(CustomerId, vin) {
    let data = {
      'CustomerId': CustomerId,
      "VIN": vin
    }

    this.authservice.secustidvin(data);
    this.router.navigateByUrl('/rohistorypdf').then(() => {
      // this.events.publish('GetCustomerId', data);
      this.gethistory(vin);
      console.log('Published');
    });
    // this.router.navigateByUrl('/createappointment');
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
        this.router.navigate(['/appointment'], { queryParams: object });
        this.authservice.dismissLoading();
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

 /* gethistory(vin) {
   
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
        //this.router.navigate(['/pdfview'], { queryParams: object });
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
  }*/
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
  addcust() {
    let object = {
      Page: this.Page
    }
    // this.router.navigate(['/searchappoinment'],{ queryParams: object });
    //this.router.navigate(['/appointment'],{ queryParams: object });
    this.router.navigate(['/createcust'], { queryParams: object });
  }

  loadData(e) {
    setTimeout(() => {
      console.log('Done');
      this.from = this.from + 10;
      this.to = this.to + 10;
      if(this.Page == "appt"){
      this.authservice.GetSearchCustomer(this.fname, this.lname, this.vin, this.cname, this.phno, this.stockno, this.dealerid, this.from, this.to).subscribe(res => {
        this.gres = res;
        if (this.gres == null) {
          e.target.complete();
          e.target.disabled = true;
        }
        for(let i=0;i<this.gres.length;i++){
          this.res.push(this.gres[i]);
        }
        console.log(this.res);
        e.target.complete();

      })
    }
    else{
      this.authservice.GetSearchroCustomer(this.fname, this.lname, this.vin, this.cname, this.phno, this.stockno, this.dealerid, this.from, this.to).subscribe(res => {
        this.gres = res;
        if (this.gres == null) {
          e.target.complete();
          e.target.disabled = true;
        }
        for(let i=0;i<this.gres.length;i++){
          this.res.push(this.gres[i]);
        }
        console.log(this.res);
        e.target.complete();

      })
    }
    }, 2000)
  }

vehicleDetail(i) 
{
    this.custid = i;
    console.log(this.dealerid);
    console.log(this.custid);
   
    if(this.Page == "appt"){
      console.log(this.dealerid);
    console.log(this.custid);
      this.authservice.GetVehicleCustomer(this.dealerid,this.custid).subscribe(vres => {
        this.vres = [];
        this.vgres = vres;
        if(this.vgres != null){
          for(let i=0;i<this.vgres.length;i++){
            this.vres.push(this.vgres[i]);
          }
          
          console.log(this.vres);
          this.authservice.dismissLoading();
        }
        else{
          this.authservice.dismissLoading();
        }
        

      })
    }
    else{
      this.authservice.GetVehicleCustomer(this.dealerid,this.custid).subscribe(vres => {
        this.vres = [];
        this.vgres = vres;
        for(let i=0;i<this.vgres.length;i++){
          this.vres.push(this.vgres[i]);
        }
        
        console.log(this.vres);
        console.log(this.dealerid);
        console.log(this.custid);
        this.authservice.dismissLoading();

      })
    }
    
  }

}
