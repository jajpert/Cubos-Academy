const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const filaAtendimento = (listaPacientes, operacao, nome) => {
    let indice = listaPacientes.indexOf(nome);

    if(operacao == 'agendar') {
        listaPacientes.splice(indice, 1);
        listaPacientes.push(nome);

    } else if(operacao == 'atender') {
        if(listaPacientes[0] == nome) {
            listaPacientes.splice(indice, 1);
        }
    }

    console.log(listaPacientes.join(', '));
}

filaAtendimento(pacientes, 'agendar', 'Bárbara');