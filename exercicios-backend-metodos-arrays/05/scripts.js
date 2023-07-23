const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const agendarPaciente = (listaPacientes, paciente) => {
    let indice = listaPacientes.indexOf(paciente);

    listaPacientes.splice(indice, 1);
    listaPacientes.push(paciente);

    console.log(listaPacientes.join(', '));
}

const atenderPaciente = (listaPacientes, paciente) => {
    let indice = listaPacientes.indexOf(paciente);
    if(listaPacientes[0] == paciente) {
        listaPacientes.splice(indice, 1);
    }

    console.log(listaPacientes.join(', '));
}

const cancelarAtendimento = (listaPacientes, paciente) => {
    let indice = listaPacientes.indexOf(paciente);
    listaPacientes.splice(indice, 1);

    console.log(listaPacientes.join(', '));
}

agendarPaciente(pacientes, 'José');
atenderPaciente(pacientes, 'Pedro');
cancelarAtendimento(pacientes, 'Ana');