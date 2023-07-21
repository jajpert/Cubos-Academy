const cpf = "011.022.033-44";

const cpfFormatado = (cpf) => {
    let cpfSujo = cpf.replace('-', '').replace('/', '').split('.');
    
    let cpfLimpo = '';
    for(let item of cpfSujo) {
        cpfLimpo += item
    }
    
    return cpfLimpo
}

console.log(cpfFormatado(cpf));