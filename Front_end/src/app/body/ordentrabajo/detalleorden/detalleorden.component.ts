import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detalleorden',
  templateUrl: './detalleorden.component.html',
  styleUrls: ['./detalleorden.component.scss']
})
export class DetalleordenComponent implements OnInit {

  respuesta: any[]
  table_header: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData()
    this.table_header = [
      {
        idBoton: 'Tipo de Boton',
        botonCantidad: 'Cantidad - Boton',
        idTela: 'Tipo de Tela',
        telaCantidad: 'Cantidad - Tela',
        idHilo: 'Tipo de Hilo',
        hiloCantidad: 'Cantidad - Hilo',
        idEtiqueta: 'Tipo de Etiqueta',
        etiquetaCantidad: 'Cantidad - Etiquetas',
        idTipoPrenda: 'Tipo de Prendas',
        idTallaPrenda: 'Talla de Prendas'
      }
    ]
  }

  getLocalStorage(){
    let id = localStorage.getItem("id")
    return id
  }

  getData = () => {
    this.http.get<any>(environment.API_URL + `F_ordenesdetalle?idordenes=${this.getLocalStorage()}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }

  deleteDataTable = (value) => {
    let tabla = 'ordenes_detalle'
    this.http.delete(environment.API_URL + `?tabla=${tabla}&&id=${value}`)
    .subscribe( data => { })
  }

}
