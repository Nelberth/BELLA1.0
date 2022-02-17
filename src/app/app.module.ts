import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ControladorComponent } from './controlador/controlador.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSessionComponent } from './iniciar-session/iniciar-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { AgregarComponent } from './seguridad/agregar/agregar.component';
import { NombrePaginaService } from './controlador/nombre-pagina.service';
import { UsuariosService } from './seguridad/usuarios.service';
import { SpinerService } from './controlador/spiner/spiner.service';
import { BancosComponent } from './bancos/bancos.component';
import { ModalService } from './controlador/modal/modal.service';
import { AgregarBancosComponent } from './bancos/agregar/agregar-bancos.component';
import { ModalComponent } from './controlador/modal/modal.component';
import { AutentificarService } from './controlador/autentificar/autentificar.service';
import { PerfilComponent } from './perfil/perfil.component';
import { ComprasComponent } from './compras/compras.component';
import { MaterialModule } from './material.module';

// inicio vista de almacenes con modales
import { InventarioComponent } from './inventario/inventario.component';
import { ModalAlmacenComponent } from './inventario/modal-almacen/modal-almacen.component';
import { ModalAlmacenEliminarComponent } from './inventario/modal-almacen-eliminar/modal-almacen-eliminar.component';
import { ModalAlmacenActualizarComponent } from './inventario/modal-almacen-actualizar/modal-almacen-actualizar.component';
// fin vista de almacenes con modales

// inicio vista de productos dentro de almacenes e industrias
import { AlmacenIndustriaComponent } from './inventario/almacen-industria/almacen-industria.component';
import { ModalProductoComponent } from './inventario/almacen-industria/modal-producto/modal-producto.component';
import { ModalProductoActualizarComponent } from './inventario/almacen-industria/modal-producto-actualizar/modal-producto-actualizar.component';
import { ModalProductoEliminarComponent } from './inventario/almacen-industria/modal-producto-eliminar/modal-producto-eliminar.component';
// fin vista de productos dentro de almacenes e industrias

const rutas:Routes=[
  {path:'',component:ControladorComponent,
    children:[
      {path:'', component:DashboardComponent},
      {path:'usuarios:buscar', component:SeguridadComponent},
      {path:'usuarios', component:SeguridadComponent},
      {path:'usuarios/agregar', component:AgregarComponent},
      {path:'dashboard', component:DashboardComponent},
      {path:'bancos', component:BancosComponent},
      {path:'bancos/agregar', component:AgregarBancosComponent},
      {path:'perfil', component:PerfilComponent},
      {path:'compras', component:ComprasComponent},

      {path:'inventario', component:InventarioComponent},
      {path:'inventario/almacenes-industrias', component:AlmacenIndustriaComponent},

      
  ]  },
  {path:'login',
    component:LoginComponent,
    children:[
      {path:'iniciar',component:IniciarSessionComponent},
      {path:'registro',component:RegistroComponent}
    ]
  },
  {path:'**', component:Error404Component}

]

@NgModule({
  declarations: [
    AppComponent, ControladorComponent,
    LoginComponent,
    RegistroComponent,
    IniciarSessionComponent,
    SeguridadComponent,
    DashboardComponent,
    Error404Component,
    AgregarComponent,
    RegistroComponent,
    AgregarComponent,
    BancosComponent,
    AgregarBancosComponent,
    ModalComponent,
    PerfilComponent,
    ComprasComponent,
    InventarioComponent,
    ModalAlmacenComponent,
    ModalAlmacenEliminarComponent,
    ModalAlmacenActualizarComponent,
    AlmacenIndustriaComponent,
    ModalProductoComponent,
    ModalProductoActualizarComponent,
    ModalProductoEliminarComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas), HttpClientModule, MaterialModule
  ],
  providers: [ NombrePaginaService, UsuariosService, SpinerService, ModalService, AutentificarService],
  bootstrap: [AppComponent]
})
export class AppModule { }