;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('materialtelas').del()
    .then(function () {
      // Inserts seed entries
      return knex('materialtelas').insert([
        {
          id: 1, 
          material: 'material1',
          caracteristica: 'caracteristica1'
        }
      ]);
    });
};
