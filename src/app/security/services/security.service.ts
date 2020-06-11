import { UserAccountModel } from './../model/user-account-model.enum';
import { CadastroComponent } from './../cadastro/cadastro.component';
import { UserModel } from './../model/user-model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  seletor: BehaviorSubject<string> = new BehaviorSubject('dadosPessoais');

  constructor(private http: HttpClient) { }

  public checkLogin(user: UserModel) {
    return this.http.get('http://localhost:3000/security?username=' + user.usuario + '&senha=' + user.senha);
  }

  public salvarCadastro(user: UserModel) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let options = ({headers});

    return this.http.post('http://localhost:3000/security/', user, options).subscribe(obj => {
      console.log(obj);
    });
    }
  }
