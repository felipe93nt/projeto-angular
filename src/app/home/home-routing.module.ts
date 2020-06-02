import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../security/auth.guard';


const routes: Routes = [
  { path:"", component:IndexComponent, canActivate:[AuthGuard]}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
