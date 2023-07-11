//const filaDeDentro = ["Jose", "Maria", "Joao"];
//const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

while (filaDeDentro.length < 5) {
    if (filaDeFora.length >= 1) {
        let pessoa = filaDeFora[0]
        filaDeDentro.push(pessoa);
        filaDeFora.shift();
    } else {
        break
    }
}

console.log(filaDeDentro);
console.log(filaDeFora);