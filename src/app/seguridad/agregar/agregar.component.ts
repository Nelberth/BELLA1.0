import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { SpinerService } from 'src/app/controlador/spiner/spiner.service';

import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  disponible:number=2;
  mandalo:boolean=true;
  constructor( private router:Router, private users:UsuariosService, private spiner:SpinerService) { }
  usuario:string='';
  rol:string='';
  password:string=''
  ngOnInit(): void {
  }
  agregarUsuario(){
   this.agregar_error()
    if(this.rol!='' && this.password!='' && this.usuario!=''){
      if(this.mandalo){
        this.spiner.$spiner.emit(true);
        this.users.agregar_usuarios(this.usuario, this.password, parseInt(this.rol)).subscribe((e)=>{
          if(e=='2'){
            this.spiner.$spiner.emit(false);
            this.disponible=0;
          }else if(e=='1'){
            this.router.navigate(['/usuarios']) 
          }
        }) 
      }
    }
  }

  solo_error(e:Event){
      let a = e.target as HTMLInputElement;
      if(a.value==""){
        a.classList.add('error')
        a.labels?.forEach(u=>{
          u.classList.add('error')
        })
      }else{
        a.classList.remove('error')
        a.labels?.forEach(u=>{
          u.classList.remove('error')
        })
      }
  }
  agregar_error(){
    let a= document.getElementById('cajita') as Element;
    let b =a.querySelectorAll('input');
    let g = a.querySelector('select') as HTMLSelectElement;
    if(g.value==''){
      g.classList.add('error')
      g.labels?.forEach(u=>{
        u.classList.add('error')
      })
    }else{
      g.classList.remove('error')
      g.labels?.forEach(u=>{
        u.classList.remove('error')
      })
    }
    b.forEach(e=>{
      if(e.value==''){
        e.labels?.forEach(u=>{
          u.classList.add('error')
        })
        e.classList.add('error')
      }else{
        e.classList.remove('error')
        e.labels?.forEach(u=>{
          u.classList.remove('error')
        }) 
      }
    })
  }

  disponibilidad(){
    this.disponible=3;
    this.mandalo=true;
    if(this.usuario==''){
      this.disponible=4;
      this.mandalo=false;
    }
      this.users.disponible_usuario(this.usuario).subscribe(e=>{
        if(e==1&& this.usuario!=''){
            this.disponible=1;
            this.mandalo=true;
          
        }else if(e==0){
          this.disponible=0;
          this.mandalo=false;
        }
      })
  }

}
