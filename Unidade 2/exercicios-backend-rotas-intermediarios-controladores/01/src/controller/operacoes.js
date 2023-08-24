const somar = (req, res) => {
    let {num1, num2} = req.query;

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))){
        return res.send(`${Number(num1) + Number(num2)}`);
    }
    return res.send('Números inválidos')
};

const subtrair = (req, res) => {
    let {num1, num2} = req.query;

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))){
        return res.send(`${Number(num1) - Number(num2)}`);
    }
    return res.send('Números inválidos')
};

const multiplicar = (req, res) => {
    let {num1, num2} = req.query;

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))){
        return res.send(`${Number(num1) * Number(num2)}`);
    }
    return res.send('Números inválidos')
};

const dividir = (req, res) => {
    let {num1, num2} = req.query;

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))){
        return res.send(`${Number(num1) / Number(num2)}`);
    }
    return res.send('Números inválidos')
};

module.exports = {
    somar, 
    subtrair, 
    multiplicar, 
    dividir
};