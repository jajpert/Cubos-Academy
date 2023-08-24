const verificaSenha = (req, res, next) => {
    const {senha} = req.query;

    if(!senha) {
        return res.send('Senha não foi informada');
    } 

    if(senha !== 'carros123') {
        return res.send('Senha incorreta');
    }
    
    next();
}

module.exports = {verificaSenha};