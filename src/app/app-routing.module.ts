
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/Home/Home.component';
import { PagListaVehiculosComponent } from './paginas/PagListaVehiculos/PagListaVehiculos.component';
import { PagNotFoundComponent } from './paginas/PagNotFound/PagNotFound.component';
import { PagVehiculoComponent } from './paginas/PagVehiculo/PagVehiculo.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { VehiculoDetalleComponent } from './paginas/VehiculoDetalle/VehiculoDetalle.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  }, 
{
  path: "vehiculos",
  component: PagListaVehiculosComponent
},
{
  path: "vehiculo",
  component: PagVehiculoRegistroComponent
},
{
  path: "vehiculo/:codigo",
  component: PagVehiculoComponent
},
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
 { 
  path: '**',
 component: PagNotFoundComponent,
 pathMatch: 'full'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//faltan unas lineas antes que no pude ver
/**
 *import { PagHomeComponent } from './pag-home/pag-home.component';
import { PagListaAutosComponent } from './paginas/pag-lista-autos/pag-lista-autos.component';
import { PagVehiculoRegistroComponent } from './paginas/pag-vehiculo-registro/pag-vehiculo-registro.component';

const routes: Routes = [
  {
    path: "inicio",
    component: PagHomeComponent
  },
  {
    path: "vehiculos",
    component: PagListaAutosComponent
  },
  {
    path: "vehiculo/:codigo",
    component: VehiculoDetalleComponent
  },
  {
    path: "vehiculo",
    component: PagVehiculoRegistroComponent
  },
  {
    path: "**",
    component: PagListaAutosComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 * 
 */