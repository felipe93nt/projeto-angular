//meus
import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SecurityService } from './services/security.service';

//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EstiloHeaderDirective } from './../diretivas-security/estilo-header.directive';
import { DadosPessoaisComponent } from './cadastro/dados-pessoais/dados-pessoais.component';
import { DadosContaComponent } from './cadastro/dados-conta/dados-conta.component';
import { DadosConfirmarComponent } from './cadastro/dados-confirmar/dados-confirmar.component';


@NgModule({
  declarations: [LoginComponent, CadastroComponent, EstiloHeaderDirective, DadosPessoaisComponent, DadosContaComponent, DadosConfirmarComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  exports:[
    EstiloHeaderDirective
  ],
  providers: [SecurityService]

})
export class SecurityModule { }
