import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const busqueda = []; 
    for( const recorrido of value) { 
      if ( recorrido.servicios.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        busqueda.push(recorrido);
      }
    }
    return busqueda;
  }
  
}