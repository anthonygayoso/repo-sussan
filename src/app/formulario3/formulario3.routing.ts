import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Formulario3Component } from './pagina/formulario3.component';







export const FORMULARIO3_COMPONENTS = [
  Formulario3Component
];

const routes: Routes = [
  {
    path: 'formulario3',
    component: Formulario3Component
     
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class Formulario3Routing { }