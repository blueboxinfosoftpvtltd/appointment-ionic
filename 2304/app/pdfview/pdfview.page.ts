import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pdfview',
  templateUrl: './pdfview.page.html',
  styleUrls: ['./pdfview.page.scss'],
})
export class PdfviewPage implements OnInit {
 furl:any;
  constructor(public activatedRoute : ActivatedRoute) { 

    this.activatedRoute.queryParams.subscribe((data)=>{
      console.log(data);
     this.furl = data.fileurl;
    })
  }

  ngOnInit() {
  }

}
