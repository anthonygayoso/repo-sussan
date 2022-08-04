import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formulario3Service } from '../servicios/formulario3.service';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.scss']
})
export class Formulario3Component implements OnInit {
  formulario3Form : FormGroup
  actPerfilForm : FormGroup
  changePassForm : FormGroup

  constructor(private formBuilder : FormBuilder, private serviceFormulario : Formulario3Service) { }

  ngOnInit() {
    this.formulario3Form=this.formBuilder.group({
      email : ['', Validators.required,],
      password : ['', Validators.required,],
    })

    this.actPerfilForm=this.formBuilder.group({
      user_id : 2,
      nombres : [''],
      apellidos : [''],
      nom_usuario : [''],
      correo : [''],

    })

    this.changePassForm=this.formBuilder.group({
      actual : [''],
      nueva_pass : [''],
    })
    this.usuario();
  }


  login(){
    this.serviceFormulario.login(this.formulario3Form.value).subscribe(
      (response) => {
        console.log(response)
        if (response.ok == true && response.result != null ) {
          localStorage.setItem('token', response.result.token);
        }else{
          console.log('usuario incorrecto')
        }
      }
    );
  }


  miPerfil(){
    this.serviceFormulario.miPerfil().subscribe(
      (response) => {
        console.log(response)
      }
    );
  }

  actualizarPerfil(){
    this.serviceFormulario.actualizarPerfil(this.actPerfilForm.value).subscribe(
      (response) => {
        console.log(response)
        if (response.ok == true && response.result == 1 ) {
          console.log('actualizacion correcta');
        }else{
          console.log('usuario incorrecto')
        }
      }
    );
  }

  changePass(){
    this.serviceFormulario.changePass(this.changePassForm.value).subscribe(
      (response) => {
        console.log(response)
        if (response.ok == true && response.result == true ) {
          console.log('se cambio contraseña');
        }else{
          console.log('usuario incorrecto')
        }
      }
    );
  }

  usuario(){
    this.serviceFormulario.usuario().subscribe(
      (response) => {
        console.log(response)
        this.documentos()
      }
    );
  }

  

  ruc(){
    this.serviceFormulario.ruc('11111111111').subscribe(
      (response) => {
        console.log(response)
        if (response.ok) {
          
        }else{
          
        }
      }
    );
  }

  documentos(){
    this.serviceFormulario.documentos().subscribe(
      (response) => {
        console.log(response)
      }
    );
  }

  eliminarDoc(){
    this.serviceFormulario.eliminarDoc().subscribe(
      (response) => {
        console.log(response)
        if (response.ok == true && response.result == 1 ) {
          console.log('se elimino');
        }else{
          console.log('')
        }
      }
    );
  }

  actualizarDoc(){
    this.serviceFormulario.actualizarDoc().subscribe(
      (response) => {
        console.log(response)
      }
    );
  }

  dashboard(){
    this.serviceFormulario.dashboard().subscribe(
      (response) => {
        console.log(response)
      }
    );
  }

}
