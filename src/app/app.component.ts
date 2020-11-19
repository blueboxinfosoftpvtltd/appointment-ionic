import { Component } from '@angular/core';
import { Platform, AlertController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { Plugins } from '@capacitor/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { MenuController } from '@ionic/angular';
//const { splashScreen } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  // [{"data" :"Book Appointment","img":"../assets/imgs/a_icon.png","id":"1"}
  // ,{"data" :"View Appointment","img":"../assets/imgs/v_icon.png","id":"2"}
  // ,{"data" :"About Us","img":"../assets/imgs/about_icon.png","id":"3"}
  // ,{"data" :"Take Photo","img":"../assets/imgs/img.png","id":"7"}
  // ,{"data" :"Signature","img":"../assets/imgs/sign.png","id":"8"}
  // ,{"data" :"Video","img":"../assets/imgs/video.png","id":"9"}]


  public appPages = [
    {
      title: 'Book Appointment',
      icon: 'ios-book'
    },
    {
      title: 'Create RO',
      icon: 'ios-add-circle'
    },
    // {
    //   title: 'View Appointment',
    //   icon: 'ios-paper'
    // },
    {
      title: 'Take Photo',
      icon: 'ios-camera'
    },
    // {
    //   title: 'Signature',
    //   icon: 'ios-create'
    // },
    {
      title: 'RFID',
      icon: 'ios-create'
    },
    {
      title: 'Logout',
      icon: 'md-log-out'
    }
  ];
  backButtonPressedOnceToExit: boolean = false;
  islogin: boolean = false;
  furl: any;
  navLinksArray = [];
 // username: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authservice: AuthService,
    private router: Router,
    public alertCtrl: AlertController,
    public storage: Storage,
    public toastCtrl: ToastController,
    private location: Location,
    public screenOrientation: ScreenOrientation,
    public menu: MenuController
  ) {

    this.platform.ready().then(() => {
      // if(this.platform.is("ipad")){
      //  this.menu.();
      // }
      this.screenOrientation.unlock();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    });
    this.router.events.subscribe(event => {
      const url = this.router.url //current url
      if (event instanceof NavigationEnd) {
        const isCurrentUrlSaved = this.navLinksArray.find((items) => {
          return items === url
        });
        if (!isCurrentUrlSaved) this.navLinksArray.push(url);
      }// end event if stmt
    }) // end subscribe

    // this.hardwareBackButton();
    this.storage.get('islogin').then((val) => {
      this.islogin = val;
      this.authservice.getDealership().subscribe(res => {
        console.log(res)
        this.authservice.setdealers(res);
        this.initializeApp();


      })

    })
   /* this.storage.get('username').then((val => {
      this.username = val;
    }))*/
  }

  //hardwareBackButton(){
  // end subscription
  //}
  async presenttoast() {
    const toast = await this.toastCtrl.create({
      message: 'Press again to exit from application',
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribe(() => {
        console.log(this.navLinksArray.length);
        console.log(this.router.url);
        if (this.router.url.includes("?")) {
          this.furl = this.router.url.split("?");
          console.log(this.furl[0]);
          if (this.router.url == "/login" || this.furl[0] == "/home") {
            if (this.backButtonPressedOnceToExit) {
              navigator['app'].exitApp();
            }
            else {
              this.backButtonPressedOnceToExit = true;
              this.presenttoast();
              // this.backButtonPressedOnceToExit = true;
              // await this.toastCtrl.create({
              //   message: "Press again to exit from application",
              //   duration: 3000,
              //   position: 'top',
              // }).present();
              setTimeout(() => {
                this.backButtonPressedOnceToExit = false;
              }, 2000);
            }
          }
          else {
            this.location.back();
            // this.navLinksArray.pop();
            // const index = this.navLinksArray.length + 1;
            // const url = this.navLinksArray[index];
            // console.log(url);
            // this.router.navigate([url])
          }
        }
        else {
          this.furl = this.router.url;
          if (this.router.url == "/login" || this.furl == "/home") {
            if (this.backButtonPressedOnceToExit) {
              navigator['app'].exitApp();
            }
            else {
              this.backButtonPressedOnceToExit = true;
              this.presenttoast();
              // this.backButtonPressedOnceToExit = true;
              // await this.toastCtrl.create({
              //   message: "Press again to exit from application",
              //   duration: 3000,
              //   position: 'top',
              // }).present();
              setTimeout(() => {
                this.backButtonPressedOnceToExit = false;
              }, 2000);
            }
          }
          else {
            this.location.back();
            // this.navLinksArray.pop();
            // const index = this.navLinksArray.length + 1;
            // const url = this.navLinksArray[index];
            // console.log(url);
            // this.router.navigate([url])
          }
        }

      })
      // this.platform.backButton.subscribe(() => {
      //   // this.toastCtrl.create({
      //   //   message: this.nav.length().toString(),
      //   //   duration: 3000,
      //   //   position: 'top',
      //   // }).present();
      //   // this.nav.pop();


      //   if (this.nav.length() == 1) {
      //     if (this.backButtonPressedOnceToExit) {
      //       platform.exitApp();
      //     }
      //     else {
      //       this.backButtonPressedOnceToExit = true;
      //       this.toastCtrl.create({
      //         message: "Press again to exit from application",
      //         duration: 3000,
      //         position: 'top',
      //       }).present();
      //       setTimeout(() => {
      //         this.backButtonPressedOnceToExit = false;
      //       }, 2000);
      //     }
      //   }

      //   else {
      //       this.app.navPop();
      //   }
      // });
      this.statusBar.styleDefault();

      if (this.islogin == true) {
        this.authservice.getDealership().subscribe(res => {
          console.log(res)
          this.authservice.setdealers(res);
          this.router.navigateByUrl('/login', { replaceUrl: true }).then(() => {
            this.splashScreen.hide();
          })




          // setTimeout(() => {
          //       splashScreen.hide();
          //      }, 5000);

        })

      }
      else {
        this.router.navigateByUrl('/login', { replaceUrl: true }).then(() => {
          setTimeout(() => {
            this.splashScreen.hide();
          }, 1000);

          // setTimeout(() => {
          //   splashScreen.hide();
          // }, 5000);
        })

      }
    });
  }

  logout() {
    this.showAlert();
  }

  async  showAlert() {
    const prompt = this.alertCtrl.create({
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

  Navigation(title) {
    if (title == "Book Appointment") {
      let object = {
        Page: "appt"
      }
      // this.router.navigate(['/searchappoinment'],{ queryParams: object });
      // this.router.navigate(['/appointment'],{ queryParams: object });
      this.router.navigate(['/appointment'], { queryParams: object });
    } else if (title == "View Appointment") {
      if (this.router.url == "home") {

      }
      else {
        this.router.navigateByUrl('/home');
      }
      //this.router.navigateByUrl('/appointmentdisp');
    }
    else if (title == "Create RO") {
      let object = {
        Page: "ro"
      }
      // this.router.navigate(['/searchappoinment'],{ queryParams: object });
      this.router.navigate(['/appointment'], { queryParams: object });
    }
    else if (title == "Take Photo") {
      let object = {
        Page: "TakeImage"
      }
      this.router.navigate(['/searchappoinment'], { queryParams: object });
    }
    else if (title == "Signature") {
      let object = {
        Page: "Signatue"
      }
      this.router.navigate(['/searchappoinment'], { queryParams: object });
    }

    else if (title == "RFID") {
      this.router.navigateByUrl('/rfid');
    }
    else if (title == "Logout") {
      this.logout();
    }
  }
}
