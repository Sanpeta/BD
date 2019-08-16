
exports.up = function(knex) {
    return knex.schema.createTable('perfil', table => {
        table.increments('id').primary()
        table.string('nome').notNullable().unique()
        table.string('rotulo').notNullable()
    }).then(function () {
        return knex('perfil').insert([
            {nome: 'comum', rotulo: 'Comum'},
            {nome: 'admin', rotulo: 'Administrador'},
            {nome: 'master', rotulo: 'Master'}
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('perfil')
};
