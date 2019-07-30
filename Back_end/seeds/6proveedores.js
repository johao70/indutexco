;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('proveedores').del()
    .then(function () {
      // Inserts seed entries
      return knex('proveedores').insert([
        {
          id: 1, 
          ruc: '1234567890001',
          nombre: 'nombre1',
          apellido: 'apellido1',
          telefono: '0978970998',
          direccion: 'Av. 10 de Agosto'
        }
      ]);
    });
};
