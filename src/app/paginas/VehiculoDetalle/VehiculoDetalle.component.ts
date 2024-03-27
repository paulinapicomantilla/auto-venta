import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-VehiculoDetalle',
  templateUrl: './VehiculoDetalle.component.html',
  styleUrls: ['./VehiculoDetalle.component.css']
})
export class VehiculoDetalleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/**
 * 
 * import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VehiculoService } from './vehiculo.service';
import { ActivatedRoute } from '@angular/router';
import { Vehiculo } from './vehiculo';

@Component({
  selector: 'app-vehiculoDetalleComponent',
  templateUrl: './vehiculoDetalle.component.html',
  styleUrls: ['./vehiculoDetalle.component.css']
})
export class VehiculoDetalleComponent implements OnInit {
  vehiculo: Vehiculo;
  formulario: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      'codigo': ['', [Validators.required, validadorCodigo()]],
      'marca': ['', [Validators.required]],
      'modelo': ['', [Validators.required]],
      'anio': ['', [Validators.required]],
      'kilometraje': ['', [Validators.required]],
      'precio': [''],
      'calificacion': ['', [Validators.required]]
    });
    this.formulario.controls['codigo'].disable();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.vehiculoService.getVehiculo(params['codigo']).subscribe( data => {
        if (data.codigo == "1") {
          this.vehiculo = data.data;
          this.formulario.controls['codigo'].setValue(this.vehiculo.codigo);
          this.formulario.controls['marca'].setValue(this.vehiculo.marca);
          this.formulario.controls['modelo'].setValue(this.vehiculo.modelo);
          this.formulario.controls['anio'].setValue(this.vehiculo.anio);
          this.formulario.controls['calificacion'].setValue(this.vehiculo.calificacion);
          this.formulario.controls['precio'].setValue(this.vehiculo.precio);
          this.formulario.controls['kilometraje'].setValue(this.vehiculo.kilometraje);
          }else {
                Swal.fire({
                  title: "Mensaje de Alerta",
                  text: "No se pudo cargar la información",
                  icon: "error"
                });
              }

          guardar() {
            if (this.formulario.valid) {
              this.vehiculoService.actualizarVehiculo({...this.formulario.value}, this.formulario.controls['codigo'].value).subscribe(data => {
                if (data.codigo == "1") {
                  Swal.fire({
                    title: "Mensaje",
                    text: "Vehículo actualizado con éxito",
                    icon: "info"
                  });
                } else {
                  Swal.fire({
                    title: "Mensaje",
                    text: "No se pudo actualizar: " + data.mensaje,
                    icon: "info"
                  });
                }
              });
            } else {
              Swal.fire({
                title: "Mensaje",
                text: "Faltan llenar campos",
                icon: "error"
              });
            }
          }

          imprimir() {
            // ...
          }

 */