import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificarService {

  constructor( private router:Router) {
      this.logueo$ = new Subject();
      this.token$ = new Subject();
   }

  
  private logueo$: Subject<boolean>;
  private token$: Subject<string>;

  getlogueo$(): Observable<boolean> {
    return this.logueo$.asObservable();
  }
  getToken$(): Observable<string> {
    return this.token$.asObservable();
  }

  validar(validacion:any):any{
    if(validacion.codigo=='401'){
      this.router.navigate(['/login/iniciar']);
      this.logueo$.next(false);
      return false;
    }else{
      this.logueo$.next(true);
      return true;
    }
  }

  setToken(key:string){
    localStorage.setItem('token',key); 
    this.token$.next(localStorage['token']);
    this.logueo$.next(true);
    this.router.navigate(['/'])
  }

  getToken(){
    let token = localStorage['token'];  
    if(token == undefined || token==''){
      this.router.navigate(['/login/iniciar']);
    }else{
      return token;
    }
  }

  removeToken(){
    localStorage.removeItem('token');
    this.logueo$.next(false);
  }

}
