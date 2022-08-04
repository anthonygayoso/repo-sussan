import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Formulario2Component } from './pagina/formulario2.component';








export const FORMULARIO2_COMPONENTS = [
  Formulario2Component
];

const routes: Routes = [
  {
    path: 'formulario2',
    component: Formulario2Component
     
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

export class Formulario2Routing { }