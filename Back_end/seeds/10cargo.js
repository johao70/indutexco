;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cargo').del()
    .then(function () {
      // Inserts seed entries
      return knex('cargo').insert([
        {
          id: 1, 
          nombre: 'cargo1'
        }
      ]);
    });
};
