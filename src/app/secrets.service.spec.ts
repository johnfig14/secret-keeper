/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SecretsService } from './secrets.service';

describe('Service: Secrets', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecretsService]
    });
  });

  it('should ...', inject([SecretsService], (service: SecretsService) => {
    expect(service).toBeTruthy();
  }));
});
