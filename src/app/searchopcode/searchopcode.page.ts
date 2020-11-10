import { Component, OnInit } from '@angular/core';
import { ModalController ,Events,NavParams} from '@ionic/angular';
import { AuthService } from '../../app/auth.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-searchopcode',
  templateUrl: './searchopcode.page.html',
  styleUrls: ['./searchopcode.page.scss'],
})
export class SearchopcodePage implements OnInit {

  opcode: any;
  modalTitle: any;
  sale: any;
  desc: any;
  hours: any;
  dealerid: any;
  empdealerid: any;
  userid: any;
  data: any;
  searchword: any;
  isSearch:boolean = false;
  searchopcode:any;
  codelist: any;
  checkop:any[]=[];
  rescustvin:any;

  constructor(private storage: Storage,public modalCtrl : ModalController,public events: Events,private navParams: NavParams,private authservice:AuthService) {
   /* this.storage.set('dealerid').then((val) => {
      console.log('dealerid', val);
      this.dealerid = val;  
    });*/

   
    
     this.modalTitle = this.navParams.data.paramTitle;
   }

  ngOnInit() {
    this.codelist = "";
    
    this.storage.get('dealerid').then((val) => {
      console.log('dealerid', val);
      this.dealerid = val;  
      this.GetMOPCode();
      this.SearchOp();
    });
    console.log(this.dealerid);

   this.storage.get('userid').then((val) => {
        console.log('userid', val);
        this.userid = val;  
    });
    console.log(this.userid);

    this.authservice.getcustidvin().subscribe((data)=>{
      console.log(data);
      this.rescustvin = data;
      console.log(this.rescustvin);
    })

    var finalopcode = [];
    for(let i = 0 ; i<this.codelist.length;i++){
      if(this.codelist[i].isChecked == true){
        finalopcode.push(this.codelist[i]);
      }
    }


  
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalCtrl.dismiss(onClosedData);
  }

  async OnOPCodeselected(op)
  { 
    console.log('Op Check :', op);
    await this.modalCtrl.dismiss(op);
  }
  GetMOPCode()
  {
    var getoplist=[];
    var stringoplist;
    // this.authservice.presentLoading(); 
    if(this.searchword == '' || this.searchword == null || this.searchword == undefined )
    {
      this.searchword = "";
    }
  
    console.log(this.searchword);


    console.log(this.dealerid);

    this.authservice.GetMOPCode(this.dealerid,"0","10",this.searchword).subscribe(res =>{
      this.codelist = res;
      console.log(this.codelist);
  
      if(this.rescustvin.data.OPCodeList){
        this.codelist = this.rescustvin.data.OPCodeList;
        this.codelist.forEach(element => {
           element.isChecked = true;
        })
      }
     
    })
  }
  

  SearchOp()
  {
    // this.authservice.presentLoading(); 
      if(this.searchword.length >= 2)
      {
            this.isSearch = true;
            this.authservice.GetMOPCode(this.dealerid,"1","10",this.searchword).subscribe(res =>{
            this.searchopcode = res;
            console.log(this.searchopcode);
            for(let i = 0; i<this.searchopcode.length;i++){
            this.codelist.unshift(this.searchopcode[i]);
            }
          this.codelist = [...new Map(this.codelist.map(item =>
          [item["OpCode"], item])).values()];
          
          })
        
    }
    else if(this.searchword.length == 0)
    {
      for(let i = 0; i <this.searchopcode.length;i++){
        if(this.searchopcode[i].isChecked == true){
        // this.codelist.unshift(this.searchopcode[i]);
        }
      
        
      }
      console.log(this.codelist);
    
      console.log(this.codelist);
      this.codelist = [... new Set(this.codelist)];
      this.isSearch = false;
    }
  }
  
  cancelsearch(){
    console.log("cancel");
    this.isSearch = false;
   
  }
  


SelectOP(event,data){
  console.log(data);
  let checked = 0;
  if(data.isChecked == true ){
    if(this.checkop.length == 0){
      this.checkop.push(data.OpCode);
    }
    else{
      for(let i = 0;i <this.checkop.length;i++){
        if(this.checkop[i] == data.OpCode){
         
        }
        else{
          this.checkop.push(data.OpCode);
        }
      }
    }
    //this.checkop = [... new Set(this.checkop)];
        
        console.log(this.checkop);
    
  }
  else
  {
    for(let i = 0;i <this.checkop.length;i++){
      if(this.checkop[i] == data.OpCode){
        this.checkop.splice(i,1);
      }
    }
    console.log(this.checkop);
    
  }

  console.log(this.codelist);
 }


}
