exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("materialbotones")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("materialbotones").insert([
        {
          id: 1,
          material: "material1",
          descripcion: "descripcion1",
        },
      ]);
    });
};
