import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {TooltipPosition} from '@angular/material/tooltip';
import { ModalProductoActualizarComponent } from './modal-producto-actualizar/modal-producto-actualizar.component';
import { ModalProductoEliminarComponent } from './modal-producto-eliminar/modal-producto-eliminar.component';
import { ModalProductoComponent } from './modal-producto/modal-producto.component';
@Component({
  selector: 'app-almacen-industria',
  templateUrl: './almacen-industria.component.html',
  styleUrls: ['./almacen-industria.component.css']
})
export class AlmacenIndustriaComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }
  
  agregarProducto() {
    const dialogRef = this.dialog.open(ModalProductoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  actualizarProducto(e:Event){
    let a=e.target as Element;
    console.log(e);
    const dialogRef = this.dialog.open(ModalProductoActualizarComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  eliminarProducto(){
    const dialogRef = this.dialog.open(ModalProductoEliminarComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
  
