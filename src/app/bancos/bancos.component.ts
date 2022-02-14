import { Component, OnInit } from '@angular/core';
import { AutentificarService } from '../controlador/autentificar/autentificar.service';
import { ModalService } from '../controlador/modal/modal.service';
import { NombrePaginaService } from '../controlador/nombre-pagina.service';
import { SpinerService } from '../controlador/spiner/spiner.service';
import { Bancos } from './models/bancos.model';
import { BancosService } from './servicios/bancos.service';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['../tablas.component.css', '../seguridad/seguridad.component.css']
})
export class BancosComponent implements OnInit {
   
  bancos:Bancos[];
  constructor(private nombrePagina:NombrePaginaService,private modalss:ModalService, private banco:BancosService, private spiner:SpinerService, private validar:AutentificarService ) { 
  this.modalss.nombreModal$='banco';
  this.modalss.opcion='banco';
  this.banco.actualizarkey();
  this.banco.getBancos$().subscribe(()=>{
    this.bancos=this.banco.bancos;
    if(this.bancos.length==0){
      this.alguien=false;
    }else{
      this.alguien=true;
    }
  });
  this.ver_bancos()
  nombrePagina.setpagina('Bancos') 
 }

alguien=false; 

numeros: Array<string | number>=[]
cantidadPagina=10;
empezar=1;
paginas=1;
contador=1;


determinarPaginacion(){  
  this.banco.paginacion_bancos(this.buscar).subscribe(total=>{
    this.numeros=[];
    this.paginas=Math.ceil(total/this.cantidadPagina);
    let pasar=1;
    if((this.paginas-5)<this.empezar){
      this.contador=this.paginas-6;
    }else
    if(this.paginas>7){
      if(this.empezar>3){
        this.contador=(this.empezar-2);
      }else{
        this.contador=1;
      }
    }else{
      this.contador=1;
    }
    if(this.paginas>6){
      pasar=7
    }else{
      pasar=this.paginas;
      this.contador=1
    }
    for(let i=0; i<pasar; i++){
      if((this.paginas-5)<this.empezar){
        this.numeros.push(this.contador)
        this.contador++;
      }else if(this.paginas>7){      
        if(i>4){
          this.numeros.push('...')
          this.numeros.push(this.paginas)
          break
        }
        this.numeros.push(this.contador)
        this.contador++;
      }else{
        this.numeros.push(this.contador)
        this.contador++;
      }
    }
  })
}
adelante=true;
ir_adelante(){
  if(this.empezar<this.paginas){
    this.empezar++;
    this.adelante_activado();
    this.ir_pagina();
  }
}
adelante_activado(){
  if(this.empezar==this.paginas){
    this.adelante=false;
  }else{
    this.adelante=true;
  }
}
ir_atras(){
  if(this.empezar>1){
    this.empezar--;
    this.atras_activado();
    this.ir_pagina();
  }
}
atras=false;
atras_activado(){
  if(this.empezar<2){
    this.atras=false;
  }else{
    this.atras=true;
  }
}
setEmpezar(empezar:any){
  if(empezar!='...'){
    this.empezar=empezar;
    this.ir_pagina();
  }
}
ir_pagina(){
  this.determinarPaginacion()
  this.atras_activado();
  this.adelante_activado();
  this.ver_bancos();
}
abrirModal(id:number){
  this.banco.setId(id)
  this.modalss.$modal.emit(true);
}
 actualizarBancos(id:number, campo:string,e:Event){ 
  this.spiner.$spiner.emit(true); 
  let a = e.target as HTMLInputElement;
   this.banco.actualizar_bancos(id,campo,a.value).subscribe((e)=>{
    if(this.validar.validar(e)){
      this.spiner.$spiner.emit(false);
    }
   });
 }
 ver_bancos(){
  this.spiner.$spiner.emit(true);
  let h=this.empezar-1;
  this.banco.ver_bancos(h, this.buscar).subscribe(todos=>{
    if(this.validar.validar(todos)){
      this.spiner.$spiner.emit(false);
      this.banco.armar_bancos(todos) 
      this.determinarPaginacion() 
    }
 })   
}
buscar:string='';
buscarBancos(){
  let h=0;
  this.empezar=1;
    this.banco.ver_bancos(h,this.buscar).subscribe(todos =>{
      if(this.validar.validar(todos)){
      this.banco.armar_bancos(todos) 
      this.determinarPaginacion()
      }
    })
}
ngOnInit(): void {
  this.spiner.$spiner.emit(true);
  this.determinarPaginacion()   
}

}
