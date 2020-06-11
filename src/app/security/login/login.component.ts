import { UserModel } from './../model/user-model';
import { SecurityService } from './../services/security.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: ['', [ Validators.email, Validators.required]],
    senha: ['', [ Validators.required, Validators.minLength(5)]]
  });

  errorList: any = [];


  constructor(private httpController: SecurityService, private routing: Router, private fb: FormBuilder) {}

  ngOnInit() {
    localStorage.clear();
  }

  onSubmit() {
    console.log(this.loginForm.controls.email.errors);
    this.errorList = [];

    if (!this.loginForm.valid) {
      this.loginForm.controls.email.markAsTouched();
      this.loginForm.controls.senha.markAsTouched();
      return;
    }

    const user: UserModel = {
      usuario:  this.loginForm.value.email,
      senha: this.loginForm.value.senha
    };

    /*if (user.usuario === 'admin@gmail.com' && user.senha === '12345') {
      localStorage.setItem('token', 'logado');
      this.routing.navigate(['/index']);
    } else {
      this.routing.navigate(['security', 'cadastro']);
    }*/
    this.httpController.checkLogin(user).subscribe(
      (success: any[]) => {
        if (success.length >= 1 ) {
          localStorage.setItem('token', 'logado');
          this.routing.navigate(['/index']);
        } else {
          this.routing.navigate(['security', 'cadastro']);
        }
      },
      error => {
        this.errorList.push('Ocorreu um erro, tente novamente.');
        this.routing.navigate(['security', 'cadastro']);
      }
    );
   }
}
