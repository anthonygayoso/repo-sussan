import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { Formulario2Routing, FORMULARIO2_COMPONENTS } from './formulario2.routing';







@NgModule({
  imports: [
    CommonModule,
    Formulario2Routing,
    MaterialModule
  ],
  declarations: [FORMULARIO2_COMPONENTS]
})
export class Formulario2Module { }