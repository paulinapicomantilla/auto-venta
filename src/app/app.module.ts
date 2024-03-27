import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaModule } from './paginas/PaginaModule';

//yo le aumente
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';



//import { CommonModule } from '@angular/common';


//import { PagListaVehiculosComponent } from './paginas/PagListaVehiculos/PagListaVehiculos.component';
//import { PagNotFoundComponent } from './paginas/PagNotFound/PagNotFound.component';
//import { PagVehiculoComponent} from './paginas/PagVehiculo/PagVehiculo.component';
//import { PagVehiculoRegistroComponent} from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component'
/** 
import { HomeComponent } from './paginas/Home/Home.component';
*/

import { HttpInterceptor, HttpClientModule } from '@angular/common/http';
import { UserInterceptorService } from './interceptores/UserInterceptor.service';
/** 


*/
@NgModule({
  declarations: [
    AppComponent
    /**,
    PagNotFoundComponent,
    PagVehiculoComponent,
    PagVehiculoRegistroComponent,

    PagListaVehiculosComponent
     
    HomeComponent,
*/
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    PaginaModule,
    HttpClientModule

  ],
  providers: [
    // {provide: HttpInterceptor, useClass: UserInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
