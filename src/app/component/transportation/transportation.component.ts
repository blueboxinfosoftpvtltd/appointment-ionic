import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { AuthService } from '../../../app/auth.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.scss'],
})
export class TransportationComponent implements OnInit {
  dealerid: any;
  transportdata: any
  selectedSchedules: any;
  tvalue: any;
  checkedIdx=0;

  constructor(public events: Events,private storage: Storage,private authservice:AuthService) {
    
   }

  ngOnInit() {
    this.GetTransportationList();
  }

  Next(){

    if(this.tvalue != 'Drop Off'){
      this.events.publish('step:created', "step4");
    }else{
      this.events.publish('stepskip:created', "step6");
    }
    this.events.publish('Transportation', this.tvalue);
  }

  GetTransportationList(){
    this.authservice.presentLoading();
    this.storage.get('dealerid').then((val) => {
    console.log('dealerid', val);
    this.dealerid = val;    
    this.authservice.GetTransportationList(this.dealerid).subscribe(res =>{
      this.transportdata = res;
      console.log(this.transportdata);
      this.authservice.dismissLoading();
      // this.authservice.showToast(this.codelist.Message);
    })
  });
  }

  Selection(name: string) {
    console.log(name);
    this.tvalue = name;
    this.transportdata.forEach(x => {
        if(x.TransportationName !== name) {
            x.value = !x.value
        }
    })
 }
}
