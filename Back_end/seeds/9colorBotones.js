;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('colorBotones').del()
    .then(function () {
      // Inserts seed entries
      return knex('colorBotones').insert([
        {
          id: 1, 
          color: 'negro',
          descripcion: 'descripcionNegro'
        }
      ]);
    });
};
