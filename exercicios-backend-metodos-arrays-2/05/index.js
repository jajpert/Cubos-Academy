const usuarios = [
  {
    nome: "André",
    idade: 29,
    habilitado: false,
  },
  {
    nome: "Marcos",
    idade: 70,
    habilitado: true,
  },
  {
    nome: "Ana",
    idade: 35,
    habilitado: true,
  },
  {
    nome: "Vinícius",
    idade: 44,
    habilitado: true,
  },
  {
    nome: "Carlos",
    idade: 17,
    habilitado: false,
  },
  {
    nome: "Maria",
    idade: 19,
    habilitado: true,
  },
];

const maiorIdade = usuarios.filter((elementoAtual) => {
	return elementoAtual.idade >= 18 && elementoAtual.idade <= 65; 
});

const habilitados = maiorIdade.every((elementoAtual) => {
	return elementoAtual.habilitado;
});

if(habilitados) {
	console.log('todos passaram no teste');
} else {
	console.log('todos precisam estar habilitados');
};