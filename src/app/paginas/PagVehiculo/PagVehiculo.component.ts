import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';


@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {
  
  vehiculo?:Vehiculo = {
    codigo:"",
    marca:"",
    modelo:""

  };
  /** 
  vehiculo: Vehiculo = {
    codigo: "001",
    marca: "CHEVROLET",
    modelo: "ONIX",
    foto: "./assets/chevrolet-colombia-bolt.png",
    color: "blanco",
    anio: 2023,
    kilometraje: "0",
    precio: 50000,
    calificacion:5
    };
*/
  constructor(
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService
  ) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
      this.vehiculoService.getVehiculo(params['codigo']).subscribe(data => {
        this.vehiculo=data;
        }); 
  });
    } 
    imprimir(data:any){
      console.log('Calificacion: ',data);
    }
}