import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../model/user-model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-dados-confirmar',
  templateUrl: './dados-confirmar.component.html',
  styleUrls: ['./dados-confirmar.component.css']
})
export class DadosConfirmarComponent implements OnInit {
  usuario: UserModel;
  constructor(private fb: FormBuilder, private securityService: SecurityService, private rotas: Router) { }

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
        dtNascimento: [this.usuario?.dtNascimento],
        conta: [this.usuario.conta === 1 ? 'Poupança' : 'Corrente']
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
      this.usuario.conta = this.formulario.controls.conta.value;

      if (this.formulario.valid) {
        debugger
        this.securityService.salvarCadastro(this.usuario);
        this.rotas.navigate(['security', 'login']);
      }
    }
}
