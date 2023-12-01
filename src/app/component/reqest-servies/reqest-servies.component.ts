import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup ,Validators} from '@angular/forms';
import {EmailserveService} from "../../service/emailserve.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reqest-servies',
  templateUrl: './reqest-servies.component.html',
  styleUrls: ['./reqest-servies.component.css']
})
export class ReqestServiesComponent implements OnInit {
  constructor(private _FormBuilder:FormBuilder ,private _sb:EmailserveService,private toastr: ToastrService){}
  ngOnInit():void{
    this.getXservice(),
    this.createForm()
    
  }
  
  chosenTruckType = '';

  colored1:boolean = false;
  colored2:boolean = false;
  colored3:boolean = false;
  colored4:boolean = false;

  selectedPlan = '';
  selectedPlanType = '';
	onSelectedPlan(value:string): void {
		this.selectedPlan = value;
	}
	onSelectedType(value:string): void {
		this.selectedPlanType = value;
	}

  selectedServeces:any[] = [];
  xServices:string = '';

  getXservice(){
    this.selectedServeces = [
      {id: 'X001',label: 'Hair Removal', isChecked: false},
      {id: 'X002',label: 'Engine Shampoo & Dressing', isChecked: false},
      {id: 'X003',label: 'Roof Cleaning', isChecked: false},
      {id: 'X004',label: 'Aluminum Shine', isChecked: false},
      {id: 'X004',label: 'Glass Polish', isChecked: false},
      {id: 'X005',label: 'Electric Air Dryer', isChecked: false},
      {id: 'X006',label: 'Walk Side', isChecked: false},
      {id: 'X007',label: 'Heavy Machinery Wash', isChecked: false},
      {id: 'X008',label: 'Boat and Mariene Scrubbing', isChecked: false},
      {id: 'X009',label: 'Driveway preesure washing', isChecked: false},
      {id: 'X010',label: 'Yard preesure Washing', isChecked: false},
    ];
  }
  onChange(){
    console.log(this.selectedServeces);
    
  }

  // ..
  
  x:any;
  xx:any;
  xxx:any;
  yyy:any;
  yy:any;
  y:any;
changecontent(content:any) {
  this.chosenTruckType = '';
  this.colored1 = false;
  this.colored2 = false;
  this.colored3 = false;
  this.colored4 = false;
    if(content=='Commercial vans- Sprinter Category'){
      this.colored1 = true;
      this.colored2 = false;
      this.colored3 = false;
      this.colored4 = false;

      this.chosenTruckType = content;

      this.x='45$';
      this.y='55$';
      this.xx="150$";
      this.yy="180$";
      this.xxx="170$";
      this.yyy="210$"; 
    }else if(content=='5-Ton Truck Size'){
        this.colored1 = false;
        this.colored2 = true;
        this.colored3 = false;
        this.colored4 = false;
      this.chosenTruckType = content;
      this.x='55$';
      this.y='65$';
      this.xx="100$";
      this.yy="120$";
      this.xxx="135$";
      this.yyy="160$"; 
    }
    else if(content=='Semi Truck Day Cab'){
        this.colored1 = false;
        this.colored2 = false;
        this.colored3 = true;
        this.colored4 = false;
      this.chosenTruckType = content;
      this.x=0;
      this.y=0;
      this.xx="130$";
      this.yy="165$";
      this.xxx="165$";
      this.yyy="215$"; 
    }
    else if(content=='Semi Truck Sleeper'){
        this.colored1 = false;
        this.colored2 = false;
        this.colored3 = false;
        this.colored4 = true;
      this.chosenTruckType = content;
      this.x="45$";
      this.y="55$";
      this.xx="150$";
      this.yy="200$";
      this.xxx="180$";
      this.yyy="230$"; 
    }
  
  }

  requestForm!:FormGroup
  createForm():void{
    this.requestForm=this._FormBuilder.group({
      first_name:['',Validators.required,Validators.maxLength(10),Validators.minLength(3)],
      last_name:['',Validators.required,Validators.maxLength(10),Validators.minLength(3)],
      address:['',Validators.required,Validators.maxLength(50),Validators.minLength(3)],
      city:['',Validators.required,Validators.maxLength(30),Validators.minLength(3)],
      postalcode:['',Validators.required],
      province:['',Validators.required],
      contact_number:['',Validators.required],
      email:['',Validators.required, Validators.email],
      note:['']
    })
  }


  submitForm() {    
    this.xServices = this.selectedServeces.filter(x => x.isChecked == true).map(x => x.label).join(", ").toString();
    //rahmamohammedhasan@gmail.com 
    // قم بجمع بيانات النموذج
    const formData =JSON.stringify({
      to: "emanamra1999@gmail.com",
      subject: "New FLEX Wash Request",
      message:"<strong>Name:</strong> "+this.requestForm.get("first_name")?.value+" "+
              this.requestForm.get("last_name")?.value
              +"<br>"+"<strong>Email:</strong> "+this.requestForm.get("email")?.value+"<br>"+
              "<strong>Contact_Number:</strong> "+this.requestForm.get("contact_number")?.value+"<br>"+
              "<strong>Address:</strong> "+this.requestForm.get("address")?.value+"<br>"+
              "<strong>city:</strong> "+this.requestForm.get("city")?.value+ "<br>"+
              "<strong>Postalcode:</strong> "+this.requestForm.get("postalcode")?.value+"<br>"+
              "<strong>Province:</strong> "+this.requestForm.get("province")?.value+"<br>"+
              "<strong>Wahs_plan:</strong> "+this.selectedPlan+"<br>"+
              "<strong>Plan_Type:</strong> "+this.selectedPlanType+"<br>"+
              "<strong>Truck_Type:</strong> "+this.chosenTruckType+"<br>"+
              "<strong>Extra Services:</strong> "+this.xServices+"<br>"
              +"<strong>Note:</strong> "+this.requestForm.get("note")?.value+"<br>"
              
}) ;
      // استخدم الخدمة لإرسال البيانات إلى الخادم
      this._sb.sendFormData(formData).subscribe(
        (res)=>{ this.toastr.info('The data has been successfully sent.', 'Thank you.');
      this.requestForm.reset()})
  }

}