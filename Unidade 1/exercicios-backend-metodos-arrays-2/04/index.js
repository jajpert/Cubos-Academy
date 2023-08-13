const numeros = [0, 122, 4, 6, 7, 8, 44]

const valido = numeros.every((elementoAtual) => {
    return elementoAtual % 2 == 0;
});

if(valido) {
    console.log('array válido');
} else {
    console.log('array inválido');
}