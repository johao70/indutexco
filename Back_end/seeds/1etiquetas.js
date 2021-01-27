exports.seed = function (knex, Promise) {
  return knex("etiquetas")
    .del()
    .then(function () {
      return knex("etiquetas").insert([
        {
          nombre: "etiqueta1",
          comentario: "comentario1",
        },
      ]);
    });
};
