import { Component, OnInit } from '@angular/core';
import { BancosService } from 'src/app/bancos/servicios/bancos.service';
import { ModalService } from 'src/app/controlador/modal/modal.service';
import { UsuariosService } from 'src/app/seguridad/usuarios.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalss:ModalService, private usuario:UsuariosService, private banco:BancosService) { 
    this.nombreModal=this.modalss.nombreModal$;
    this.opcion=this.modalss.opcion;
  }
  opcion:string='';
  nombreModal:string='';
  ngOnInit(): void {
    
  } 

  closeModal(){
    this.modalss.$modal.emit(false)
  }


  eliminar(){
    if(this.opcion=='usuario'){
      this.eliminarUsuario();
    }else if(this.opcion=='banco'){
      this.eliminarBanco();
    }
  }

  eliminarUsuario(){
    this.usuario.eliminar_usuario().subscribe((e)=>{
      if(e==1){
        this.usuario.quitar_usuario();
      }
    });
    this.closeModal();
  }
  eliminarBanco(){
    this.banco.eliminar_bancos().subscribe((e)=>{
      if(e==1){
        this.banco.quitar_bancos();
      }
    });
    this.closeModal();
  }

}
