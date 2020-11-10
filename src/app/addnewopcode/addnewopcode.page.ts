import { Component, OnInit } from '@angular/core';
import { ModalController ,Events} from '@ionic/angular';
import { AuthService } from '../../app/auth.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-addnewopcode',
  templateUrl: './addnewopcode.page.html',
  styleUrls: ['./addnewopcode.page.scss'],
})
export class AddnewopcodePage implements OnInit {
  opcode: any;
  modalTitle: any;
  sale: any;
  desc: any;
  hours: any;
  dealerid: any;
  empdealerid: any;
  userid: any;
  data: any;
  constructor(private storage: Storage,public modalCtrl : ModalController,public events: Events,private authservice:AuthService) {
    this.storage.get('dealerid').then((val) => {
      console.log('dealerid', val);
      this.dealerid = val;  
    });

   this.storage.get('userid').then((val) => {
        console.log('userid', val);
        this.userid = val;  

       /* this.storage.get('Employee_id').then((val) => {
          console.log(val);
          console.log(this.dealerid);
    
          this.empdealerid = val.filter((item) => {
            console.log(item);
            return item.DealershipId == this.dealerid;
    
          });
          console.log(this.empdealerid);
          if(this.empdealerid.length > 0)
          {
            this.userid = this.empdealerid[0].PKEmployeeID;
          }
          console.log(this.userid);*/
          
      });
     
   }

  ngOnInit() {
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalCtrl.dismiss(onClosedData);
  }


  Submit(){
   
    
    if(this.opcode && this.sale && this.hours && this.desc){
      this.authservice.presentLoading();
    this.authservice.MOPCodeInsert(this.opcode,this.sale,this.hours,this.desc,this.userid,this.dealerid).subscribe(res =>{
      this.data =  res
      this.authservice.dismissLoading();
      this.authservice.showToast(this.data.Message);
    })
    this.closeModal();
  }
  else{
    this.authservice.showToast("Fill details first!!");
  }
 
   
  }


}
