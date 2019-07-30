;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('materialBotones').del()
    .then(function () {
      // Inserts seed entries
      return knex('materialBotones').insert([
        {
          id: 1, 
          material: 'material1',
          descripcion: 'descripcion1'
        }
      ]);
    });
};
