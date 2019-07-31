;
exports.up = function(knex, Promise) {
  //TABLAS DEBILES
  return knex.schema.createTable( 'etiquetas', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('comentario');
  })
  .createTable( 'colorhilos', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('caracteristica');
  })
  .createTable( 'materialtelas', function( table ) {
    table.increments('id');
    table.string('material').notNullable().unique();
    table.string('caracteristica');
  })
  .createTable( 'colortelas', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('descripcion');
  })
  .createTable( 'diseñotelas', function( table ) {
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
  .createTable( 'materialbotones', function( table ) {
    table.increments('id');
    table.string('material').notNullable().unique();
    table.string('descripcion');
  })
  .createTable( 'formabotones', function( table ) {
    table.increments('id');
    table.string('descripcion').notNullable();
  })
  .createTable( 'colorbotones', function( table ) {
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
    table.integer('idcolortelas').references('id').inTable('colortelas');
    table.integer('iddiseñotela').references('id').inTable('diseñotelas');
    table.integer('idmaterialtela').references('id').inTable('materialtelas');
    table.integer('idproveedor').references('id').inTable('proveedores');
  })
  .createTable( 'botones', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('dimensiones');
    table.string('tipo');
    table.integer('idforma').references('id').inTable('formabotones');
    table.integer('idcolorboton').references('id').inTable('colorbotones');
    table.integer('idmaterialboton').references('id').inTable('materialbotones');
    table.integer('idproveedor').references('id').inTable('proveedores');
  })
  .createTable( 'hilos', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('material');
    table.string('tipo');
    table.integer('idcolorhilo').references('id').inTable('colorhilos');
    table.integer('idproveedor').references('id').inTable('proveedores');
  })
  .createTable( 'empleado', function( table ) {
    table.increments('id');
    table.string('nombre');
    table.string('apellido');
    table.string('direccion');
    table.string('telefono');
    table.integer('iddepartamentos').references('id').inTable('departamentos');
    table.integer('idcargo').references('id').inTable('cargo');
    table.integer('idestado').references('id').inTable('estado');
  })
  .createTable( 'productos', function( table ) {
    table.increments('id');
    table.integer('idtela').references('id').inTable('telas');
    table.integer('idboton').references('id').inTable('botones');
    table.integer('idhilo').references('id').inTable('hilos');
    table.integer('idetiqueta').references('id').inTable('etiquetas');
    table.integer('idempleado').references('id').inTable('empleado');
  })
  };

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists( 'etiquetas' )
        .dropTableIfExists( 'colorhilos' )
        .dropTableIfExists( 'colortelas' )
        .dropTableIfExists( 'diseñotelas' )
        .dropTableIfExists( 'materialtelas' )
        .dropTableIfExists( 'proveedores' )
        .dropTableIfExists( 'materialbotones' )
        .dropTableIfExists( 'formabotones' )
        .dropTableIfExists( 'colorbotones' )
        .dropTableIfExists( 'cargo' )
        .dropTableIfExists( 'departamentos' )
        .dropTableIfExists( 'estado' )
        .dropTableIfExists( 'telas' )
        .dropTableIfExists( 'botones' )
        .dropTableIfExists( 'hilos' )
        .dropTableIfExists( 'empleado' )
        .dropTableIfExists( 'productos' )
};
