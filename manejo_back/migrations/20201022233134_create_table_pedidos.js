exports.up = function(knex) {
    return knex.schema

    .createTable('pedido', (table) => {
        table.increments('id');
        table.string('name', 512).notNullable();
        table.integer('id_entrega',10).notNullable().unsigned().defaultTo(1);
        table.foreign('id_entrega').references('entrega.id');
        table.timestamp('time_status').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('pedido');
};
