;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('colorbotones').del()
    .then(function () {
      // Inserts seed entries
      return knex('colorbotones').insert([
        {
          id: 1, 
          color: 'negro',
          descripcion: 'descripcionNegro'
        }
      ]);
    });
};
