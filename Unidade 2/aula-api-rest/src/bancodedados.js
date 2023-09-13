const banco = {
    identificadorInstrutor: 3,
    identificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: 'Julia',
            email: 'jujubs@gmail.com',
            status: true
        },
        {
            id: 2,
            nome: 'Diego',
            email: 'dieguito@gmail.com',
            status: true
        }
    ],
    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: 'Primeiro Servidor',
            descricao: 'Construindo o primeiro servidor'
        }
    ]
}

module.exports = banco