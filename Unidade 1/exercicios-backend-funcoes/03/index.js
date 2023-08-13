const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        let qtdTotal = this.calcularTotalDeItens();
        let qtdPreco = this.calcularTotalAPagar();

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${qtdTotal} itens`);
        console.log(`Total a pagar: R$${(qtdPreco/100).toFixed(2)}`);
    },
    addProduto: function (produto) {
        let idDiferente = false;

        for(let coisa of this.produtos){
            if(coisa.id == produto.id) {
                coisa.qtd += produto.qtd;
                idDiferente = false;
            } else{
                idDiferente = true;
            }
        }

        if(idDiferente) {
            this.produtos.push(produto);
        }
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        let num = 1;
        for(let item of this.produtos) {
            console.log(`Item ${num} - ${item.nome} - ${item.qtd} und - R$${(item.precoUnit / 100).toFixed(2)}`);
            num++;
        }
        let qtdTotal = this.calcularTotalDeItens();
        console.log(`Total de itens: ${qtdTotal}`);

        let totalAPagar = this.calcularTotalAPagar();
        console.log(`Total a pagar: R$${(totalAPagar / 100).toFixed(2)}`);
    },
    calcularTotalDeItens: function () {
        let qtdTotal = 0;
        for(let item of this.produtos) {
            qtdTotal += item.qtd;
        }
        return qtdTotal;
    }, 
    calcularTotalAPagar: function () {
        let qtdPreco = 0;

        for(let produto of this.produtos) {
            qtdPreco += produto.precoUnit * produto.qtd;
        }

        return qtdPreco;
    },
    calcularDesconto: function () {
        let primeiroDesconto = 0;
        let segundoDesconto = 0;
        let desconto = 0;

        let qtdTotal = this.calcularTotalDeItens();
        if(qtdTotal > 4) {
            let menorPreco = this.produtos[1].precoUnit;
            for(let item of this.produtos) {
                if(item.precoUnit < menorPreco) {
                    menorPreco = item.precoUnit;
                }
            }
            primeiroDesconto = menorPreco;
        }

        let valorTotal = this.calcularTotalAPagar();
        if(valorTotal > 10000) {
            segundoDesconto = 0.1 * valorTotal;
        }

        if(primeiroDesconto > segundoDesconto) {
            desconto = primeiroDesconto;
        } else {
            desconto = segundoDesconto;
        }


        return desconto/100;
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);


const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
console.log(carrinho.calcularDesconto());