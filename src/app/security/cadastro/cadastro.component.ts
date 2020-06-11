import { SecurityService } from './../services/security.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  valorSeletor: string;
  constructor(private securityService: SecurityService) {

  }

  ngOnInit() {
    this.securityService.seletor.subscribe(obj => {
      this.valorSeletor = obj;
      console.log(this.valorSeletor);
    });
    }
}
