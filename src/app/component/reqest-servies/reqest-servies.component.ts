import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup ,Validators} from '@angular/forms';
import {EmailserveService} from "../../service/emailserve.service"
@Component({
  selector: 'app-reqest-servies',
  templateUrl: './reqest-servies.component.html',
  styleUrls: ['./reqest-servies.component.css']
})
export class ReqestServiesComponent implements OnInit {
  constructor(private _FormBuilder:FormBuilder ,private _sb:EmailserveService){}
  ngOnInit():void{
    this.createForm()
  }
  requestForm!:FormGroup
  createForm():void{
    this.requestForm=this._FormBuilder.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      postalcode:['',Validators.required],
      province:['',Validators.required],
      contact_number:['',Validators.required],
      email:['',Validators.required, Validators.email],
    })
  }
  request(data:FormGroup):void{
    console.log(data.value)

  }
 
  submitForm() {
    const form=JSON.stringify({
      first_name:this.requestForm.get("first_name")?.value,
      last_name:this.requestForm.get("last_name")?.value,
      address:this.requestForm.get("address")?.value,
      city:this.requestForm.get("city")?.value,
      postalcode:this.requestForm.get("postalcode")?.value,
      province:this.requestForm.get("province")?.value,
      contact_number:this.requestForm.get("contact_number")?.value,
      email:this.requestForm.get("email")?.value,

    })
    console.log(form);
    
    // قم بجمع بيانات النموذج
    const formData =JSON.stringify({
      to: "rahmamohammedhasan@gmail.com",
      subject: "newjob",
      message:form,
  }) /* جمع بيانات النموذج هنا */;

    // استخدم الخدمة لإرسال البيانات إلى الخادم
    this._sb.sendFormData(formData).subscribe(
      (res)=>{console.log(res);
      }
    )
  }
}