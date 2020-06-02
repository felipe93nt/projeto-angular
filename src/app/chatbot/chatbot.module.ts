import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWidgetComponent } from './chat-widget/chat-widget.component';



@NgModule({
  declarations: [ChatWidgetComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ChatWidgetComponent]
})
export class ChatbotModule { }
