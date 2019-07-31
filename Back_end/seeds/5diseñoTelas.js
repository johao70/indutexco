;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('diseñotelas').del()
    .then(function () {
      // Inserts seed entries
      return knex('diseñotelas').insert([
        {
          id: 1, 
          diseño: 'diseño1',
          caracteristica: 'caracteristica1'
        }       
      ]);
    });
};
