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
  respuestaTelas: any[]
  respuestaBotones: any[]
  respuestaHilos: any[]
  respuestaEtiquetas: any[]
  
  //
  default: number

  //POST
  id: number
  idEtiqueta: number
  idBoton: number
  idHilo: number
  idTela: number

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDataTable()
    this.getDataTelas()
    this.getDataBotones()
    this.getDataHilos()
    this.getDataEtiquetas()
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
    this.default = 999
  }

  //TABLE
  getDataTable = () => {
    let tabla = 'Productos'
    this.http.get<any>(environment.API_URL + `${tabla}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }

  postDataTable = () => {
    let tabla = 'productos'
    let register = {tabla: tabla, datos: [{id: this.id, idtela: this.idTela, idboton: this.idBoton, idhilo: this.idHilo, idetiqueta: this.idEtiqueta}]}
    this.http.post(environment.API_URL, register)
    .subscribe( data => {
      // this.postData = data
    })
    window.location.reload()
  }

  //OPTIONS
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

  deleteDataTable = (value) => {
    let tabla = 'productos'
    this.http.delete(environment.API_URL + `?tabla=${tabla}&&id=${value}`)
    .subscribe( data => { })
    window.location.reload()
  }

}