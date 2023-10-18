const knex = require('knex') ({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '3545',
        database: 'knex'
    }
});

module.exports = knex;