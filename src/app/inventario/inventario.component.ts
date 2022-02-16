import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from  '@angular/material/dialog' ;
import { ModalAlmacenActualizarComponent } from './modal-almacen-actualizar/modal-almacen-actualizar.component';
import { ModalAlmacenEliminarComponent } from './modal-almacen-eliminar/modal-almacen-eliminar.component';
import { ModalAlmacenComponent } from './modal-almacen/modal-almacen.component';



@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css','../tablas.component.css', '../seguridad/seguridad.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  agregarAlmacen() {
    const dialogRef = this.dialog.open(ModalAlmacenComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  eliminarAlmacen() {
    const dialogRef = this.dialog.open(ModalAlmacenEliminarComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  actualizarAlmacen() {
    const dialogRef = this.dialog.open(ModalAlmacenActualizarComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  ngOnInit(): void {
  }

}

