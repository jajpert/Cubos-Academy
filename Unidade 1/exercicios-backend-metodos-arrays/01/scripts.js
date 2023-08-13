const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

let frutasModificado = frutas;
frutasModificado = frutasModificado.reverse().join(", ");
console.log(frutasModificado);

frutas.reverse().splice(0, 1)
frutas.splice(frutas.length - 1, 1, "Melão");
console.log(frutas);