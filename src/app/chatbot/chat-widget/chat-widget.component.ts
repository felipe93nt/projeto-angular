import { ChatbotClientService } from './../../home/chatbot-client.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

export interface Message {
  remetente?: string;
  mensagem: string;
  data?: Date;
}

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css']
})


export class ChatWidgetComponent implements OnInit {
@ViewChild('scrollMe') private myScrollContainer: ElementRef;

  msg: string;
  resultados: Message[];

  constructor(private chatBoot: ChatbotClientService) {
    this.initBoot();
  }
  ngOnInit(): void {
  }

  initBoot() {
    this.resultados = [];
    this.chatBoot.getResponse('oi')
      .subscribe((lista: any) => {
        lista.result.fulfillment.value?.forEach((element) => {
          this.resultados.push({ remetente: 'boot', mensagem: element.speech, data: lista.timestamp });
          console.log(lista.result.fulfillment.value);
        });
      });
  }

  sendMessage() {
    this.resultados.push({ remetente: 'eu', mensagem: this.msg, data: new Date() });
    this.chatBoot.getResponse(this.msg)
      .subscribe((lista: any) => {
        lista.result.fulfillment.messages.forEach((element) => {
          this.resultados.push({ remetente: 'boot', mensagem: element.speech, data: lista.timestamp });
        })
      })

    this.msg = '';
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
