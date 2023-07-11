const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let total = 0;

for(let num of numeros) {
    if(num % 2 == 0) {
        total += num;
    }
}

console.log(total);