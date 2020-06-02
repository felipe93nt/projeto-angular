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

  
  loginForm:FormGroup = this.fb.group({
    email: ["",[Validators.email,Validators.required]],
    senha: ["",[Validators.required,Validators.minLength(5)]]
  });

  errorList: any = [];


  constructor(private httpController:SecurityService, private routing:Router, private fb:FormBuilder){}

  ngOnInit(){
    localStorage.clear();
  }

  onSubmit(){
    this.errorList = [];
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);
    if(!this.loginForm.valid){
      this.loginForm.controls.email.markAsTouched();
      this.loginForm.controls.senha.markAsTouched();
      return;
    }

    console.log(this.loginForm.value.email);

    let user: UserModel = {
      usuario:  this.loginForm.value.email,
      senha: this.loginForm.value.senha
     
    };

    

    console.log(user);
    this.httpController.checkLogin(user).subscribe(
      (success:any[]) => {

      if(success.length >= 1 ){
        localStorage.setItem('token','logado');
        this.routing.navigate(['/index']);
      }
      else{
        console.log("não existe");
      }

      },
      error => this.errorList.push("Ocorreu um erro, tente novamente.")

    );
    

   /*  this.userController.checkLogin(this.loginForm.value).subscribe(
     (obj:any) => {  
       
       if(obj.length >= 1){
            localStorage.setItem('token',"autenticado");
            this.userController.user.next(true);
            this.routing.navigate(['']);
       }


     },
     error => {
      console.log(error);
     }
    ).add(() =>{ console.log("requisição completa");}); */




    /* this.Validate(this.loginForm); */
  }





 /*  Validate(form: FormGroup) {
    this.errorList = [];
    Object.keys(form.controls).forEach(key => {

      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log(key + " " + keyError + " " +  controlErrors[keyError]);
          this.errorList.push(this.errorBuilder(key,keyError));
          result.push({
            'control': key,
            'error': keyError,
            'value': controlErrors[keyError]
          });
        });
      }
    });
    return this.loginForm.valid;
  }

  errorBuilder(key,error){
    let erro;
    switch(error){
      case 'email':
        erro = "O email não é válido!";
        break;
      case 'required':
        erro = "Por favor preencha o campo de " + key;
        break;

    }

    return erro;
  }
 */
  

}
