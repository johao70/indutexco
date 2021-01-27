exports.up = function (knex, Promise) {
  //TABLAS DEBILES
  return (
    knex.schema
      .createTable("etiquetas", function (table) {
        table.increments("id");
        table.string("nombre").notNullable().unique();
        table.string("comentario");
      })
      .createTable("colorhilos", function (table) {
        table.increments("id");
        table.string("nombre").notNullable().unique();
        table.string("caracteristica");
      })
      .createTable("materialtelas", function (table) {
        table.increments("id");
        table.string("material").notNullable().unique();
        table.string("caracteristica");
      })
      .createTable("colortelas", function (table) {
        table.increments("id");
        table.string("nombre").notNullable().unique();
        table.string("descripcion");
      })
      .createTable("diseñotelas", function (table) {
        table.increments("id");
        table.string("diseño").notNullable().unique();
        table.string("caracteristica");
      })
      .createTable("proveedores", function (table) {
        table.increments("id");
        table.string("identificacion").notNullable().unique();
        table.string("nombre");
        table.string("apellido");
        table.string("telefono");
        table.string("direccion");
      })
      .createTable("materialbotones", function (table) {
        table.increments("id");
        table.string("material").notNullable().unique();
        table.string("descripcion");
      })
      .createTable("formabotones", function (table) {
        table.increments("id");
        table.string("descripcion").notNullable();
      })
      .createTable("colorbotones", function (table) {
        table.increments("id");
        table.string("color").notNullable().unique();
        table.string("descripcion");
      })
      .createTable("cargos", function (table) {
        table.increments("id");
        table.string("nombre");
      })
      .createTable("departamentos", function (table) {
        table.increments("id");
        table.string("nombre");
      })
      .createTable("estados", function (table) {
        table.increments("id");
        table.string("nombre");
        table.date("horario");
        table.timestamp("tiempo");
      })
      .createTable("clientes", function (table) {
        table.increments("id");
        table.string("identificacion");
        table.string("nombre");
        table.string("apellido");
        table.string("telefono");
        table.string("direccion");
      })
      .createTable("tipo_prendas", function (table) {
        table.increments("id");
        table.string("nombre");
      })
      .createTable("talla_prendas", function (table) {
        table.increments("id");
        table.string("nombre");
      })
      //TABLAS FUERTES
      .createTable("telas", function (table) {
        table.increments("id");
        table.string("nombre").notNullable().unique();
        table.string("textura");
        table.integer("idcolortelas").references("id").inTable("colortelas");
        table.integer("iddiseñotela").references("id").inTable("diseñotelas");
        table
          .integer("idmaterialtela")
          .references("id")
          .inTable("materialtelas");
        table.integer("idproveedor").references("id").inTable("proveedores");
      })
      .createTable("botones", function (table) {
        table.increments("id");
        table.string("nombre").notNullable().unique();
        table.string("dimensiones");
        table.string("tipo");
        table.integer("idforma").references("id").inTable("formabotones");
        table.integer("idcolorboton").references("id").inTable("colorbotones");
        table
          .integer("idmaterialboton")
          .references("id")
          .inTable("materialbotones");
        table.integer("idproveedor").references("id").inTable("proveedores");
      })
      .createTable("hilos", function (table) {
        table.increments("id");
        table.string("nombre").notNullable().unique();
        table.string("material");
        table.string("tipo");
        table.integer("idcolorhilo").references("id").inTable("colorhilos");
        table.integer("idproveedor").references("id").inTable("proveedores");
      })
      .createTable("empleado", function (table) {
        table.increments("id");
        table.string("nombre");
        table.string("apellido");
        table.string("direccion");
        table.string("telefono");
        table
          .integer("iddepartamentos")
          .references("id")
          .inTable("departamentos");
        table.integer("idcargo").references("id").inTable("cargos");
        table.integer("idestado").references("id").inTable("estados");
      })
      .createTable("inventarios", function (table) {
        table.increments("id");
        table.integer("idtela").references("id").inTable("telas");
        table.integer("idboton").references("id").inTable("botones");
        table.integer("idhilo").references("id").inTable("hilos");
        table.integer("idetiqueta").references("id").inTable("etiquetas");
        table.integer("idempleado").references("id").inTable("empleado");
      })
      .createTable("ordenes", function (table) {
        table.increments("id");
        table.date("fecha_orden");
        table.integer("idclientes").references("id").inTable("clientes");
      })
      .createTable("ordenes_detalle", function (table) {
        table.increments("id");
        table.integer("idtela").references("id").inTable("telas");
        table.integer("idboton").references("id").inTable("botones");
        table.integer("idhilo").references("id").inTable("hilos");
        table.integer("idetiqueta").references("id").inTable("etiquetas");
        table.integer("idordenes").references("id").inTable("ordenes");
        table.integer("idtipoprenda").references("id").inTable("tipo_prendas");
        table
          .integer("idtallaprendas")
          .references("id")
          .inTable("talla_prendas");
        table.integer("tela_cantidad");
        table.integer("boton_cantidad");
        table.integer("hilo_cantidad");
        table.integer("etiqueta_cantidad");
      })
  );
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists("etiquetas")
    .dropTableIfExists("colorhilos")
    .dropTableIfExists("colortelas")
    .dropTableIfExists("diseñotelas")
    .dropTableIfExists("materialtelas")
    .dropTableIfExists("proveedores")
    .dropTableIfExists("materialbotones")
    .dropTableIfExists("formabotones")
    .dropTableIfExists("colorbotones")
    .dropTableIfExists("cargos")
    .dropTableIfExists("departamentos")
    .dropTableIfExists("estados")
    .dropTableIfExists("telas")
    .dropTableIfExists("botones")
    .dropTableIfExists("hilos")
    .dropTableIfExists("empleado")
    .dropTableIfExists("inventarios")
    .dropTableIfExists("clientes")
    .dropTableIfExists("tipo_prendas")
    .dropTableIfExists("talla_prendas")
    .dropTableIfExists("ordenes")
    .dropTableIfExists("ordenes_detalle");
};
