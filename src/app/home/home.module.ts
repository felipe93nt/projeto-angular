import { HttpClientModule } from '@angular/common/http';
import { ChatbotClientService } from './chatbot-client.service';
import { HomeRoutingModule } from './home-routing.module';
import { ChatbotModule } from './../chatbot/chatbot.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SecurityModule } from '../security/security.module';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ChatbotModule,
    SecurityModule,
    HttpClientModule
  ],
  providers: [ChatbotClientService]
})
export class HomeModule { }
