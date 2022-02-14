import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class IniciarSessionService {


  constructor(private http : HttpClient) { }
  urlPagina = environment.url;
  cantidad=10;
  path=`${this.urlPagina}autentificar/auth.controlador.php`;

iniciar(user:string, password:string){
  let data={
    'user': user,
    'password':password,
  }
   return this.http.post<any>(this.path,data);
}




}
