import { InterpolationConfig } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AutentificarService } from '../controlador/autentificar/autentificar.service';
import { IniciarSessionService } from './servicio/iniciar-session.service';


@Component({
  selector: 'app-iniciar-session',
  templateUrl: './iniciar-session.component.html',
  styleUrls: ['./iniciar-session.component.css','../login/login.component.css']
})
export class IniciarSessionComponent implements OnInit {
  constructor(private iniciar:IniciarSessionService, private token:AutentificarService) { 
    
  }
  usuario="";
  password="";
  
  enviar(){
    this.iniciar.iniciar(this.usuario, this.password).subscribe(e=>{
      if(e.codigo!='401'){
        this.token.setToken(e)
      }
    })
  }

  agregarLabel(e:Event){
    let a= e.target as Element;
    let r = e.target as HTMLInputElement;
    let b= a.parentElement as HTMLDivElement;
    let c = b.querySelector("label") as Element
    if(r.value==""){
        c.classList.toggle("label")
    }
  }

  agregar(){
    let a = document.getElementById('form') as Element;
    let b = a.querySelectorAll('input');
    b.forEach((e)=>{
      if(e.value!=""){
        let c=e.parentElement as HTMLDivElement;
        let d=c.querySelector('label') as HTMLLabelElement;
        d.classList.add('label')
      }
    })    
  }
  

  ngOnInit(): void {
    
    window.addEventListener('load',()=>{
      this.agregar();
    })

  }

}
