import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit{
  serviceId:any=1
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
  service:any={}
  constructor(private _ActivatedRoute:ActivatedRoute){
    this.serviceId=_ActivatedRoute.snapshot.params['id']   
    this.getCompany(this.serviceId)
  }
  ngOnInit(): void {
  }
  getCompany(id:any){
   for (let index = 0; index < this.services.length; index++) {
    
    if(this.services[index].id==id){
   this.service=this.services[index]
   console.log(this.service);
   
    }
   }
  }
}
