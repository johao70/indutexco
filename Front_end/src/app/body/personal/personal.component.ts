import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  respuesta: any[]
  table_header: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData()
    this.table_header = [
      {
        id: 'id',
        nombre: 'Nombre',
        apellido: 'Apellido',
        direccion: 'Dirección',
        telefono: 'Teléfono',
        idDepartamento: 'idDepartamento',
        idCargo: 'idCargo',
        idEstado: 'idEstado'
      }
    ]
  }

  getData = () => {
    let tabla = 'empleados'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }

}
