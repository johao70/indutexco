import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ordentrabajo',
  templateUrl: './ordentrabajo.component.html',
  styleUrls: ['./ordentrabajo.component.scss']
})
export class OrdentrabajoComponent implements OnInit {

  table_header: any
  clienteForm: FormGroup
  detalleOrdenForm: FormGroup

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.getDataTable()
    this.getDataTelas()
    this.getDataBotones()
    this.getDataHilos()
    this.getDataEtiquetas()
    this.getDataClientes()
    this.getDataTipoPrenda()
    this.getDataTallaPrenda()
    this.formularioCliente()
    this.formularioDetalleOrden()
    this.table_header = [
      {
        id: 'N°',
        cliente: 'Cliente',
        fecha_orden: 'Fecha Orden de Producción'
      }
    ]
  }

  formularioCliente(){
    this.clienteForm = this.fb.group({
      identificacion: ['',[Validators.required, Validators.pattern('([0|1|2]{1})([0-9]{9})')]],
      nombres: ['',[Validators.required, Validators.pattern('[A-Za-z]{1}[a-z]{3,30}')]],
      apellidos: ['',[Validators.required, Validators.pattern('[A-Za-z]{1}[a-zñ]{3,30}')]],
      telefonos: ['',[Validators.required, Validators.pattern('(((09)|(08)|(06)){1})([0-9]{8})')]],
      direcciones: ['',[Validators.required]]
    })
  }

  formularioDetalleOrden(){
    this.detalleOrdenForm = this.fb.group({
      f_tipoPrenda: ['',[Validators.required]],
      f_tallaPrenda: ['',[Validators.required]],
      f_etiquetas: ['',[Validators.required]],
      f_botones: ['',[Validators.required]],
      f_hilos: ['',[Validators.required]],
      f_telas: ['',[Validators.required]],
      f_cantidadEtiquetas: ['',[Validators.required]],
      f_cantidadBotones: ['',[Validators.required]],
      f_cantidadHilos: ['',[Validators.required]],
      f_cantidadTelas: ['',[Validators.required]]
    })
  }

  //PAGINA PRINCIPAL ORDEN DE TRABAJO -------------------------------------------------------------------------------
  id: number
  nuevafecha = new Date()
  fecha_orden = this.nuevafecha.getDate() + "/" + (this.nuevafecha.getMonth() +1) + "/" + this.nuevafecha.getFullYear()
  idclientes: number
  respuestaClientes: any[]
  respuesta: any[]

  dataID: number

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

  getDatabyID = (value) => {
    let tabla = 'ordenes'
    this.http.get<any>(environment.API_URL + `byid?tabla=${tabla}&&id=${value}`)
    .subscribe( data => { 
      this.idOrdenes = data.datos[0].id
      localStorage.setItem("id", this.idOrdenes.toString() )
    })
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
    if(this.clienteForm.valid){
      this.http.post(environment.API_URL, register)
      .subscribe( data => {
        // this.postData = data
      })
      window.location.reload()
    }else{
      Swal.fire('Datos Invalidos')
    }

  }
//POST MODAL CLIENTES ------------------------------------------------------------------------

// POST MODAL DETALLE ORDEN --------------------------------------------------------------------------------
  idDetalleOrden: number
  idOrdenes: number
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
                                            idordenes: this.idOrdenes, 
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
    if(this.detalleOrdenForm.valid){
      this.http.post(environment.API_URL, register)
      .subscribe( data => {
        // this.postData = data
      })
      window.location.reload()
    }else{
      Swal.fire('Datos Invalidos')
    }

  }

// POST MODAL DETALLE ORDEN --------------------------------------------------------------------------------
}