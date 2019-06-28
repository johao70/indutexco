;
const express = require('express')
let api = express.Router(),
  control = require('../controles/crud')

api.get('/prueba', control.getDatos)
api.post('/prueba', control.postDatos)
api.put('/prueba', control.updateDatos )
api.delete('/prueba', control.deleteDatos)


module.exports = api