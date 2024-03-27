/** 
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validadorCodigo(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const codigo = /^[A-Z]{2}-\d{4}$/;
    if (codigo.test(control.value)) {
      return null;
    }
    return { 'codigoValidate': true };
  }
}
*/