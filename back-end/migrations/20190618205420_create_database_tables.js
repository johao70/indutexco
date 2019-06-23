;
exports.up = function(knex, Promise) {
  //TABLAS DEBILES
  return knex.schema.createTable( 'etiquetas', function( table ) {
      table.increments('id');
      table.string('nombre').notNullable().unique();
      table.string('comentario');
  })
  .createTable( 'colorHilo', function( table ) {
      table.increments('id');
      table.string('nombre').notNullable().unique();
      table.string('caracteristica');
  })
  .createTable( 'materialTela', function( table ) {
    table.increments('id');
    table.string('material').notNullable().unique();
    table.string('caracteristica');
  })
  .createTable( 'colorTela', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('descripcion');
  })
  .createTable( 'diseñoTela', function( table ) {
    table.increments('id');
    table.string('diseño').notNullable().unique();
    table.string('caracteristica');
  })
  .createTable( 'proveedor', function( table ) {
    table.increments('id');
    table.string('ruc').notNullable().unique();
    table.string('nombre');
    table.string('apellido');
    table.string('telefono');
    table.string('direccion');
  })
  .createTable( 'materialBoton', function( table ) {
    table.increments('id');
    table.string('material').notNullable().unique();
    table.string('descripcion');
  })
  .createTable( 'formaBoton', function( table ) {
    table.increments('id');
    table.string('descripcion').notNullable();
  })
  .createTable( 'colorBoton', function( table ) {
    table.increments('id');
    table.string('color').notNullable().unique();
    table.string('descripcion');
  })
  //TABLAS FUERTES
  .createTable( 'telas', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('textura');
    table.integer('idColorTelas').references('id').inTable('colorTela');
    table.integer('idDiseñoTela').references('id').inTable('diseñoTela');
    table.integer('idMaterialTela').references('id').inTable('materialTela');
    table.integer('idProveedor').references('id').inTable('proveedor');
  })
  .createTable( 'botones', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('dimensiones');
    table.string('tipo');
    table.integer('idForma').references('id').inTable('formaBoton');
    table.integer('idColorBoton').references('id').inTable('colorBoton');
    table.integer('idMaterialBoton').references('id').inTable('materialBoton');
    table.integer('idProveedor').references('id').inTable('proveedor');
  })
  .createTable( 'hilo', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('material');
    table.string('tipo');
    table.integer('idColorHilo').references('id').inTable('colorHilo');
    table.integer('idProveedor').references('id').inTable('proveedor');
  })
  .createTable( 'producto', function( table ) {
    table.increments('id');
    table.integer('idTela').references('id').inTable('telas');
    table.integer('idBoton').references('id').inTable('botones');
    table.integer('idHilo').references('id').inTable('hilo');
    table.integer('idEtiqueta').references('id').inTable('etiquetas');
  })
  };

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists( 'etiquetas' )
        .dropTableIfExists( 'colorHilo' )
        .dropTableIfExists( 'colorTela' )
        .dropTableIfExists( 'diseñoTela' )
        .dropTableIfExists( 'materialTela' )
        .dropTableIfExists( 'proveedor' )
        .dropTableIfExists( 'materialBoton' )
        .dropTableIfExists( 'formaBoton' )
        .dropTableIfExists( 'colorBoton' )
        .dropTableIfExists( 'telas' )
        .dropTableIfExists( 'botones' )
        .dropTableIfExists( 'hilo' )
        .dropTableIfExists( 'producto' )
};
