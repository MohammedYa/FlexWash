import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partener-item',
  templateUrl: './partener-item.component.html',
  styleUrls: ['./partener-item.component.css']
})
export class PartenerItemComponent implements OnInit{
  companyId:any=1
  companyShips:any=[
    {
      id:1,
      name:"Drive Xpress",
      src:"assets/image 10.png",
      imgs:[
        "assets/image 13.png",
        "assets/image 14.png",
        "assets/image 15.png",
        "assets/image 18.png",
        "assets/image 16.png",
        "assets/image 17.png",
      ]
    },
    {
      id:2,
      name:"BROAD REACH",
      src:"assets/image 11.png",
      imgs:[
        "assets/image 13.png",
        "assets/image 14.png",
        "assets/image 15.png",
        "assets/image 18.png",
        "assets/image 16.png",
        "assets/image 17.png",
      ]
    },
    {
      id:3,
      name:"FLEX EXPRESS COURIER",
      src:"assets/image 12.png",
      imgs:[
        "assets/image 13.png",
        "assets/image 14.png",
        "assets/image 15.png",
        "assets/image 18.png",
        "assets/image 16.png",
        "assets/image 17.png",
      ]
    }
  ]
  company:any={}
  constructor(private _ActivatedRoute:ActivatedRoute){
    this.companyId=_ActivatedRoute.snapshot.params['id']   
    this.getCompany(this.companyId)
  }
  ngOnInit(): void {
  }
  getCompany(id:any){
   for (let index = 0; index < this.companyShips.length; index++) {
    
    if(this.companyShips[index].id==id){
   this.company=this.companyShips[index]
   console.log(this.company);
   
    }
   }
  }
}
