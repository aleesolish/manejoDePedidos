
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('entrega').del()
    .then(function () {
      // Inserts seed entries
      return knex('entrega').insert([
        {id: 1, name: 'Salida de Planta'},
        {id: 2, name: 'Local Delivery Center'},
        {id: 3, name: 'En proceso de entrega'},
        {id: 4, name: 'Entrega exitosa'}, 
        {id: 5, name: 'Entrega fallida'}
      ]);
    });
};