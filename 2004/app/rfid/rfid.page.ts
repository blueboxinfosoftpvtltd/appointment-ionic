import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rfid',
  templateUrl: './rfid.page.html',
  styleUrls: ['./rfid.page.scss'],
})
export class RfidPage implements OnInit {
  delarid:any;
  res:any;
  constructor(public authservice : AuthService,public storage : Storage,private router: Router) {
   }

  ngOnInit() {
    this.storage.get('dealerid').then((val) => {
      this.delarid = val;
    this.authservice.getrfiddata(this.delarid).subscribe((res =>{
      console.log(res);
      this.res = res;
    }))
  })
}

createro(CustomerId,vin){
  let data = {
    'CustomerId' : CustomerId,
    "VIN": vin
  }
  this.authservice.secustidvin(data);
  this.router.navigateByUrl('/createromain').then(() => {
    // this.events.publish('GetCustomerId', data);
  
    console.log('Published');
  });
}

}
