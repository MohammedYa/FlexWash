import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-reqest-servies',
  templateUrl: './reqest-servies.component.html',
  styleUrls: ['./reqest-servies.component.css']
})
export class ReqestServiesComponent implements OnInit {
  constructor(private _FormBuilder:FormBuilder){}
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
}