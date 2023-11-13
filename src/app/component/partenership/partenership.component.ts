import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partenership',
  templateUrl: './partenership.component.html',
  styleUrls: ['./partenership.component.css']
})
export class PartenershipComponent  implements OnInit{

companyShips:any=[
  {
    id:1,
    name:"Drive Xpress",
    src:"assets/image 10.png"
  },
  {
    id:2,
    name:"BROAD REACH",
    src:"assets/image 11.png"
  },
  {
    id:3,
    name:"FLEX EXPRESS COURIER",
    src:"assets/image 12.png"
  }
]
  constructor() {
    
  }
  ngOnInit(): void {
  }

}
