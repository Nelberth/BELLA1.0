import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from  '@angular/material/dialog' ;
import { ModalAlmacenComponent } from './modal-almacen/modal-almacen.component';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css','../tablas.component.css', '../seguridad/seguridad.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalAlmacenComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  ngOnInit(): void {
  }

}

