import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinerService } from 'src/app/controlador/spiner/spiner.service';
import { BancosService } from '../servicios/bancos.service';

@Component({
  selector: 'app-agregar-bancos',
  templateUrl: './agregar-bancos.component.html',
  styleUrls: ['./agregar-bancos.component.css', '../../seguridad/agregar/agregar.component.css']
})
export class AgregarBancosComponent implements OnInit {
  disponible:number=2;
  mandalo:boolean=true;
  constructor( private router:Router, private banco:BancosService, private spiner:SpinerService) { }
  nombre_banco:string='';
  numero_banco:string='';
  dinero_banco:string=''
  id_moneda:string='';
  ngOnInit(): void {
  }
  agregarBanco(){
   this.agregar_error()
    if(this.id_moneda!='' && this.numero_banco!='' && this.nombre_banco!='' && this.dinero_banco!=''){
      if(this.mandalo){
        this.spiner.$spiner.emit(true);
        this.banco.agregar_bancos(this.nombre_banco, this.numero_banco,this.dinero_banco, parseInt(this.id_moneda)).subscribe((e)=>{
          if(e=='2'){
            this.spiner.$spiner.emit(false);
            this.disponible=0;
          }else if(e=='1'){
            this.router.navigate(['/bancos']) 
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

}
