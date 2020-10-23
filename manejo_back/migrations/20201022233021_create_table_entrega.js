exports.up = function(knex) {
    return knex.schema
    .createTable('entrega', (table) => {
        table.increments('id');
        table.string('name', 512).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('entrega');
};

