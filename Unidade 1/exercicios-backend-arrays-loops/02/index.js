//const letras = ["A", "a", "B", "C", "E", "e"];
const letras = ["A", "a", "B", "C", "L", "z"];

// seu codigo aqui

let cont = 0;
for(let e of letras) {
    if(e == 'e' || e == 'E') {
        cont += 1;
    }
}

if(cont > 0) {
    console.log(`Foram encontradas ${cont} letras "E" ou "e".`);
} else {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
}