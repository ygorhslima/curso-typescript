"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumero();
        this.titular = titular;
    }
    gerarNumero() {
        return Math.floor(Math.random() * 100000);
    }
}
class ContaPessoaFisica extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
}
class ContaPessoaJuridica extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
}
const conta1 = new Conta("joão");
const conta2 = new ContaPessoaFisica(111222, "carlos");
const conta3 = new ContaPessoaJuridica(222333, "Luana");
console.log(conta1);
console.log(conta2);
console.log(conta3);
