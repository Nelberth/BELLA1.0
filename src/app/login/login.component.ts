import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutentificarService } from '../controlador/autentificar/autentificar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  iniciarSession=true;
  texToBotonRegistro="Registrarse"

  cambiarCuadroPanel(){
    this.iniciarSession=!this.iniciarSession;
    if(this.texToBotonRegistro==="Registrarse"){
      this.texToBotonRegistro="Iniciar Seccion"
    }else{
      this.texToBotonRegistro="Registrarse"
    }
  }
  
  constructor( private router:Router, private auth:AutentificarService) {
    
   }

  ngOnInit(): void {
   
    this.router.navigate(['/login/iniciar'])
  }

}
