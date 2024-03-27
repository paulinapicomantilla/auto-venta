import { Pipe, PipeTransform } from '@angular/core'
import { __values } from 'tslib';

/** quito los espacios de la propiedad
 del vehiculo llamada "modelo" y los cambio el guion por espacio */

@Pipe({
    name:'aEspacio'
})
export class AEspacioPipe implements PipeTransform{

    transform(value:string, buscar: string): any{
        const valorReemplazo:string=" ";
        //const valorReemplazo:string="pipe";
        return value.replaceAll(buscar,valorReemplazo);
    }
}
 