const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
];

const prog20 = pessoas.filter((elementoAtual) => {
    return elementoAtual.profissao == 'Programador' && elementoAtual.idade > 20;
});

const jornalista30 = pessoas.filter((elementoAtual) => {
    return elementoAtual.profissao == 'Jornalista' && elementoAtual.idade > 30;
});

const jovens = pessoas.filter((elementoAtual) => {
    return (elementoAtual.profissao == 'Jornalista' || elementoAtual.profissao == 'Programador') && elementoAtual.idade < 30;
});

console.log(prog20);
console.log(jornalista30);
console.log(jovens);