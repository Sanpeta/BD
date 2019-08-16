
exports.up = function(knex) {
    return knex.schema.createTable('perfil', table => {
        table.increments('id').primary()
        table.string('nome').notNullable().unique()
        table.string('rotulo').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('perfil')
};
