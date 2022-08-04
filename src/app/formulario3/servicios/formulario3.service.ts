import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interface/login-response';

@Injectable()

export class Formulario3Service {
private service : String = environment.url;

constructor(private https : HttpClient) { }
  // formulario = this.formulario3Form.value

  login(formulario3Form){

    const url = this.service + 'security/login';

    // o tambien puedes armar el json de esta manera
    const data = {
      email: formulario3Form.email,
      password: formulario3Form.password,
      platform_id : 1 
    };


    return this.https.post<LoginResponse>(url, data);

  }

  miPerfil(){
    const url = this.service + 'security/my-profile';
    const options = {
      headers : {
        'token' : localStorage.getItem('token')
      }
    };
    return this.https.get<any>(url, options);
  }

  actualizarPerfil(actPerfilForm){

    const url = this.service + 'security/update-profile';

    
    const options = {
      headers : {
        'token' : localStorage.getItem('token')
      }
    };
    return this.https.post<any>(url, actPerfilForm, options);

  }

  changePass(changePassForm){

    const url = this.service + 'security/changePassword';

    // o tambien puedes armar el json de esta manera
    
    const options = {
      headers : {
        'token' : localStorage.getItem('token')
      }
    };
    return this.https.post<any>(url, changePassForm, options);

  }

  usuario(){
    const url = this.service + 'panel-control/listarUsuarios';
    const options = {
      headers : {
        'token' : localStorage.getItem('token')
      }
    };
    return this.https.get<any>(url, options);
  }




 
  ruc(ruc){
    const url = this.service + 'documento/obtener-ruc/'+ ruc;
    const options = {
      headers : {
        'token' : localStorage.getItem('token')
      }
    };
    return this.https.get<any>(url, options);
  }

  documentos(){
    const url = this.service + 'documento/obtener';
    const options = {
      headers : {
        'token' : localStorage.getItem('token')
      }
    };
    return this.https.get<any>(url, options);
  }

  

  eliminarDoc(){

    const url = this.service + 'documento/eliminar/' + 1;

    // o tambien puedes armar el json de esta manera
   
    const options = {
      headers : {
        'token' : localStorage.getItem('token')
      }
    };
    return this.https.post<any>(url, null, options);

  }

  actualizarDoc(){

    const url = this.service + 'documento/cambiar-estado';

    // o tambien puedes armar el json de esta manera
   
    const data = {
      estado_id: 1,
      documentos : [
        { documento_id : 1 },
        { documento_id : 2 },
        { documento_id : 3 }
      ]
    };

    const options = {
      headers : {
        'token' : localStorage.getItem('token')
      }
    };
    return this.https.post<any>(url, data, options);

  }

  dashboard(){
    const url = this.service + 'dashboard/cargar-dashboard';
    const options = {
      headers : {
        'token' : localStorage.getItem('token')
      }
    };
    return this.https.get<any>(url, options);
  }


}
