const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if(this.ligado) {
            console.log('Este carro já está ligado');
        } else {
            this.ligado = true;
            console.log('Carro ligado. Velocidade: 0.');
        }
    },
    desligar: function () {
        if(this.ligado && this.velocidade == 0) {
            this.ligado = false;
            this.velocidade = 0;

            console.log('Carro desligado. Velocidade: 0.');
        } else if(this.ligado && this.velocidade != 0) {
            console.log('Você tem que desacelerar mais para desligar.');

        } else {
            console.log('Este carro já está desligado');
        }
    },
    acelerar: function () {
        if(!this.ligado) {
            this.ligado = true;
            this.velocidade += 10;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}`);
        } else {
            this.velocidade += 10;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}`);
        }
    },
    desacelerar: function () {
        if(!this.ligado) {
            console.log('Não é possível desacelerar um carro desligado');
        } else {
            this.velocidade -= 10;

            if(this.velocidade) {
                console.log(`Carro ligado. Velocidade: ${this.velocidade}`);
            } else {
                this.ligado = false;
                console.log('Carro desligado. Velocidade: 0.');
            }
        }
    }
}

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
carro.desacelerar();