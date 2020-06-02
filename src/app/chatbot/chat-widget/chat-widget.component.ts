import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css']
})
export class ChatWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  conversa:any[] = []

  inputMsg:string;

  submit(){
    if(!this.inputMsg){
      return;
    }
    let m = {msg:this.inputMsg,user:"Ipsum",data:Date.now()}
    this.conversa.push(m);
    

    this.respostaBot(m);

    this.inputMsg = "";
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async respostaBot(m){ 
    await this.delay(500);
    if(m.msg == "Olá"){
      this.conversa.push({msg:"Olá, como vai você?",user:"Robô",data:Date.now()});
      return;
    }
    if(m.msg == "Qual o seu nome?"){
      this.conversa.push({msg:"Eu sou a Inteligencia Artificial BIA",user:"BIA",data:Date.now()});
      return;
    }

  }

}
