/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Formulario2Service } from './formulario2.service';

describe('Service: Formulario2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Formulario2Service]
    });
  });

  it('should ...', inject([Formulario2Service], (service: Formulario2Service) => {
    expect(service).toBeTruthy();
  }));
});
