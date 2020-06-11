import { SecurityService } from './../../services/security.service';
import { UserModel } from './../../model/user-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-conta',
  templateUrl: './dados-conta.component.html',
  styleUrls: ['./dados-conta.component.css']
})
export class DadosContaComponent implements OnInit {
  usuario: UserModel;
  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('dadosUser'));

  }
  associarConta(contaEnum: number) {
    this.usuario.conta = contaEnum;
    localStorage.clear();
    localStorage.setItem('dadosUser', JSON.stringify(this.usuario));
    this.securityService.seletor.next('confirmar');
  }
}
