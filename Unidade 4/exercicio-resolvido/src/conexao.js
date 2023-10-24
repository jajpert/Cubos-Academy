const knex = require('knex')({
    client: 'pg',
    connection: {
        host : 'localhost',
        user : 'postgres',
        password : '3545',
        database : 'postgres'
    }
});

module.exports = knex;