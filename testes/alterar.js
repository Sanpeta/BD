const db = require('../config/db');

const novoUsuario = {
    nome: 'Pedro',
    email: 'pedro@emapresa.com',
    senha: '12312'
};

async function exercicio() {
    const {qtde} = await db('usuario')
        .count('* as qtde').first()

    if (qtde === 0) {
        await db('usuario').insert(novoUsuario)
    }

    let {id} = await db('usuario')
        .select('id').limit(1).first()

    await db('usuario').where({id: id})
        .update({nome: 'Sidnei de Souza Junior', email: 'Sidnei@gmail.com'});

    return db('usuario').where({id})
}

exercicio().then(usuario => console.log(usuario))
    .finally(() => db.destroy())