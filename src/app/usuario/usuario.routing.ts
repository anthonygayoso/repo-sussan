import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './pagina/usuario.component';








export const USUARIO_COMPONENTS = [
  UsuarioComponent
];

const routes: Routes = [
  {
    path: 'usuario',
    component: UsuarioComponent
     
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

export class UsuarioRouting { }