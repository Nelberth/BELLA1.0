import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AutentificarService } from '../autentificar/autentificar.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  urlPagina = environment.url;
  path=`${this.urlPagina}perfil/perfil.controlador.php`;
  constructor(private http : HttpClient, private token:AutentificarService) {
    this.key=this.token.getToken();
   
   }
   key:string;
  getPerfil(){  
    let data={
      'token':this.key,
      'opcion': 1
    }
     return this.http.post<string>(this.path,data);
  }
  

  
  actualizarkey(){
    this.key=this.token.getToken();
  }
 

}
