import { UserModel } from './../model/user-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http:HttpClient) { }

  
  public checkLogin(user:UserModel){
    return this.http.get("http://localhost:3000/security?username=" + user.usuario + "&senha=" + user.senha)
  }


}
