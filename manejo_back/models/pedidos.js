const knex = require('../database/connection');

exports.all = () => {
    return knex
        .select('*')
        .from('pedido');
}

exports.create = (pedido) => {
    return knex('pedido')
        .insert(
            { 
                name: pedido.name,
                id_entrega: 1,
                time_status: pedido.time
            }
            );
}

exports.find = (id) => {
    return knex
        .select('*')
        .from('pedido')
        .where('id', id)
        .first();
}


exports.updateEntrega = (pedido, entrega) => {
    return knex('pedido')
    .where({ id: pedido.id })
    .update({ 
                id_entrega: entrega.id,
                time_status: pedido.time
            })
}

