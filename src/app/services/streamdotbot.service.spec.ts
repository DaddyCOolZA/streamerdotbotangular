import { TestBed } from '@angular/core/testing';

import { StreamdotbotService } from './streamdotbot.service';

describe('Streamdotbot.ServiceService', () => {
  let service: StreamdotbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamdotbotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
