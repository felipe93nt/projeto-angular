import { TestBed } from '@angular/core/testing';

import { ChatbotClientService } from './chatbot-client.service';

describe('ChatbotClientService', () => {
  let service: ChatbotClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbotClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
