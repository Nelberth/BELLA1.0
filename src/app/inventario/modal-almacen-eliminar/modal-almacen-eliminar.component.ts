import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-almacen-eliminar',
  templateUrl: './modal-almacen-eliminar.component.html',
  styleUrls: ['./modal-almacen-eliminar.component.css']
})
export class ModalAlmacenEliminarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  cerrarModal(){
    this.dialog.closeAll()
  }

  ngOnInit(): void {
  }

}
