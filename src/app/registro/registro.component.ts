import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css','../login/login.component.css']
})
export class RegistroComponent implements OnInit {

  usuario="";
  password="";
  confirmar_password="";
  correo="";
  
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
  constructor() { 

  }

  ngOnInit(): void {
    
    window.addEventListener('load',()=>{
      this.agregar();
    })

  }

}
