import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AutentificarService } from 'src/app/controlador/autentificar/autentificar.service';
import { environment } from 'src/environments/environment.prod';
import { Bancoss } from '../interfaces/bancos';
import { Bancos } from '../models/bancos.model';

@Injectable({
  providedIn: 'root'
})
export class BancosService {
  urlPagina = environment.url;
  cantidad=10;
  path=`${this.urlPagina}bancos/bancos.controlador.php`;

  private bancos$: Subject<Bancoss[]>;

  constructor(private http : HttpClient, private token:AutentificarService) { 
    this.bancos$ = new Subject();
    this.key=this.token.getToken();
  }
  key:string;
  getBancos$(): Observable<Bancoss[]> {
    return this.bancos$.asObservable();
  }

  actualizarkey(){
    this.key=this.token.getToken();
  }

  bancos:Bancos[]=[];
  ver_bancos(empezar:number=0, buscar:string=''){ 
   
    let data={
      'token':this.key,
      'opcion':1,
      'empezar':(empezar*this.cantidad),
      'buscar':buscar,
    }
     return this.http.post<Bancoss[]>(this.path,data);
  }
  
  agregar_bancos(nombre_banco:string, numero_banco:string, dinero_banco:string, id_moneda:number){
    let data={
      'token':this.key,
      'opcion':2,
      'nombre_banco': nombre_banco,
      'numero_banco':numero_banco,
      'dinero_banco': dinero_banco,
      'id_moneda': id_moneda
    }
     return this.http.post<String>(this.path,data);
  }

  $id:number;
  setId(id:number){
    this.$id=id;
  }
  eliminar_bancos(){
    console.log(this.$id)
    let data={
      'token':this.key,
      'opcion':3,
      'id': this.$id
    }
     return this.http.post<Number>(this.path,data);
  }
  actualizar_bancos(id:number, tipo:string, texto:any){
    let data={
      'token':this.key,
      'opcion':4,
      'id': id,
      'tipo': tipo,
      'texto':texto
    }
     return this.http.post<Bancoss[]>(this.path,data); 
  }
  paginacion_bancos(buscar:any=''){
    let data={
      'token':this.key,
      'opcion':6,
      'buscar': buscar
    }
     return this.http.post<number>(this.path,data); 
  }


  
  quitar_bancos(){  
    for(let i=0; i<this.bancos.length; i++){
      if(this.bancos[i].id==this.$id){
        this.bancos.splice(i,1);
        break;
      }
    }
  }


  armar_bancos(bancos:Array<Bancoss>){
    this.bancos=[];
    bancos.forEach(e=>{
      let nuevoBanco=new Bancos(e.id, e.nombre_banco,e.numero_banco, e.dinero_banco,e.icono_moneda);
      this.bancos.push(nuevoBanco);
    })
    this.bancos$.next(this.bancos);
    
  }

}
