import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailserveService {
  constructor(private http: HttpClient) {}
  sendFormData(formData: any){
    return this.http.post("https://sendmail-api-docs.vercel.app/api/send", formData);
  }
}
