import { Component, OnInit } from '@angular/core';
import { Events,ModalController, PopoverController,LoadingController,MenuController,ToastController,Platform  } from '@ionic/angular';
import { AddvehiclePage } from '../addvehicle/addvehicle.page'
import {AuthService} from '../../app/auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import { PopoverPage } from '../popover/popover.page'
import { Storage } from '@ionic/storage';
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
// import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage{
  dataReturned:any;
  IsValue: any;
  fname: any;
  lname: any;
  public messages;
  toast: any;
  loading: any;
  res: any;
  index: any;
  dealerid: any;
  cname:any;
  furl:any;
  Page:any;
  pagename:any;
  phno:any;
  vin:any;
  stockno:any;
  constructor(private events: Events,private storage: Storage,public toastController: ToastController,public loadingController: LoadingController,private authservice:AuthService,public popoverCtrl: PopoverController,public modalCtrl : ModalController,private router: Router,private document: DocumentViewer,public activatedRoute : ActivatedRoute,public platform : Platform ){

    this.activatedRoute.queryParams.subscribe((data)=>{
      console.log(data);
      this.Page = data.Page;
      if(this.Page == "appt"){
       this.pagename = "Book Appointment";
      }
      else if(this.Page == "ro"){
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

  openlist(i){
    console.log(i);
      this.IsValue = 1;
      this.index = i;   
  }

  hidelist(){
    this.IsValue = 0;
  }

  Createro(CustomerId,vin){
    let data = {
      'CustomerId' : CustomerId,
      "VIN": vin
    }
    // this.authservice.secustidvin(data);
    // this.router.navigateByUrl('/createromain').then(() => {
    //   console.log('Published');
    // });
    if(this.platform.is("ipad") || this.platform.is("desktop")){
        this.authservice.secustidvin(data);
        this.router.navigateByUrl('/rotab').then(() => {
          console.log('Published');
        });
   }
    else{
    this.authservice.secustidvin(data);
    this.router.navigateByUrl('/createromain').then(() => {
      console.log('Published');
    });
  }
  }

  CreateAppointment(CustomerId,vin){
    let data = {
      'CustomerId' : CustomerId,
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

  setFilteredItems(event){
    console.log(event);
  }



  Search(){
    // if(this.fname == null || this.fname == '' || this.fname == undefined ){
    //   if(this.lname == null || this.lname == '' || this.lname == undefined){
    //     if(this.cname == null || this.cname == '' || this.cname == undefined){
    //       this.authservice.showToast("Enter atleast  !!");
    //     }
    //     else{
          this.authservice.presentLoading();
          this.authservice.GetSearchCustomer(this.dealerid,this.fname,this.lname,this.cname,this.phno,this.vin,this.stockno).subscribe(res =>{
            this.res = res;
            console.log(this.res);
          this.authservice.dismissLoading();
            
          })
    //     }
    //   }
      
    // }

    
   
    
  }
  gethistory(vin){
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
   this.authservice.getrohistory(vin,this.dealerid).subscribe((res =>{
     console.log(res);
    this.furl = res;
    let object = {
      fileurl : this.furl
      }
      this.router.navigate(['/pdfview'],{ queryParams: object });
    //this.router.navigateByUrl('/pdfview',{queryParams: object});
  //   this.previewAnyFile.preview(this.furl)
  // .then((res: any) => console.log(res))
  // .catch((error: any) => console.error(error));
    // PreviewAnyFile.preview(this.furl);
    //  this.document.viewDocument(this.furl,'application/pdf',options)
   }))
  }
  addcust(){
    this.router.navigateByUrl('/createcust');
  }
}
