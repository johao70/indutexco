;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('materialTelas').del()
    .then(function () {
      // Inserts seed entries
      return knex('materialTelas').insert([
        {
          id: 1, 
          material: 'material1',
          caracteristica: 'caracteristica1'
        }
      ]);
    });
};
