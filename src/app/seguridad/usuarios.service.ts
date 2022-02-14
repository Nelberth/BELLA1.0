import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuarios.model';
import { HttpClient } from '@angular/common/http';
import { Usuarioss } from './usuario';
import { environment } from 'src/environments/environment.prod';
import { Observable, Subject } from 'rxjs';
import { AutentificarService } from '../controlador/autentificar/autentificar.service';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http : HttpClient, private token:AutentificarService) { 
    this.usuarios$ = new Subject();
    
  }
  actualizarkey(){
    this.key=this.token.getToken();
  }
  key:string;
  usuarios:Usuario[]=[];
  private usuarios$: Subject<Usuarioss[]>;
  urlPagina = environment.url;
  cantidad=10;
  path=`${this.urlPagina}usuario/usuario.controlador.php`;

  ver_usuarios(empezar:number=0, buscar:string=''){ 
    let data={
      'token':this.key,
      'opcion':1,
      'empezar':(empezar*this.cantidad),
      'buscar':buscar,
    }
     return this.http.post<Usuarioss[]>(this.path,data);
  }
 
  agregar_usuarios(user:string, password:string, rol:number){
    let data={
      'token':this.key,
      'opcion':2,
      'user': user,
      'password':password,
      'rol': rol
    }
     return this.http.post<String>(this.path,data);
  }

  $id:number;
  setId(id:number){
    this.$id=id;
  }
  eliminar_usuario(){
    let data={
      'token':this.key,
      'opcion':3,
      'id': this.$id
    }
     return this.http.post<Number>(this.path,data);
  }
  actualizar_usuario(id:number, tipo:string, texto:any){
    let data={
      'token':this.key,
      'opcion':4,
      'id': id,
      'tipo': tipo,
      'texto':texto
    }
     return this.http.post<Usuarioss[]>(this.path,data); 
  }
  paginacion_usuario(buscar:any=''){
    let data={
      'token':this.key,
      'opcion':6,
      'buscar': buscar
    }
     return this.http.post<number>(this.path,data); 
  }

  disponible_usuario(user=''){
    let data={
      'token':this.key,
      'opcion':7,
      'user': user
    }
     return this.http.post<number>(this.path,data); 
  }
  
  getUsuarios$(): Observable<Usuarioss[]> {
    return this.usuarios$.asObservable();
  }

  quitar_usuario(){  
    for(let i=0; i<this.usuarios.length; i++){
      if(this.usuarios[i].id==this.$id){
        this.usuarios.splice(i,1);
        break;
      }
    }
  }

  armar_usuario(usuario:Array<Usuarioss>){
    this.usuarios=[];
    usuario.forEach(e=>{
      let nuevoUsuario=new Usuario(e.id, e.user,e.password, e.rol,e.estado);
      this.usuarios.push(nuevoUsuario);
    })
    this.usuarios$.next(this.usuarios);
    
  }
  

  

  
}
