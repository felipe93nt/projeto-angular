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
import { EstiloHeaderDirective } from './diretivas-security/estilo-header.directive';






@NgModule({
  declarations: [LoginComponent, CadastroComponent, EstiloHeaderDirective],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  exports:[
  ],
  providers:[SecurityService]

})
export class SecurityModule { }
