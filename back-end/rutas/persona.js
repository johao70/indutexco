;
const express = require('express')
let api = express.Router(),
  control = require('../controles/persona')

api.get('/persona', control.getDatos)
api.post('/persona', control.postDatos)


module.exports = api