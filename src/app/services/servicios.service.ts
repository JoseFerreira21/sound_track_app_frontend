import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  tipo_servicios : any[] = [];
 
  constructor(private http:HttpClient) {
  this.busqueda();
 }

cargar_servicios() {
  return this.http.get('https://soundtrackapp-69bd9-default-rtdb.firebaseio.com/servicios.json')
}

cargar_detalles(cod: String){
  return this.http.get(`https://soundtrackapp-69bd9-default-rtdb.firebaseio.com/detalles/${cod}.json`)
}

cargar_empresa(){
  return this.http.get("https://soundtrackapp-69bd9-default-rtdb.firebaseio.com/empresa.json")
}

busqueda(){
  return this.http.get('https://soundtrackapp-69bd9-default-rtdb.firebaseio.com/tipo-servicios.json').subscribe((resp: any) => {
    this.tipo_servicios = resp;
    console.log(this.tipo_servicios); 
}); 
}

}
