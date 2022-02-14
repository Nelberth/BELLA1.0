import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NombrePaginaService {

  constructor() { }
  nombre:string='Inicio';

  setpagina(pagina:string){
    this.nombre = pagina;
  }
  getpagina(){
    return this.nombre;
  }
}
