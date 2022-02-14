import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificarService } from './autentificar/autentificar.service';
import { ModalService } from './modal/modal.service';
import { NombrePaginaService } from './nombre-pagina.service';
import { PerfilService } from './perfil/perfil.service';
import { SpinerService } from './spiner/spiner.service';

@Component({
  selector: 'app-controlador',
  templateUrl: './controlador.component.html',
  styleUrls: ['./controlador.component.css']
})
export class ControladorComponent implements OnInit {

  pagina:string;
  constructor(  private router:Router,private nombrePagina:NombrePaginaService, private modalss:ModalService, private sspiner:SpinerService, private autentificar:AutentificarService, private perfil:PerfilService) {
      this.pagina=this.nombrePagina.nombre;
      this.perfil.actualizarkey() 

  
    this.perfil.getPerfil().subscribe(e=>{
      this.nombre_perfil=e;
    })
 

   }
   nombre_perfil='';
   cerrar_session(){
     this.autentificar.removeToken();
   }

  spiner:boolean=false;
  imodal:boolean;
  ngOnInit(): void {
    this.perfil.actualizarkey();
    this.sspiner.$spiner.subscribe(valor => (this.spiner = valor))
    this.modalss.$modal.subscribe(valor=> (this.imodal = valor))
    this.autentificar.getlogueo$().subscribe(e=>{
      if(!e){
        this.router.navigate(['/login/iniciar']);
      }
    })
    this.autentificar.getToken$().subscribe(()=>{});

    var monitoreo=document.getElementById('monitoreo') as HTMLLIElement;
    monitoreo.addEventListener('click', (e)=>{
      this.pagina=this.nombrePagina.nombre;
      var hola=e.target as Element;      
      var padre = hola.parentElement as HTMLLIElement;
      var abuelo = padre.parentElement as HTMLLIElement;
      var holo = monitoreo.querySelectorAll(".activado");
      holo.forEach((e)=>{
        e.classList.remove('activado')
      })
      if(hola && hola.tagName=== 'LI'){
        if(abuelo.className==='despegable'){
            abuelo.classList.add('activado')
        }
            hola.classList.add('activado')
        
      }    
    })

    var modo=document.querySelector('#modo');
    modo?.addEventListener("click",()=>{
      document.body.classList.toggle("dark");
      modo?.classList.toggle("active");
    })
  }






}
