import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  detalles: any[] = [];
  id: string;
  constructor(private route: ActivatedRoute, private as: ServiciosService) { }


  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.as.cargar_detalles( parametros['id'] ).subscribe((detalles: any[]) => {
        this.id = parametros['id'];
        this.detalles = detalles;
        console.log(this.detalles);
      });
    });
  }

}
