"use strict";
class Conta {
    /**DEIXANDO O MÉTODO DE NÚMERO SEGURO, ATÉ PARA AS CLASSES FILHAS, UTILIZANDO A PALAVRA RESERVADA readonly(SOMENTE LEITURA) */
    numero;
    titular;
    saldo_conta;
    constructor(titular) {
        this.numero = this.gerarNumero();
        this.titular = titular;
        this.saldo_conta = 0;
    }
    getTitular() {
        return this.titular;
    }
    setTitular(titular) {
        this.titular = titular;
    }
    getSaldo_conta() {
        return this.saldo_conta;
    }
    setSaldo_conta(saldo_conta) {
        this.saldo_conta = saldo_conta;
    }
    gerarNumero() {
        return Math.floor(Math.random() * 100000);
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }
    saldo() {
        return this.saldo_conta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log("valor inválido");
            return;
        }
        this.setSaldo_conta(this.getSaldo_conta() + valor);
    }
    saque(valor) {
        if (valor < 0) {
            console.log("valor inválido");
            return;
        }
        if (valor <= this.getSaldo_conta()) {
            this.setSaldo_conta(this.getSaldo_conta() - valor);
        }
        else {
            console.log("saldo insuficiente");
        }
    }
}
class ContaPessoaFisica extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log("====PESSOA FÍSICA====");
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log('--------------------');
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log(`valor de saque muito grande para este tpo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPessoaJuridica extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log("====PESSOA JURÍDICA====");
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log('--------------------');
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log(`valor de saque muito grande para este tpo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
}
const conta2 = new ContaPessoaFisica(1111, "joao");
const conta3 = new ContaPessoaJuridica(222333, "Luana");
conta2.info();
conta3.info();
conta2.deposito(400);
console.log(conta2.saldo());
conta2.saque(100);
console.log(conta2.saldo());
