import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { Formulario3Routing, FORMULARIO3_COMPONENTS } from './formulario3.routing';
import { Formulario3Service } from './servicios/formulario3.service';






@NgModule({
  imports: [
    CommonModule,
    Formulario3Routing,
    MaterialModule
  ],
  providers : [
    Formulario3Service
  ],
  declarations: [FORMULARIO3_COMPONENTS]
})
export class Formulario3Module { }
