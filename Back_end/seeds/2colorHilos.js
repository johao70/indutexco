;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('colorHilos').del()
    .then(function () {
      // Inserts seed entries
      return knex('colorHilos').insert([
        {
          id: 1, 
          nombre: 'rojo',
          caracteristica: 'fino'
        }
      ]);
    });
};
