import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpClient:HttpClient
  constructor(private http:HttpClient) {
    this.httpClient=http;
   }
  doLogin(loginForm:Login){

    return this.httpClient.get('http://localhost:8080/getAll-users')
    .subscribe(data=>{
      console.log(data);
  })

  } 
}
