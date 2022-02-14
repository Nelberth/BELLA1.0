import { Component, OnInit } from '@angular/core';
import { NombrePaginaService } from '../controlador/nombre-pagina.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private nombrePagina:NombrePaginaService) {
      nombrePagina.setpagina('Inicio')
   }

  ngOnInit(): void {
  }

}
