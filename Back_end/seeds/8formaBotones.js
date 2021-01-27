exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("formabotones")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("formabotones").insert([
        {
          id: 1,
          descripcion: "descripcion1",
        },
      ]);
    });
};
