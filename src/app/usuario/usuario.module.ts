import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { UsuarioRouting, USUARIO_COMPONENTS } from './usuario.routing';
import { UsuarioService } from './servicios/usuario.service';







@NgModule({
  imports: [
    CommonModule,
    UsuarioRouting,
    MaterialModule
  ],
  providers : [
    UsuarioService
  ],
  declarations: [USUARIO_COMPONENTS]
})
export class UsuarioModule { }
