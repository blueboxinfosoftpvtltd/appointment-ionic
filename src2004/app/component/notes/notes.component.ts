import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { AuthService } from '../../../app/auth.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
notes: any;
dealerid: any;
advisorid: any;
data: any;
  constructor(public events: Events,private storage: Storage,private authservice:AuthService) { 
    events.subscribe('Appointmentdata', (Customerdata) => {
      console.log(Customerdata);
    })

  }

  ngOnInit() {}
  
  BookAppointment(){
    if(this.notes == '' || this.notes == null || this.notes == undefined){
      this.authservice.showToast("Please enter note");
    }else{  
    this.authservice.presentLoading();
    this.storage.get('dealerid').then((val) => {
    console.log('dealerid', val);
    this.dealerid =  val;
    this.storage.get('advisorid').then((val) => {
      console.log('advisorid', val);
    this.advisorid = val;   
    setTimeout(() => {
      this.authservice.dismissLoading();
  }, 3000);
  
    this.authservice.showToast("Appointment Booked Successfully...") ;
    
    // this.authservice.InsertAppointment(this.dealerid,this.advisorid,this.notes).subscribe(res =>{
    //   this.data = res;
    //   console.log(this.data);
    //   this.authservice.dismissLoading();
    //   // this.authservice.showToast(this.codelist.Message);
    // })
  });
  });
}
  }

}
