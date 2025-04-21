"use strict";
class Computador {
    /**MODIFICADOR DE ACESSO ATRIBUTOS = VALOR */
    nome = "";
    ram = 0;
    cpu = 0;
    ligado = false;
    /**MÉTODO CONSTRUTOR */
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
    /*MÉTODO*/
    info() {
        console.log(`Nome.....:${this.nome}`);
        console.log(`Ram......:${this.ram}`);
        console.log(`cpu......:${this.cpu}`);
        console.log(`ligado...:${this.ligado ? "SIM" : "NÃO"}`);
        console.log("---------------------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upgradeRam(qtde) {
        this.ram = qtde;
        if (this.ram <= 0) {
            console.log(`ERRO! Quantidade ${this.getRam()} para o computador ${this.getNome()} está abaixo ou igual a 0, (considere 2 de RAM no mínimo `);
            this.setRam(2);
        }
    }
    getNome() {
        return this.nome;
    }
    setNome(n) {
        this.nome = n;
    }
    getRam() {
        return this.ram;
    }
    setRam(value) {
        this.ram = value;
    }
    getCpu() {
        return this.cpu;
    }
    setCpu(value) {
        this.cpu = value;
    }
    getLigado() {
        return this.ligado;
    }
    setLigado(value) {
        this.ligado = value;
    }
}
/**INSTÂNCIAS DE OBJETOS */
const comp_1 = new Computador("PCdaNASA", 64, 70);
const comp_2 = new Computador("Baratão", 8, 10);
const comp_3 = new Computador("GAMER", 32, 20);
comp_1.setLigado(true);
comp_1.upgradeRam(-100);
/**obtendo o método da classe Computador */
comp_1.info();
comp_2.info();
comp_3.info();
