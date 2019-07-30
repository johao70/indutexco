;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('formaBotones').del()
    .then(function () {
      // Inserts seed entries
      return knex('formaBotones').insert([
        {
          id: 1, 
          descripcion: 'descripcion1'
        }
      ]);
    });
};
