
 import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/Vehiculo';
import { Observable } from 'rxjs';
//import { Vehiculo } from '../utilitarios/modelos/Vehiculo'

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

constructor() { }

getVehiculos(filtro:any):Observable<Array<Vehiculo>>{
   const escucha: Observable<Array<Vehiculo>> = new Observable(escuchando => {
  let lista=this.listaVehiculos.filter( elem => elem.marca?.toLowerCase().includes(filtro))
  escuchando.next(lista);

});
return escucha;

}


  getVehiculo(codigo:string): Observable<Vehiculo|undefined> {
    const escucha: Observable<Vehiculo|undefined> = new Observable(escuchando => {
      setTimeout(() => {
        let vehiculo = this.listaVehiculos.find(ele => ele.codigo === codigo);
        escuchando.next(vehiculo); // next, error, complete
       }, 1000);
    
    });
    return escucha;
  }
  
  


addVehiculo(vehiculo: Vehiculo){
  this.listaVehiculos.push(vehiculo);

}

private listaVehiculos: Array<Vehiculo> =[
  {"codigo": "A001", "marca":"CHEVROLET","modelo":"ONIX-3","foto":"./assets/img/chevrolet.webp","anio":2004, "color":"verde", "kilometraje":"50000", "precio":7000, "calificacion":3},
  {"codigo": "A002", "marca":"KIA","modelo":"RIO-4","foto":"./assets/img/kia.webp","anio":2004, "color":"verde", "kilometraje":"50000", "precio":7000,"calificacion":4},
  {"codigo": "A003", "marca":"CHERY","modelo":"ARRIZO-7","foto":"./assets/img/chery.webp","anio":2004,"color":"verde", "kilometraje":"50000", "precio":7000,"calificacion":4},
  {"codigo": "A004", "marca":"TOYOTA","modelo":"AGYA","foto":"./assets/img/toyota.webp", "anio":2004,"color":"verde", "kilometraje":"50000", "precio":7000,"calificacion":2},
  {"codigo": "A005", "marca":"HYUNDAI","modelo":"ACCENT","foto":"./assets/img/hyundai.webp","anio":2004,"color":"verde","kilometraje":"50000", "precio":7000,"calificacion":1},
  {"codigo": "A006", "marca":"HYUNDAI","modelo":"ACCENT","foto":"https://kerner.hyundai.com.ec/images/catalogo/modelos/principales/1036.png","anio":2004,"color":"verde","kilometraje":"50000", "precio":7000,"calificacion":1}
];

}
 

/** 

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  constructor(private http: HttpClient) { }
  baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Todos vehículos => GET vehiculos/
  // Insert => POST vehiculo/
  // Update => PUT vehiculo/:codigo
  // Delete => DELETE vehiculo/:codigo
  // Consulta => GET vehiculo/:codigo

  getVehiculos(filtro?:string, rows?:number, page?:number):Observable<Respuesta>{
    let body = new HttpParams();
    body = filtro ? body.set('filtro', filtro) : body;
    body = rows ? body.set('rows', rows) : body;
    body = page ? body.set('page', page) : body;
    //return this.http.getRespuesta(this.baseUrl+"vehiculos/", {params: body}).pipe(
    //  map(respuesta => respuesta.data)
    //);
    return this.http.get<Respuesta>(this.baseUrl+"vehiculos/", {params: body});
  }
insertVehiculo(vehiculo: Vehiculo) {
  return this.http.post<Respuesta>(this.baseUrl+"vehiculo/", vehiculo, this.httpOptions);
}

getVehiculo(codigo:string) {
  return this.http.get<Respuesta>(this.baseUrl+"vehiculo/"+codigo);
}

actualizarVehiculo(vehiculo: Vehiculo, codigo:string) {
  return this.http.put<Respuesta>(this.baseUrl+"vehiculo/"+codigo, vehiculo, this.httpOptions);
}

eliminarVehiculo(codigo:string) {
  return this.http.delete<Respuesta>(this.baseUrl+"vehiculo/"+codigo);
}

addVehiculo(vehiculo: Vehiculo) {
  //falta codigo
}

private listaVehiculos: Array<Vehiculo> =[
//falta codigo

 ];

}

export interface Vehiculo {
  codigo: string;
  marca: string;
  color?: string;
  modelo: string;
  kilometraje: string;
  precio: number;
  foto?: string | null;
  anio?: number;
  calificacion?: number;
}

export interface Respuesta {
  codigo: string;
  mensaje: string;
  data: Array<Vehiculo> | Vehiculo | any;
  rows: number;
  pages: number;
  records: number;
  page: number;
}

*/
 

