import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { AuthService } from '../../../app/auth.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.scss'],
})
export class AdvisorsComponent implements OnInit {
  dealerid: any;
  advisordata: any;
  advisorid: any;
  constructor(public events: Events,private storage: Storage,private authservice:AuthService) {
    events.subscribe('advisorid', (advisorid) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
    this.advisorid = advisorid;
    this.storage.set("advisorid",this.advisorid);
    })
   }

  ngOnInit() {
    this.GetAdvisorList();
  }

  Next(){
    if(this.advisorid == null || this.advisorid == '' || this.advisorid == undefined){
      this.authservice.showToast("Please Select Advisor")
    }else{
      this.events.publish('step:created', "step5");
      this.events.publish('advisorid', this.advisorid);
    }   
  }

  GetAdvisorList(){
    this.authservice.presentLoading();
    this.storage.get('dealerid').then((val) => {
    console.log('dealerid', val);
    this.dealerid = val;    
    this.authservice.GetAdvisorList(this.dealerid).subscribe(res =>{
      this.advisordata = res;
      console.log(this.advisordata);
      this.authservice.dismissLoading();
      // this.authservice.showToast(this.codelist.Message);
    })
  });
  }

  Selection(id){
    console.log(id);
    this.advisorid = id;   
  }


}
