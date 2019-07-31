;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('colorhilos').del()
    .then(function () {
      // Inserts seed entries
      return knex('colorhilos').insert([
        {
          id: 1, 
          nombre: 'rojo',
          caracteristica: 'fino'
        }
      ]);
    });
};
