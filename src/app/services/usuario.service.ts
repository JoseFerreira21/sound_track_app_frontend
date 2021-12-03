import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  tipo_usuarios : any[] = [];
  URL_PATH = `${environment.API_URL}`
  constructor(private http:HttpClient) {
}

ListarUsuarios(){
    return this.http.get<any[]>(this.URL_PATH + 'usuarios');
}

ObtenerUsuarioPorId(id){
    return this.http.get<any>(this.URL_PATH + 'usuarios/'+ id);
}

}