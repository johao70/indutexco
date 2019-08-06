import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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
    this.getPDF()
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
      f_cantidadEtiquetas: ['',[Validators.required, Validators.pattern('[0-9]{1,3}')]],
      f_cantidadBotones: ['',[Validators.required, Validators.pattern('[0-9]{1,3}')]],
      f_cantidadHilos: ['',[Validators.required, Validators.pattern('[0-9]{1,3}')]],
      f_cantidadTelas: ['',[Validators.required, Validators.pattern('[0-9]{1,3}')]]
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
  postDataClientes = () => {
    let identificacion = this.clienteForm.get('identificacion').value
    let nombres = this.clienteForm.get('nombres').value
    let apellidos = this.clienteForm.get('apellidos').value
    let telefonos = this.clienteForm.get('telefonos').value
    let direcciones = this.clienteForm.get('direcciones').value

    let tabla = 'clientes'
    let register = {tabla: tabla, datos: [{ 
                                            identificacion: identificacion, 
                                            nombre: nombres,
                                            apellido: apellidos, 
                                            telefono: telefonos, 
                                            direccion: direcciones
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
  idOrdenes: number

  postDataDetalleOrden = () => {
    let f_tipoPrenda = this.detalleOrdenForm.get('f_tipoPrenda').value
    let f_tallaPrenda = this.detalleOrdenForm.get('f_tallaPrenda').value
    let f_etiquetas = this.detalleOrdenForm.get('f_etiquetas').value
    let f_cantidadEtiquetas = this.detalleOrdenForm.get('f_cantidadEtiquetas').value
    let f_botones = this.detalleOrdenForm.get('f_botones').value
    let f_cantidadBotones = this.detalleOrdenForm.get('f_cantidadBotones').value
    let f_hilos = this.detalleOrdenForm.get('f_hilos').value
    let f_cantidadHilos = this.detalleOrdenForm.get('f_cantidadHilos').value
    let f_telas = this.detalleOrdenForm.get('f_telas').value
    let f_cantidadTelas = this.detalleOrdenForm.get('f_cantidadTelas').value

    let tabla = 'ordenes_detalle'
    let register = {tabla: tabla, datos: [{ 
                                            idordenes: this.idOrdenes, 
                                            idtela: f_telas,
                                            idboton: f_botones,
                                            idhilo: f_hilos,
                                            idetiqueta: f_etiquetas,
                                            idtipoprenda: f_tipoPrenda,
                                            idtallaprendas: f_tallaPrenda,
                                            tela_cantidad: f_cantidadTelas,
                                            boton_cantidad: f_cantidadBotones,
                                            hilo_cantidad: f_cantidadHilos,
                                            etiqueta_cantidad: f_cantidadEtiquetas
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

// JSPDF

  docPdf: jsPDF;
  pdfData: any[]

  getPDF = () => {
    let ruta = 'pdf'
    this.http.get<any>(environment.API_URL + `${ruta}`)
    .subscribe(data => {
      this.pdfData = data.datos
    })
    console.log(this.pdfData)
  }

  pdf() {
    let textSize=10;
    let anchoTotal=210
    let altoTotal=290
    let margenSup=25
    let margeninf=25
    let margeniz=25
    let margende= 25
    let anchouso= anchoTotal-margeniz-margende
    let altouso=altoTotal-margenSup-margeninf
    let x=25;
    let y=25;

    let doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'A4',
      compress: true,
    })
    var headers = 
    {
      f_clientes: "Cliente",
      fecha_orden: "Fecha",
      f_telas: "Tipo de tela",
      f_botones: "Tipo de boton",
      f_hilos: "Tipo de hilo",
      f_etiqueta: "Tipo de etiqueta",
      boton_cantidad: "Cantidad botones",
      tela_cantidad: "Cantidad tela(metros)",
      hilo_cantidad: "Cantidad hilo",
      etiqueta_cantidad: "Cantidad etiquetas",
      f_tipoprenda: "Tipo de prenda",
      f_tallaprendas: "Talla de la prenda"
    };
    doc.autoTable({
      head: [headers],
      body: this.pdfData, colSpan: 2, rowSpan: 2, styles: {halign: 'center'},
    })
    doc.save('OrdenesProduccion.pdf')
  }

// JSPDF
}