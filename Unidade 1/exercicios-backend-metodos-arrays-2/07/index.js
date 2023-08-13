const endereços = [
    { cep: '00111222', rua: "Rua dos Artistas" },
    { cep: '00111333', rua: "Rua Augusta" },
    { cep: '00222444', rua: "Avenida Paralela" },
    { cep: '11222333', rua: "Rua Carlos Gomes" },
];

function buscaCep(enderecos, cep) {
    const enderecoCorreto = enderecos.find((elementoAtual) => {
        return elementoAtual.cep == cep;
    })

    console.log(enderecoCorreto.rua);
}

buscaCep(endereços, '00222444');