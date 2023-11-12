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

  // note:string = '';
  
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
      note:[''],
    })
  }

  submitForm() {

    
    console.log('Form submitted with value:', this.selectedPlan);
    console.log('Form submitted with value:', this.selectedPlanType);
    //rahmamohammedhasan@gmail.com 
    // قم بجمع بيانات النموذج
    const formData =JSON.stringify({
      to: "rahmamohammedhasan@gmail.com",
      subject: "New FLEX Wash Request",
      message:"Name: "+this.requestForm.get("first_name")?.value+" "+this.requestForm.get("last_name")?.value
              +"<br>"+"Email: "+this.requestForm.get("email")?.value+"<br>"+
              "Contact_Number: "+this.requestForm.get("contact_number")?.value+"<br>"+
              "Address: "+this.requestForm.get("address")?.value+"<br>"+
              "city: "+this.requestForm.get("city")?.value+ "<br>"+
              "Postalcode: "+this.requestForm.get("postalcode")?.value+"<br>"+
              "Province: "+this.requestForm.get("province")?.value+"<br>"+
              "Wahs_plan: "+this.selectedPlan+"<br>"+
              "Plan_Type: "+this.selectedPlanType+"<br>"+
              "Truck_Type: "+this.chosenTruckType+"<br>"+
              "Note: "+this.requestForm.get("note")?.value+"<br>"

  }) /* جمع بيانات النموذج هنا */;

    // استخدم الخدمة لإرسال البيانات إلى الخادم
    this._sb.sendFormData(formData).subscribe(
      (res)=>{ this.toastr.info('The data has been successfully sent.', 'Thank you.');
    this.requestForm.reset()}
    )
  }
}