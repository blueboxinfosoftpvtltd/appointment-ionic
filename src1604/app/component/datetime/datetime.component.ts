import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { AuthService } from '../../../app/auth.service';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
})
export class DatetimeComponent implements OnInit {
  advisorid: any;
  dealerid: any;
  intervaldata: any;
  sdate: any;
  sdate1: any;
  currDate:any
  constructor(public events: Events,private storage: Storage,private authservice:AuthService,public datepipe: DatePipe) { 
  
   
    events.subscribe('advisorid', (advisorid) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
    this.advisorid = advisorid;
    this.storage.set("advisorid",this.advisorid);
    })
  }

  ngOnInit() {
    // this.GetTimeIntervals();
  }

  Next(){
    if(this.sdate == '' || this.sdate == null || this.sdate == undefined){
      this.authservice.showToast("Please select date")
    }else if(this.sdate == '' || this.sdate == null || this.sdate == undefined){
      this.authservice.showToast("Please select time slot")
    }else{
      this.events.publish('step:created', "step6");
      let intervaldata={
        "PromiseDate":this.sdate,
        "Promisetime":"6:00AM",
        "AppointmentTime":"600AM12192019",
      }
      this.events.publish('IntervalDate', intervaldata);
    }
  }

  GetTimeIntervals(){
    this.authservice.presentLoading();
    this.storage.get('dealerid').then((val) => {
    console.log('dealerid', val);
    this.dealerid =  val;
    this.storage.get('advisorid').then((val) => {
    console.log('advisorid', val);
    this.advisorid = val;    
    console.log(this.sdate);
    this.authservice.GetTimeIntervals(this.dealerid,this.advisorid,this.sdate1,"").subscribe(res =>{
      this.intervaldata = res;
      console.log(this.intervaldata);
      this.authservice.dismissLoading();
      // this.authservice.showToast(this.codelist.Message);
    })
  });
  });
  }

  ChangeDate(event){
    console.log(event);  
    this.sdate1 =this.datepipe.transform(this.sdate, 'MM/dd/yyyy');
    console.log(this.sdate1);
    this.GetTimeIntervals();
  }

  ChangeTime(event){
    console.log(event);
    // console.log(data);
  }

}
