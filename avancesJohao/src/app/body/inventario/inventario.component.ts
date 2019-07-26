import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  datos: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData()
  }

  getData = () => {
    let tabla = 'etiquetas'
    this.http.get<any[]>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.datos = data.datos
        })
  }

}