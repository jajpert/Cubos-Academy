const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomeA = [];

for(let nome of nomes) {
    if(nome[0] == 'A' || nome[0] == 'a'){
        nomeA.push(nome);
    }
}

console.log(nomeA);