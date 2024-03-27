import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
//import { NgModule } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {

mostrarImagen=true;
//filtro:string="";
private _filtro: string= "";

get filtro(){
  return this._filtro;
}

set filtro(data:string){
  this._filtro=data;
  this.consultaVehiculos();
}


 @Input() valor:string='';
 listaVehiculos: Array<any> = [];

constructor(
private vehiculoService: VehiculoService
  
){

}
    
  ngOnInit() {
    this.consultaVehiculos();
    
    this.vehiculoService.addVehiculo({"codigo": "A007", "marca":"FORD","modelo":"ACCENT","foto":"https://kerner.hyundai.com.ec/images/catalogo/modelos/principales/1036.png","anio":2004,"color":"verde","kilometraje":"50000", "precio":7000,"calificacion":1});
    this.vehiculoService.addVehiculo({"codigo": "A008", "marca":"NIVA","modelo":"ACCENT","foto":"https://kerner.hyundai.com.ec/images/catalogo/modelos/principales/1036.png","anio":2004,"color":"verde","kilometraje":"50000", "precio":7000,"calificacion":1});
  }
    

 
  mostrar(){
    this.mostrarImagen=!this.mostrarImagen
  }

  consultaVehiculos() {
    this.vehiculoService.getVehiculos(this.filtro).subscribe( data => {
      this.listaVehiculos = data;
    });
  }

  recepcion(dato:number){
    console.log('Dato:',dato);
  }
}
