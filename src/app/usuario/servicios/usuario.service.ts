import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable()

export class UsuarioService {
private service : String = environment.url;

constructor(private https : HttpClient) { }
 

     
  usuario(){
    const url = this.service + 'panel-control/listarUsuarios';
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




}
