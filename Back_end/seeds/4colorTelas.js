exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("colortelas")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("colortelas").insert([
        {
          id: 1,
          nombre: "rojo",
          descripcion: "descripcionRojo",
        },
      ]);
    });
};
