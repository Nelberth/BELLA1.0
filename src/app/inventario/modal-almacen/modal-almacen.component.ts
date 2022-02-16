import { Component, OnInit, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Tipo } from './interfaces/modal-almacenes.interfaces';

@Component({
  selector: 'app-modal-almacen',
  templateUrl: './modal-almacen.component.html',
  styleUrls: ['./modal-almacen.component.css']
})
export class ModalAlmacenComponent implements OnInit {
  @Input() data:any;
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
