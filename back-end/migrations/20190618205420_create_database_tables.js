;
exports.up = function(knex, Promise) {
  //TABLAS DEBILES
  return knex.schema.createTable( 'etiquetas', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('comentario');
  })
  .createTable( 'colorHilos', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('caracteristica');
  })
  .createTable( 'materialTelas', function( table ) {
    table.increments('id');
    table.string('material').notNullable().unique();
    table.string('caracteristica');
  })
  .createTable( 'colorTelas', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('descripcion');
  })
  .createTable( 'diseñoTelas', function( table ) {
    table.increments('id');
    table.string('diseño').notNullable().unique();
    table.string('caracteristica');
  })
  .createTable( 'proveedores', function( table ) {
    table.increments('id');
    table.string('ruc').notNullable().unique();
    table.string('nombre');
    table.string('apellido');
    table.string('telefono');
    table.string('direccion');
  })
  .createTable( 'materialBotones', function( table ) {
    table.increments('id');
    table.string('material').notNullable().unique();
    table.string('descripcion');
  })
  .createTable( 'formaBotones', function( table ) {
    table.increments('id');
    table.string('descripcion').notNullable();
  })
  .createTable( 'colorBotones', function( table ) {
    table.increments('id');
    table.string('color').notNullable().unique();
    table.string('descripcion');
  })
  .createTable( 'cargo', function( table ) {
    table.increments('id');
    table.string('nombre');
  })
  .createTable( 'departamentos', function( table ) {
    table.increments('id');
    table.string('nombre');
  })
  .createTable( 'estado', function( table ) {
    table.increments('id');
    table.string('nombre');
    table.date('horario');
    table.timestamp('tiempo');
  })
  //TABLAS FUERTES
  .createTable( 'telas', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('textura');
    table.integer('idColorTelas').references('id').inTable('colorTelas');
    table.integer('idDiseñoTela').references('id').inTable('diseñoTelas');
    table.integer('idMaterialTela').references('id').inTable('materialTelas');
    table.integer('idProveedor').references('id').inTable('proveedores');
  })
  .createTable( 'botones', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('dimensiones');
    table.string('tipo');
    table.integer('idForma').references('id').inTable('formaBotones');
    table.integer('idColorBoton').references('id').inTable('colorBotones');
    table.integer('idMaterialBoton').references('id').inTable('materialBotones');
    table.integer('idProveedor').references('id').inTable('proveedores');
  })
  .createTable( 'hilos', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('material');
    table.string('tipo');
    table.integer('idColorHilo').references('id').inTable('colorHilos');
    table.integer('idProveedor').references('id').inTable('proveedores');
  })
  .createTable( 'empleado', function( table ) {
    table.increments('id');
    table.string('nombre');
    table.string('apellido');
    table.string('direccion');
    table.string('telefono');
    table.integer('idDepartamentos').references('id').inTable('departamentos');
    table.integer('idCargo').references('id').inTable('cargo');
    table.integer('idEstado').references('id').inTable('estado');
  })
  .createTable( 'productos', function( table ) {
    table.increments('id');
    table.integer('idTela').references('id').inTable('telas');
    table.integer('idBoton').references('id').inTable('botones');
    table.integer('idHilo').references('id').inTable('hilos');
    table.integer('idEtiqueta').references('id').inTable('etiquetas');
    table.integer('idEmpleado').references('id').inTable('empleado');
  })
  };

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists( 'etiquetas' )
        .dropTableIfExists( 'colorHilos' )
        .dropTableIfExists( 'colorTelas' )
        .dropTableIfExists( 'diseñoTelas' )
        .dropTableIfExists( 'materialTelas' )
        .dropTableIfExists( 'proveedores' )
        .dropTableIfExists( 'materialBotones' )
        .dropTableIfExists( 'formaBotones' )
        .dropTableIfExists( 'colorBotones' )
        .dropTableIfExists( 'cargo' )
        .dropTableIfExists( 'departamentos' )
        .dropTableIfExists( 'estado' )
        .dropTableIfExists( 'telas' )
        .dropTableIfExists( 'botones' )
        .dropTableIfExists( 'hilos' )
        .dropTableIfExists( 'empleado' )
        .dropTableIfExists( 'productos' )
};
