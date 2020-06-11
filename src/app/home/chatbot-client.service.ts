import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatbotClientService {

  private baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
  private token = 'aee49c5db344410cad3bd4989322b48e';

  constructor(private http: HttpClient) { }

  public getResponse(query: string) {
    let data = {
      query: query,
      lang: 'pt-br',
      sessionId: '12345'
    }

    return this.http
      .post(`${this.baseURL}`, data, { headers: this.getHeaders() });
  }

  public getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.token);
    return headers;
  }
}
