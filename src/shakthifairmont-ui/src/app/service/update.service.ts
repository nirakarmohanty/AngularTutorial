import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) {
    }

    getData(){
      
      let header = new Headers();
      header.append('Content-Type', 'application/json');
      header.append('Access-Control-Allow-Origin', 'http://localhost:8080');
      header.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      header.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      header.append('Access-Control-Allow-Credentials', 'true');
      return this.http.get('http://localhost:8182/greet/user?name=Naman',
        //{ headers }
      )
      .subscribe(data=>{
        console.log("Response we got",data);
      })
    }

}
