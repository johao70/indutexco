import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ordentrabajo',
  templateUrl: './ordentrabajo.component.html',
  styleUrls: ['./ordentrabajo.component.scss']
})
export class OrdentrabajoComponent implements OnInit {

  respuesta: any[]
  table_header: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDataTable()
    this.table_header = [
      {
        id: 'N°',
        tela: 'Tela',
        boton: 'Boton',
        hilo: 'Hilo',
        etiqueta: 'Etiqueta',
        empleado: 'Empleado'
      }
    ]
  }

  getDataTable = () => {
    let tabla = 'productos'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }

}
