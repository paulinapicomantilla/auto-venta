
import { NgModule } from "@angular/core";
import { PagListaVehiculosComponent } from "./PagListaVehiculos/PagListaVehiculos.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/UtilitariosModule";
import { PagVehiculoComponent } from "./PagVehiculo/PagVehiculo.component";
import { RouterModule, Routes } from '@angular/router';
import { PagVehiculoRegistroComponent } from "./PagVehiculoRegistro/PagVehiculoRegistro.component";
//import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
//import { AppComponent } from "../app.component";
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import Swal from "sweetalert2";


@NgModule({
    imports: [
      
        //BrowserModule,
   // AppRoutingModule,
       // PagListaVehiculosComponent
         //AppRoutingModule,
         //aumente
         CommonModule,
         FormsModule,
         UtilitariosModule,
         RouterModule,
         ReactiveFormsModule

    ],
    declarations:[
       // AppComponent,
       //PagHomeComponent,
       //AEspacioPipe
       PagVehiculoRegistroComponent,
       PagListaVehiculosComponent,
       PagVehiculoComponent
    ],

    exports:[
      //PagHomeComponent,
      PagVehiculoRegistroComponent,
      PagListaVehiculosComponent,
      PagVehiculoComponent
    ]

})
export class PaginaModule{}

/**No llamo directamente a PagListaVehiculosComponent sino a PaginaModule */


//tomar en cuenta que yo tengo PaginaModule y el final tienen como PaginasModule
/**
 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PagListaAutosComponent } from './pag-lista-autos/pag-lista-autos.component';
import { VehiculoDetalleComponent } from './vehiculo-detalle/vehiculo-detalle.component';
import { EspacioPipe } from '../util/espacio.pipe';
import { PagHomeComponent } from './pag-home/pag-home.component';
import { PagVehiculoRegistroComponent } from './pag-vehiculo-registro/pag-vehiculo-registro.component';

@NgModule({
  declarations: [
    PagListaAutosComponent,
    VehiculoDetalleComponent,
    EspacioPipe,
    PagHomeComponent,
    PagVehiculoRegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    PagListaAutosComponent,
    VehiculoDetalleComponent,
    PagHomeComponent,
    PagVehiculoRegistroComponent
  ]
})
export class PaginasModule { }

 */