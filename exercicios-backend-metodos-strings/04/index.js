let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, 0);
console.log(identificador);


let nomeFormat = "";
for(let palavra of nome.split(" ")) {
    nomeFormat += `${palavra.slice(0, 1).toUpperCase()}${palavra.slice(1).toLowerCase()} `
}
console.log(nomeFormat);

email = email.trim();
console.log(email);