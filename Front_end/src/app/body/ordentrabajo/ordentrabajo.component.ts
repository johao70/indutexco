import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ordentrabajo',
  templateUrl: './ordentrabajo.component.html',
  styleUrls: ['./ordentrabajo.component.scss']
})
export class OrdentrabajoComponent implements OnInit {

  table_header: any  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDataTable()
    this.getDataTelas()
    this.getDataBotones()
    this.getDataHilos()
    this.getDataEtiquetas()
    this.getDataClientes()
    this.getDataTipoPrenda()
    this.getDataTallaPrenda()
    this.table_header = [
      {
        id: 'N°',
        cliente: 'Cliente',
        fecha_orden: 'Fecha Orden de Compra'
      }
    ]
  }

  //PAGINA PRINCIPAL ORDEN DE TRABAJO -------------------------------------------------------------------------------
  id: number
  nuevafecha = new Date()
  fecha_orden = this.nuevafecha.getDate() + "/" + (this.nuevafecha.getMonth() +1) + "/" + this.nuevafecha.getFullYear()
  idclientes: number
  respuestaClientes: any[]
  respuesta: any[]

  getDataTable = () => {
    let tabla = 'F_ordenes'
    this.http.get<any>(environment.API_URL + `${tabla}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }

  postDataTable = () => {
    let tabla = 'ordenes'
    let register = {tabla: tabla, datos: [{id: this.id, fecha_orden: this.fecha_orden, idclientes: this.idclientes}]}
    this.http.post(environment.API_URL, register)
    .subscribe( data => {
      // this.postData = data
    })
    window.location.reload()
  }

  getDataClientes = () => {
    let tabla = 'clientes'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaClientes = data.datos
        })
  }

  deleteDataTable = (value) => {
    let tabla = 'ordenes'
    this.http.delete(environment.API_URL + `?tabla=${tabla}&&id=${value}`)
    .subscribe( data => { })
    window.location.reload()
  }
  //PAGINA PRINCIPAL ORDEN DE TRABAJO -------------------------------------------------------------------------------


  // GET DATA TO MODAL DETALLE ORDEN --------------------------------------------------------------------------------
  respuestaTelas: any[]
  respuestaBotones: any[]
  respuestaHilos: any[]
  respuestaEtiquetas: any[]
  respuestaTipoPrenda: any[]
  respuestaTallaPrenda: any[]
  
  getDataTelas = () => {
    let tabla = 'telas'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaTelas = data.datos
        })
  }

  getDataBotones = () => {
    let tabla = 'botones'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaBotones = data.datos
        })
  }

  getDataHilos = () => {
    let tabla = 'hilos'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaHilos = data.datos
        })
  }

  getDataEtiquetas= () => {
    let tabla = 'etiquetas'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaEtiquetas = data.datos
        })
  }

  getDataTipoPrenda= () => {
    let tabla = 'tipo_prendas'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaTipoPrenda = data.datos
        })
  }

  getDataTallaPrenda= () => {
    let tabla = 'talla_prendas'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaTallaPrenda = data.datos
        })
  }
  // GET DATA TO MODAL DETALLE ORDEN --------------------------------------------------------------------------------


  //POST MODAL CLIENTES -----------------------------------------------------------------------
  idClientes: number
  identificacion: string
  nombre: string
  apellido: string
  telefono: string
  direccion: string

  postDataClientes = () => {
    let tabla = 'clientes'
    let register = {tabla: tabla, datos: [{ id: this.idClientes, 
                                            identificacion: this.identificacion, 
                                            nombre: this.nombre,
                                            apellido: this.apellido, 
                                            telefono: this.telefono, 
                                            direccion: this.direccion
                                          }]}
    this.http.post(environment.API_URL, register)
    .subscribe( data => {
      // this.postData = data
    })
    window.location.reload()
  }
//POST MODAL CLIENTES -----------------------------------------------------------------------

// POST MODAL DETALLE ORDEN --------------------------------------------------------------------------------
  idDetalleOrden: number
  idordenes: number = this.id       //PENDIENTE EN MODAL
  idTipoPrenda: number
  idTallaPrenda: number
  idEtiqueta: number
  idBoton: number
  idHilo: number
  idTela: number
  etiquetaCantidad: number
  botonCantidad: number
  hiloCantidad: number
  telaCantidad: number

  postDataDetalleOrden = () => {
    let tabla = 'ordenes_detalle'
    let register = {tabla: tabla, datos: [{ id: this.idDetalleOrden, 
                                            idordenes: this.idordenes, 
                                            idtela: this.idTela,
                                            idboton: this.idBoton,
                                            idhilo: this.idHilo,
                                            idetiqueta: this.idEtiqueta,
                                            idtipoprenda: this.idTipoPrenda,
                                            idtallaprendas: this.idTallaPrenda,
                                            tela_cantidad: this.telaCantidad,
                                            boton_cantidad: this.botonCantidad,
                                            hilo_cantidad: this.hiloCantidad,
                                            etiqueta_cantidad: this.etiquetaCantidad
                                          }]}
    this.http.post(environment.API_URL, register)
    .subscribe( data => {
      // this.postData = data
    })
    window.location.reload()
  }

// POST MODAL DETALLE ORDEN --------------------------------------------------------------------------------
}