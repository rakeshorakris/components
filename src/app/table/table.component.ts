import { Component, OnInit } from '@angular/core';
import { tabledata, ServiceService, tabledata1 } from './service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data:tabledata[]=[
  ];
  data1:tabledata1[]=[

  ];
checked:boolean=true
btn2checked:boolean=false
table_d:boolean=true
  constructor(public serv:ServiceService ) { }
  
  ngOnInit(): void {
    this.data=this.serv.table_data;
    this.data1=this.serv.table_dat;
  }

  clicked(){
    if(this.checked==false && this.btn2checked==true){
      this.checked=!this.checked;
      this.btn2checked=!this.btn2checked;
    }
   
    

  }
  clicked2(){
    if(this.checked==true && this.btn2checked==false){
    this.btn2checked=!this.btn2checked;
     this.checked=!this.checked;
    }
  }
}
