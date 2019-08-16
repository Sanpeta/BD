
exports.up = function(knex) {
    return knex.schema.createTable('usuario', table => {
        table.increments('id').primary()
        table.string('nome').notNullable()
        table.string('email').unique().notNullable()
        table.string('senha', 60).notNullable()
        table.boolean('ativo').notNullable().defaultTo(true)
        table.timestamp('data_criacao').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario')
};
