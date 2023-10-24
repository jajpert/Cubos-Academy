// const agenda = await knex('agenda').debug();

    // const agenda = await knex.raw('select * from agenda');

    // const agenda = await knex('agenda').where('id', 5).debug();

    // const agenda = await knex('agenda').where('id', '!=', 5).debug();

    //const agenda = await knex('agenda').where({id: 5}).select('id', 'nome').first().debug();

    // const agenda = await knex('agenda').whereNull('email').debug();

    // const agenda = await knex('agenda').whereNotNull('email').debug();

    // const agenda = await knex('agenda').whereBetween('id', [5, 10]).debug();

    // const agenda = await knex('agenda').whereBetween('id', [5, 10]).orderBy('id', 'desc').debug();

    // const agenda = await knex('agenda').distinct('email', 'nome').debug();

    // const agenda = await knex('agenda').select('email').groupBy('email').count().debug();

    // const agenda = await knex('agenda').limit(5).offset(2).debug();

    // const agenda = await knex('agenda').whereNull('email').count().debug();

    // const agenda = await knex('agenda').whereNull('email').avg('id').debug();

    // const agenda = await knex('agenda').whereNull('email').min('id').debug();

    // const agenda = await knex('agenda').whereNull('email').max('id').debug();

    // const quantidade = await knex('farmacia').count();

    // const menor = await knex('usuarios').min('idade');

    // const somaCategorias = await knex('farmacia').select('categoria').sum('estoque').whereNotNull('categoria').groupBy('categoria').debug();
    
    // const semCategoria = await knex('farmacia').whereNull('categoria').count();
    
    // const qntCategoria = await knex('farmacia').select('categoria').count().whereNotNull('categoria').groupBy('categoria').debug();
    
    // const idade = await knex('usuarios').select('idade').count().where('idade', ">=", 18).groupBy('idade').debug();
    