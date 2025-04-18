"use strict";
let dados = {
    nome_s: "Carol",
    idade_i: 30,
    status_s: "A",
    saudacao: (p) => {
        console.log(`olá ${p}`);
    },
};
console.log(dados); //{ nome: 'Carol', idade: 30, staus: 'A' }
dados.saudacao("ygor henrique"); //olá ygor henrique
