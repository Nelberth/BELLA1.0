import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-producto-actualizar',
  templateUrl: './modal-producto-actualizar.component.html',
  styleUrls: ['./modal-producto-actualizar.component.css']
})
export class ModalProductoActualizarComponent implements OnInit {

  nombre = '';
  direccion = '';
  tipo = '';
  nombrevalidator = new FormControl('', [Validators.required, ]);
  direccionValidator = new FormControl('', [Validators.required, ]);
  selectFormControl = new FormControl('', [Validators.required,]);
  optionControl = new FormControl('', Validators.required);
  matcher = new ErrorStateMatcher();

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
