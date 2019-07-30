;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('colorTelas').del()
    .then(function () {
      // Inserts seed entries
      return knex('colorTelas').insert([
        {
          id: 1, 
          nombre: 'rojo',
          descripcion: 'descripcionRojo'
        }
      ]);
    });
};
