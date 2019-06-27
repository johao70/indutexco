;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])

let getDatos = (req, res) => {
    let tabla = req.query.tabla
    let campo = req.query.campo
    db.select(campo).from(tabla)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} registros en la consulta`
        }) 
    })
}

let postDatos = (req, res) => {
    let tabla = req.body.tabla
    let retorno = req.body.retorno
    let datos = req.body.datos
    db(tabla).returning(retorno).insert(datos)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Se insertaron los datos`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}

let updateDatos = (req, res) => {
    let tabla = req.body.tabla
    let id = req.body.id
    let datos = req.body.datos
    db.select().from(tabla)
    .then( resultado => res.send(resultado))
    .then(
        db(tabla).where('id', id).update(datos)
        .then(resultado => {
            return res.status(200).json({
                ok: true,
                datos: resultado,
                mensaje: `Se actualizaron los datos`
            }) 
        })
        .catch((error) => {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: `Error del servidor: ${error}`
            })
        })
    )
}

let deleteDatos = (req, res) => {
    let tabla = req.body.tabla
    let id = req.body.id
    db.select().where('id', id).from(tabla)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Datos eliminados`
        }) 
    })
}

module.exports = {
    getDatos,
    postDatos,
    updateDatos,
    deleteDatos
}