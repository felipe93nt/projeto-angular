import { SecurityService } from './../../services/security.service';
import { UserModel } from './../../model/user-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  usuario: UserModel;

  constructor(private fb: FormBuilder, private securityService: SecurityService) { }

  formulario: FormGroup;

    ngOnInit() {
      try {
        this.usuario = JSON.parse(localStorage.getItem('dadosUser'));
      } catch (e) {}
      this.formulario = this.fb.group({
        nome: [this.usuario?.nome, [Validators.required]],
        sobrenome: [this.usuario?.sobrenome, [Validators.required]],
        email: [this.usuario?.email, [Validators.email,  Validators.required]],
        usuario: [this.usuario?.usuario],
        senha: [this.usuario?.senha, [Validators.minLength(8), Validators.required]],
        dtNascimento: [this.usuario?.dtNascimento]
      });
    }
    onSubmit() {
      this.usuario = {};
      this.usuario.nome = this.formulario.value.nome;
      this.usuario.sobrenome = this.formulario.controls.sobrenome.value;
      this.usuario.senha = this.formulario.controls.senha.value;
      this.usuario.email = this.formulario.controls.email.value;
      this.usuario.usuario = this.formulario.controls.usuario.value;
      this.usuario.dtNascimento = this.formulario.controls.dtNascimento.value;

      if (this.formulario.valid) {
        this.formulario.controls.nome.markAsTouched();
        this.formulario.controls.sobrenome.markAsTouched();
        this.formulario.controls.email.markAsTouched();
        this.formulario.controls.usuario.markAsTouched();
        this.formulario.controls.senha.markAsTouched();
        localStorage.setItem('dadosUser', JSON.stringify(this.usuario));
        this.securityService.seletor.next('conta');
      }
    }
  }

