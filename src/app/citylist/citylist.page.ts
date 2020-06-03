import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.page.html',
  styleUrls: ['./citylist.page.scss'],
})
export class CitylistPage implements OnInit {

  city: any;
  cityf: any[] = [];
  current: number = 100;
  inital: number = 0;
  constructor(private auth: AuthService, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.city = this.auth.getcity();
    for (let i = 0; i < this.current; i++) {
      this.cityf.push(this.city[i]);
    }
  }

  cancel() {
    // this.auth.setcityn("");
    // this.auth.setcityi("");
    this.modalCtrl.dismiss();
  }
  ok() {
    this.modalCtrl.dismiss();
  }

  cityselect(id, name, e) {
    this.auth.setcityn(name);
    this.auth.setcityi(id);
  }
  doInfinite(infiniteScroll) {
    if (this.current < this.city.length) {
      this.inital = this.current;
      this.current = this.current + 200;
      setTimeout(() => {
        for (let i = this.inital; i < this.current; i++) {
          this.cityf.push(this.city[i]);
        }
        console.log('Async operation has ended');
        infiniteScroll.target.complete();
      }, 500);
    }
    else {
      this.inital = this.current;
      setTimeout(() => {
        for (let i = this.inital; i < this.city.length; i++) {
          this.cityf.push(this.city[i]);
        }
        console.log('Async operation has ended');
        infiniteScroll.target.complete();
        infiniteScroll.target.disabled = true;
      }, 500);
    }


  }


}
