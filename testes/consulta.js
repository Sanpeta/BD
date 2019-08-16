const db = require('../config/db');
//
// db('perfil')
//     .then(res => res.map(p => p.nome))
//     .then(nomes => console.log(nomes))
//     .finally(() => db.destroy());
//
// db('perfil').select('nome', 'id')
//     .then(res => console.log(res))
//     .finally(() => db.destroy());

db.select('nome', 'id')
    .from('perfil')
    .limit(4)
    .offset(2)
    .then(res => console.log(res))
    .finally(() => db.destroy());

db('perfil')
//.where('id', '=', '2')
//.where('nome', 'like', '%m%')
//.whereNot({id: 2})
    .where({id:2})
    .then(res => console.log(res))
    .finally(() => db.destroy());