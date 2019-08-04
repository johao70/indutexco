import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detalleorden',
  templateUrl: './detalleorden.component.html',
  styleUrls: ['./detalleorden.component.scss']
})
export class DetalleordenComponent implements OnInit {

  @Input() variable_ordenes: number

  respuesta: any[]
  table_header: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getData()
    this.table_header = [
      {
        idOrdenes: 'N° Orden',
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

  // getData = (value) => {
  //   this.http.get<any>(environment.API_URL + `F_ordenesdetalle?idordenes=${value}`)
  //       .subscribe(data => {
  //           this.respuesta = data.datos
  //       })
  // }

  getData = () => {
    let tabla = 'ordenes_detalle'
    this.http.get<any>(environment.API_URL + tabla)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }

}
