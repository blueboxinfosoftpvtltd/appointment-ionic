import { Component, OnInit } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import { AddnewopcodePage } from '../../addnewopcode/addnewopcode.page'
import { AuthService } from '../../../app/auth.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
})
export class MaintenanceComponent implements OnInit {
  dataReturned: any;
  dealerid: any;
  codelist: any;
  opArray: any;
  constructor(public events: Events,public modalCtrl : ModalController,private storage: Storage,private authservice:AuthService) {
    this.GetMOPCode();
    this.opArray=new Array();
   }

  ngOnInit() {
   
  }


  async AddNewOPCode() {
    const modal = await this.modalCtrl.create({
      component: AddnewopcodePage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Add Vehicle"
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
        this.GetMOPCode();
      }
    });
 
    return await modal.present();
  }

  GetMOPCode(){
    this.authservice.presentLoading();
    this.storage.get('dealerid').then((val) => {
    console.log('dealerid', val);
    this.dealerid = val;    
    // this.authservice.GetMOPCode(this.dealerid).subscribe(res =>{
    //   this.codelist = res;
    //   console.log(this.codelist);
    //   this.authservice.dismissLoading();
    //   // this.authservice.showToast(this.codelist.Message);
    // })
  });
  }

  Next(){
    if(this.opArray == '' || this.opArray == undefined || this.opArray == null){
      this.authservice.showToast("Please select opcode first");
    }else{
      this.events.publish('step:created', "step3");
      this.events.publish('opArray', this.opArray);
    }  
  }

  SelectOP(event,data){
    if(event.detail.checked == true){
      this.opArray.push(data);
    }else{
      let newArray = this.opArray.filter(function(el) {
              return el.OpCode !== data.OpCode;
      });
      this.opArray = newArray;
    }
    console.log(this.opArray);
   }
}
