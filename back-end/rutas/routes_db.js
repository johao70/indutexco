;
const express = require('express')
let api = express.Router(),
  control = require('../controles/crud')

api.get('/route', control.getDatos)
api.post('/route', control.postDatos)
api.put('/route', control.updateDatos )
api.delete('/route', control.deleteDatos)

// prueba
api.get('/route_prueba', control.get_prueba)


module.exports = api