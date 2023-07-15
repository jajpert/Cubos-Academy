const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

for(let pessoa of usuarios) {
    if(pessoa.idade > 17) {
        pessoa.maior_idade = true;
    } else {
        pessoa.maior_idade = false
    }
}

console.log(usuarios);