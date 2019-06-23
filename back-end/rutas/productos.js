;
const express = require('express')
let api = express.Router(),
  control = require('../controles/crud')

api.get('/productos', control.getDatos)
api.post('/productos', control.postDatos)


module.exports = api