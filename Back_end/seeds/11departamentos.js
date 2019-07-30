;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('departamentos').del()
    .then(function () {
      // Inserts seed entries
      return knex('departamentos').insert([
        {
          id: 1, 
          nombre: 'departamento1'
        }
      ]);
    });
};
