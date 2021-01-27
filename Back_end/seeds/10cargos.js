exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cargos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cargos").insert([
        {
          id: 1,
          nombre: "cargo1",
        },
      ]);
    });
};
