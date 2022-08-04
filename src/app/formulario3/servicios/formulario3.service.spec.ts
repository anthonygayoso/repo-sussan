/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Formulario3Service } from './formulario3.service';

describe('Service: Formulario3', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Formulario3Service]
    });
  });

  it('should ...', inject([Formulario3Service], (service: Formulario3Service) => {
    expect(service).toBeTruthy();
  }));
});
