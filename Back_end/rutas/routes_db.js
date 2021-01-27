const express = require("express");
let api = express.Router(),
  control = require("../controles/crud");

api.get("/route", control.getDatos);
api.post("/route", control.postDatos);
api.put("/route", control.updateDatos);
api.delete("/route", control.deleteDatos);

api.get("/routeF_ordenesdetalle", control.getDatosOrdenes_detalles);
api.get("/routeF_ordenes", control.getDatosOrdenes);
api.get("/routebyid", control.getDatosbyID);
api.get("/routepdf", control.getPDFordenes);

module.exports = api;
