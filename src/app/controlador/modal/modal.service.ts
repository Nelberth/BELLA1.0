import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { 
    
  }
  opcion:string;
  nombreModal$:string;
  $modal = new EventEmitter<any>();
  $id = new EventEmitter<any>();


}
