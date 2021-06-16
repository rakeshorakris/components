import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
table_data:tabledata[]=[
  new tabledata('hello','welcome','11/11/2022'),
  new tabledata('hello','welcome','11/11/2022'),
  new tabledata('hello','welcome','11/11/2022'),
  new tabledata('hello','welcome','11/11/2022'),
  new tabledata('hello','welcome','11/11/2022'),
  new tabledata('second','welcome','12/11/2022')
];
table_dat:tabledata1[]=[
  new tabledata1('hello td1','welcome','11/11/2022'),
  new tabledata1('hello','welcome','11/11/2022'),
  new tabledata1('hello','welcome','11/11/2022'),
  new tabledata1('hello','welcome','11/11/2022'),
  new tabledata1('secondtd1','welcome','12/11/2022')
];
  constructor() { }
}
export class tabledata{
PublicationName="";
 TaskStatus="";
 Deadline="";

  constructor( PublicationName:string,TaskStatus:string,Deadline:string){
     this.PublicationName=PublicationName;
     this.TaskStatus=TaskStatus;
     this.Deadline=Deadline;

  }

}
export class tabledata1{
  Clinical="";
   TaskStatus="";
   Deadline="";
  
    constructor( Clinical:string,TaskStatus:string,Deadline:string){
       this.Clinical=Clinical;
       this.TaskStatus=TaskStatus;
       this.Deadline=Deadline;
  
    }
  
  }