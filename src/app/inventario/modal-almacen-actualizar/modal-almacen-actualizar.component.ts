import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Tipo } from '../modal-almacen/interfaces/modal-almacenes.interfaces';

@Component({
  selector: 'app-modal-almacen-actualizar',
  templateUrl: './modal-almacen-actualizar.component.html',
  styleUrls: ['./modal-almacen-actualizar.component.css']
})
export class ModalAlmacenActualizarComponent implements OnInit {
  nombre = '';
  direccion = '';
  tipo = '';
  nombrevalidator = new FormControl('', [Validators.required, ]);
  direccionValidator = new FormControl('', [Validators.required, ]);
  selectFormControl = new FormControl('', [Validators.required,]);
  optionControl = new FormControl('', Validators.required);
  matcher = new ErrorStateMatcher();

  tipoEstablecimiento: Tipo[] = [
    {tipo: 'Almacen'},
    {tipo: 'Industria'},
  ];

  formulario:FormGroup;
  
  
  constructor(public dialog: MatDialog,private fb:FormBuilder) {

    this.formulario= this.fb.group({
      nombre:['',Validators.required],
      direccion:['',Validators.required],
      tipo:['',Validators.required],
    })
  }

  activar(): void{
    console.log(this.formulario)
  }

  cerrarModal(){
    this.dialog.closeAll()
  }
  public onSubmit(){
  }
  ngOnInit(): void {
  }
}
