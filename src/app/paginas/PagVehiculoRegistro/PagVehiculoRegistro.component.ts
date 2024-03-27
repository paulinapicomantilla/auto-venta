import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormGroup, FormsModule, Validator, ValidatorFn, Validators } from "@angular/forms";
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";
//import { Component, OnInit } from '@angular/core';
//import { Vehiculo } from '../../utilitarios/models/vehiculo';
import { ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

 // vehiculo?: Vehiculo

formulario: FormGroup;
  constructor(
    private vehiculoServicio: VehiculoService,
    private formBuilder: FormBuilder
  ) {
    /** ng model
    this.vehiculo = {
      marca: '',
      codigo: '',
      color: '',
      modelo:'',
      kilometraje: '',
      precio: 0,
      foto: null,
      anio: 0,
      calificacion: 0
    };*/
    //similar crear un nuevo objeto: new FormControl();
    this.formulario=this.formBuilder.group({
      "codigo": ['',[Validators.required, validadorCodigo()]],
      "codigo_confirm": [],
      "marca":['',[Validators.required]],
      "modelo":['',[Validators.required]],
      "anio":[],
      "color":[],
      "kilometraje":[],
      "precio":[],
      "calificacion":[]
  
    },{
      validators: validarCodigoComparativo()
    
    })
  }

  ngOnInit() {
    //this.formulario.controls['codigo'].disable();
  }

  guardar() {
 
    
    if(this.formulario.valid){

     let vehiculo:Vehiculo={...this.formulario.value};
    this.vehiculoServicio.addVehiculo(vehiculo); //agrego lo que solicito en Vehiculo.Service
      
   console.log('formulario', this.formulario);

         Swal.fire({
            title: 'Mensaje',
            text: 'Grabado con éxito',
            icon: 'info'
      })
    }else{
        
        Swal.fire({
          title: 'Mensaje',
          text: 'Error al grabar',
          icon: 'error'

         
      
     })
    }
         //this.vehiculoServicio.addVehiculo(this.vehiculo); ng model  
      //confirmButtonText: 'Aceptar'
          //console.log('Grabado con éxito');
    //console.log('formulario',this.formulario.value)
    }
    
  }

export function validadorCodigo(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors|null => {
    //console.log(control);
    const codigoV= /^[A-Z]\d{4}$/; //expresion regular que exige que sea un codigo que cuatro digitos[]
    let value=control.value;
    if(codigoV.test(value)){
      return null;
    }else{
      return {'codigoValidate':true};
    }
  
  }
}
  
  export function validarCodigoComparativo(){
    return (formulario: FormGroup): ValidationErrors|null => {
     // console.log('form:', formulario)
      let valor=formulario.controls['codigo'].value;
      let valor2=formulario.controls['codigo_confirm'].value;
      if(valor===valor2){
        return null;
      }
      return{'codigo_comparativo': true}
  }
  
}



  //private vehiculoServicio: VehiculoService
  
    