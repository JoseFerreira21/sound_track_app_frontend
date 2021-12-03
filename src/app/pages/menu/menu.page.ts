import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ServiciosService } from './../../services/servicios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  servicios: any = [];
  empresa: any = [];
  busqueda : '';
  lista: any= [];

  constructor(private serviciosservice: ServiciosService) {
    this.cargar_servicios();
    this.cargar_empresa();
    this.serviciosservice.busqueda();
  }

 cargar_servicios(){
    this.serviciosservice.cargar_servicios().subscribe((resp: any[])=> {
      this,this.servicios = resp;
      console.log(this.servicios);
    })
  }

  cargar_empresa(){
    this.serviciosservice.cargar_empresa().subscribe((resp: any[])=> {
      this,this.empresa = resp;
      console.log(this.empresa);
    })
  }

  inicializar(){
    this.lista = this.serviciosservice.busqueda();
  }

  buscar(ev: any){
    this.inicializar();
    const val = ev.target.value;
    if(val && val.trim() !== '') {
      this.lista = this.lista.filter((item) => {
      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });
    }
  }
 




}
