import { LoginComponent } from './security/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"",redirectTo:"index", pathMatch:"full"
  },
  {path:"security" , loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)},
  {path:"index" , loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
