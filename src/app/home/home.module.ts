import { HomeRoutingModule } from './home-routing.module';
import { ChatbotModule } from './../chatbot/chatbot.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ChatbotModule
  ]
})
export class HomeModule { }
