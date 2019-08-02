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
  respuesta: any[]
  postData: any
  //OPTIONS
  // respuestaTelas: any[]
  // respuestaBotones: any[]
  // respuestaHilos: any[]
  // respuestaEtiquetas: any[]
  respuestaClientes: any[]

  //POST
  id: number
  nuevafecha = new Date()
  fecha_orden = this.nuevafecha.getDate() + "/" + (this.nuevafecha.getMonth() +1) + "/" + this.nuevafecha.getFullYear()
  idclientes: number

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDataTable()
    // this.getDataTelas()
    // this.getDataBotones()
    // this.getDataHilos()
    // this.getDataEtiquetas()
    this.getDataClientes()
    this.table_header = [
      {
        cliente: 'Cliente',
        fecha_orden: 'Fecha Orden de Compra'
      }
    ]
  }

  //TABLE
  getDataTable = () => {
    let tabla = 'ordenes'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }

  postDataTable = () => {
    let tabla = 'ordenes'
    let register = {tabla: tabla, datos: [{fecha_orden: this.fecha_orden, idclientes: this.idclientes}]}
    this.http.post(environment.API_URL, register)
    .subscribe( data => {
      // this.postData = data
    })
    window.location.reload()
  }

  //OPTIONS
  // getDataTelas = () => {
  //   let tabla = 'telas'
  //   this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
  //       .subscribe(data => {
  //           this.respuestaTelas = data.datos
  //       })
  // }

  // getDataBotones = () => {
  //   let tabla = 'botones'
  //   this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
  //       .subscribe(data => {
  //           this.respuestaBotones = data.datos
  //       })
  // }

  // getDataHilos = () => {
  //   let tabla = 'hilos'
  //   this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
  //       .subscribe(data => {
  //           this.respuestaHilos = data.datos
  //       })
  // }

  // getDataEtiquetas= () => {
  //   let tabla = 'etiquetas'
  //   this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
  //       .subscribe(data => {
  //           this.respuestaEtiquetas = data.datos
  //       })
  // }

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

}