const db = require('../config/db')

// const novoPerfil = {
//     nome: 'visitante',
//     rotulo: 'Visitante'
// }
//
// db('perfil').insert(novoPerfil)
//     .then(res => console.log(res))
//     .catch(err => console.log(err.sqlMessage))
//     .finally(() => db.destroy());

const perfilSU = {
    nome: 'root'+Math.random(),
    rotulo: 'Super Usuario'
}

db('perfil').insert(perfilSU)
        .then(res => console.log(res))
        .finally(() => db.destroy())