const email = "aluno@cubos.academy";

const emailValido = (email) => {
    let valido = true;

    if(email.indexOf('@') < 0) {
        valido = false;
    } else if(email.indexOf('.') < 0) {
        valido = false;
    } else if(email.indexOf('.') == 0) {
        valido = false;
    } else if(email.lastIndexOf('.') == email.length - 1) {
        valido = false;
    }

    if(valido) {
        console.log('email válido');
    } else {
        console.log('email inválido');
    }
}

emailValido(email);
//emailValido('jose@cubos.academy.br');
//emailValido('jose.messias@cubos.academy');
//emailValido('jose.messias@cubos.io');
//emailValido('jose@cubos');
//emailValido('jose.messias@cubos');
//emailValido('jose.messias@.');
//emailValido('jose.@cubos');
//emailValido('.@');
//emailValido('@.');
//emailValido('jose.messias@cubos.');
//emailValido('.messias@cubos.');
//emailValido('.messias@cubos');
