const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

const encontraPet = (pet) => {
    for(let usuario of usuarios) {
        let pets = usuario.pets;

        let temOPet = pets.includes(pet);

        if(temOPet) {
            console.log(`O dono(a) do(a) ${pet} é o(a) ${usuario.nome}`);
        }
    }
}

encontraPet('Naninha');