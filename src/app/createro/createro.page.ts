import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-createro',
  templateUrl: './createro.page.html',
  styleUrls: ['./createro.page.scss'],
})
export class CreateroPage implements OnInit {

  opcodes:any;
  delarid:any;
  laourdata:any;
  techdata:any;
  tagno:any;
  mileage:any;
  labourname:any;
  techno:any;
  defaulttech:any;
  techlist:any[] = [];
  i:number = 0;
  rores:any;
  shours:any;
  tmplabour:any[]=[];
  tmptech:any[]=[];
  tmphours:any[]=[];
  mileageres:any;
  constructor(public activatedRoute : ActivatedRoute, public router : Router,public authservice : AuthService,private storage: Storage,public alertController: AlertController ) { 

    this.opcodes  = this.authservice.getopcodero();
    console.log(this.opcodes);
    this.storage.get('dealerid').then((val) => {
      this.delarid = val;
     // console.log(this.dealerid);
  
    this.authservice.getlabour(this.delarid).subscribe((res =>{
      console.log(res);
      this.laourdata = res;
      this.authservice.gettechnician(this.delarid).subscribe((res =>{
        console.log(res);
        this.techdata = res;
        for(let i=0 ; i<this.techdata.length;i++){
          if(this.techdata[i].Number == "999"){
            this.techno = this.techdata[i].Number;
            this.defaulttech = this.techdata[i].TechnicianName;
            console.log(this.defaulttech);
          }
        }
        for(let i=0 ; i<this.opcodes.opcode.length;i++){
          this["techno"+i] = this.techno;
        }
      }))
    }))
  })
    // this.activatedRoute.params.subscribe((data)=>{
    //   console.log(data);
    //   this.opcodes = data['finalopcode'];
    //   console.log(this.opcodes);
    // })

  }

  ngOnInit() {

    
  }

  changehour(event,i){
    console.log(event);
   this["shours"+i] = event.target.value;
  }

  Changelabour(event,i){
   console.log(event.detail.value);
   console.log(i);
   this["labourname"+i] = event.detail.value;

   //this.labourname = event.detail.value;
  }
  Changetech(event,i){
    console.log(event.detail.value);
    console.log(i);
    this["techno"+i] = event.detail.value;
  }

  createro(){
    if(this.mileage == "" || this.mileage == undefined || this.mileage == null){
      this.authservice.showToast("Please enter mileagein");
      
    }
    if(this.tagno == "" || this.tagno == undefined || this.tagno == null){
      this.authservice.showToast("Please enter tag No.");
      
    }
    for(let i=0; i<this.opcodes.opcode.length;i++){
      if(this["labourname"+i] == "" || this["labourname"+i] == undefined || this["labourname"+i] == null){
        this.authservice.showToast("Please select labour");
       
      }
      else if(this["techno"+i] == "" || this["techno"+i] == undefined || this["techno"+i] == null){
        this.authservice.showToast("Please select technician");
        
      }
     else if(this["shours"+i] == "" || this["shours"+i] == undefined || this["shours"+i] == null){
        this.authservice.showToast("Please enter sold hours");
        
      }

      else{
        if(this.opcodes.opcode.length == i+1 && this.mileage && this.tagno){
          //this.authservice.presentLoading();
        for(let i =0;i<this.opcodes.opcode.length;i++){
        this.techlist.push({"Line":"",
        "LineDesc":this.opcodes.opcode[i].Description,
        "StoryDesc":this.opcodes.opcode[i].Description,
        "OpCode":this.opcodes.opcode[i].OpCode,
        "LaborType":this["labourname"+i],
        "TechNo":this["techno"+i],
        "LbrCost":"0.00",
        "LbrSaleAmts":"0.00",
        "SoldHours":this["shours"+i],
        "SubletVendor":"",
        "ReqLbrSale":"0.00",
        "Skill":"",
        "Campaign":"",
        "CauseCode":"",
        "NatureCode":"",
        "Decline":"",
        "NextLine":""});
      }
        
      let rocdata={
       cid: this.opcodes.cid,
       vin:this.opcodes.vin,
       mileage:this.mileage,
       tagno:this.tagno,
       add1:this.opcodes.add1,
       add2:this.opcodes.add2,
       city:this.opcodes.city,
       state:this.opcodes.state,
       zip:this.opcodes.zip,
       homeno:this.opcodes.homeno,
       workno:this.opcodes.workno,
       email:this.opcodes.email,
       year:this.opcodes.year,
       make:this.opcodes.make,
       model:this.opcodes.model,
       license:this.opcodes.license,
       color:this.opcodes.color,
       uid:this.opcodes.uid,
       dlrid:this.opcodes.dlrid,
       techlist:this.techlist
      }
      this.authservice.setrocdata(rocdata);
      if(this.opcodes.image == "no"){
        this.authservice.presentLoading();
        this.authservice.createro(this.opcodes.cid,this.opcodes.vin,this.mileage,this.tagno,"","",this.opcodes.add1,this.opcodes.add2,this.opcodes.city,this.opcodes.state,this.opcodes.zip,this.opcodes.homeno,this.opcodes.workno,this.opcodes.email,this.opcodes.year,this.opcodes.make,this.opcodes.model,this.opcodes.license,this.opcodes.color,this.opcodes.uid,this.opcodes.dlrid,this.techlist,this.opcodes.carimage).subscribe((res =>{
          console.log(res);
          this.authservice.dismissLoading();
          this.rores = res;
          // this.authservice.showToast(this.rores.Message);
          this.presentAlert1(this.rores.Message);
        }))

      }
      else{
        this.router.navigate(['/takeimage'],{ queryParams: {ROnumber :true,backpage:"true",Isedit:false} });
      }
      
        // this.authservice.createro(this.opcodes.cid,this.opcodes.vin,this.mileage,this.tagno,"","",this.opcodes.add1,this.opcodes.add2,this.opcodes.city,this.opcodes.state,this.opcodes.zip,this.opcodes.homeno,this.opcodes.workno,this.opcodes.email,this.opcodes.year,this.opcodes.make,this.opcodes.model,this.opcodes.license,this.opcodes.color,this.opcodes.uid,this.opcodes.dlrid,this.techlist).subscribe((res =>{
        //   console.log(res);
        //   this.authservice.dismissLoading();
        //   this.rores = res;
        //   // this.authservice.showToast(this.rores.Message);
        //   this.presentAlert(this.rores.Message);
        // }))
      }
      else{
       
      }
    }

     }
     
   
    
  }

  getmil(){
    this.authservice.getmileage(this.delarid,this.mileage,this.opcodes.vin).subscribe((res =>{
      this.mileageres = res;
      if(this.mileageres.Message != ""){
        this.presentAlert2(this.mileageres.Message);
      }
      
      console.log(this.mileageres);
    }))
  }

  // async presentAlert(msg) {
  //   const alert = await this.alertController.create({
  //     header: 'ION APPT',
  //     message: msg,
  //     buttons: [
  //        {
  //         text: 'OK',
  //         handler: () => {
  //           this.router.navigate(['/takeimage'],{ queryParams: {ROnumber :this.rores.RONumber ,VIN: this.opcodes.vin,backpage:"true",Isedit:false},replaceUrl: true });
  //         }
  //       }
  //     ],
  //     backdropDismiss: false
  //   });

  //   await alert.present();
  // }
  async presentAlert1(msg) {
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

  async presentAlert2(msg) {
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
  formataNumero(e: any, separador: string = '.', decimais: number = 2) {
    if(e.detail.value.length == 2){
      //e.detail.value = e.detail.value + separador;
      this.shours=e.detail.value + separador;
    }
    // let a:any = e.detail.value.split('');
    // let ns:string = '';
    // a.forEach((c:any) => { if (!isNaN(c)) ns = ns + c; });
    // ns = parseInt(ns).toString();
    // if (ns.length < (decimais+1)) { ns = ('0'.repeat(decimais+1) + ns); ns = ns.slice((decimais+1)*-1); }
    // let ans = ns.split('');
    // let r = '';
    // for (let i=0; i < ans.length; i++) if (i == ans.length - decimais) r = r + separador + ans[i]; else r = r + ans[i];
    // e.value = r;
  }
}
