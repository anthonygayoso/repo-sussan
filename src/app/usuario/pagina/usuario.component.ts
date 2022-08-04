import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { UsuarioService } from '../servicios/usuario.service';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {


  actPerfilForm : FormGroup
  displayedColumns: string[] = ['user_id', 'fullname','username','email', 'estado','rol_desc','action' ];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private formBuilder : FormBuilder,private serviceFormulario : UsuarioService ) { }

  ngOnInit( ) {
    this.usuario();

    this.actPerfilForm=this.formBuilder.group({
      user_id : [''],
      nombres : [''],
      apellidos : [''],
      nom_usuario : [''],
      correo : [''],
      ruc : [''],
    })
  }


  editarUsuario(element){
    console.log(element);
    // this.actPerfilForm.setValue(element);
    this.actPerfilForm.controls.ruc.setValue(element.ruc);
    this.actPerfilForm.controls.user_id.setValue(element.user_id);
    this.actPerfilForm.controls.nombres.setValue(element.first_name);
    this.actPerfilForm.controls.apellidos.setValue(element.last_name);
    this.actPerfilForm.controls.nom_usuario.setValue(element.username);
    this.actPerfilForm.controls.correo.setValue(element.email);
    // this.actPerfilForm.value.user_id = element.user_id;
    // this.actPerfilForm.value.nombres = element.first_name;
    // this.actPerfilForm.value.nom_usuario = element.username;
    // this.actPerfilForm.value.correo = element.email;

    //this.actualizarPerfil()
  }

  eliminarUsuario(){
    console.log('eliminar')

  }

  
  usuario(){
    this.serviceFormulario.usuario().subscribe(
      (response) => {
        console.log(response)
        this.dataSource = response.result;
      }
    );
  }

  actualizarPerfil(){
    this.serviceFormulario.actualizarPerfil(this.actPerfilForm.value).subscribe(
      (response) => {
        console.log(response)
        if (response.ok == true && response.result == 1 ) {
          console.log('actualizacion correcta');
          this.usuario();
        }else{
          console.log('usuario incorrecto')
        }
      }
    );
  }

}



