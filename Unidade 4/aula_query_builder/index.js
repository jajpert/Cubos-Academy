const express = require('express');
const knex = require('./conexao')

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    // const julia = {
    //     nome: 'Julia Ajpert4',
    //     email: 'jajapert4@gmail.com',
    //     telefone: '(67) 99999-9999'
    // }

    // const joao = {
    //     nome: 'Joao Ajpert',
    //     email: 'joaobro@gmail.com',
    //     telefone: '(67) 99999-9999'
    // }

    // const agenda = await knex('agenda').insert(julia).returning(['id', 'nome']);
    // const agenda = await knex('agenda').insert([julia, joao]).returning('*');

    const agenda = await knex('agenda');
    return res.json(agenda);
});

app.put('/:id', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const { id } = req.params;

    const agendaAtualizada = await knex('agenda').update({ nome, email, telefone }).where({id}).returning('*');

    return res.json(agendaAtualizada);
});

app.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const agendaExcluida = await knex('agenda').del().where({id}).returning('*');

    return res.json(agendaExcluida);
});

app.post('/:id/anotacoes', async (req, res) => {
    const { id } = req.params;
    const {nota} = req.body;

    const anotacoes = await knex('anotacoes').insert({
        agenda_id: id,
        nota
    }).where({id}).returning('*');

    return res.json(anotacoes);
});

app.get('/anotacoes', async (req, res) => {
    const anotacoes = await knex('anotacoes').join('agenda', 'anotacoes.agenda_id', 'agenda.id').select('anotacoes.*', 'agenda.nome');

    // const anotacoes = await knex('anotacoes').leftJoin('agenda', 'anotacoes.agenda_id', 'agenda.id').select('anotacoes.*', 'agenda.nome');
    
    // const anotacoes = await knex('anotacoes').rightJoin('agenda', 'anotacoes.agenda_id', 'agenda.id').select('anotacoes.*', 'agenda.nome');
    return res.json(anotacoes);
})

app.listen(3000, () => {
    console.log('foi');
})