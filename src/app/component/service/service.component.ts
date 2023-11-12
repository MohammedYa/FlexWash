import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{
  

services:any=[
  {
    id:1,
    logo:"../../../assets/services.png",
    name:"Detailing",
    info:[
     "Floor Mats & Seat Detailing",
     "Shampooing for Carpet, Floor, Mats, and Seats",
     "Dashboard & Doors Detailing",
     "Carper Salt & Stain Removal",
     "Window Cleaning Inside and Outside",
     "A/C Vent Cleaning",
     "Fabric/Leather Clean & Condition"
    ]
  },
  {
    id:2,
    logo:"../../../assets/services2.png",
    name:"Wash & Wax",
    info:[
     "Wheel Rim Cleaner & Shine",
     "Dirt-Free Rinse",
     "Paint Protection",
     "Soap Wash",
     "Bug Repellent",
     "Tire Scrub",
     "Bug Off"
    ]
  },
  {
    id:3,
    logo:"../../../assets/services3.png",
    name:"On-Demand Services",
    info:[
     "Plazas & Garages",
     "Warehouses & Yards",
     "Boats & Ports",
     "Parking Garages",
     "Sidewalks",
     
    ]
  },
  {
    id:4,
    name:"Extra Services",
    logo:"../../../assets/services4.png",

    info:[
     "Pet Hair Removal",
     "Engine Shampoo &Dressing",
     "Roof Cleaning",
     "Aluminum Shine",
     "Glass Polish",
     "Electric Air Freshening",
    ]
  },
  
]

  constructor(){

  }
  
  
  
  ngOnInit(): void {
  }

}
