const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '3545',
    database: 'aula_conexao_node_pq'
});

module.exports = pool;