"use strict";
var matematica;
(function (matematica) {
    function somar(a, b) {
        return a + b;
    }
    matematica.somar = somar;
    function subtrair(a, b) {
        return a - b;
    }
    matematica.subtrair = subtrair;
    function multiplicar(a, b) {
        return a * b;
    }
    matematica.multiplicar = multiplicar;
    function dividir(a, b) {
        return a / b;
    }
    matematica.dividir = dividir;
})(matematica || (matematica = {}));
let n1 = 50;
let n2 = 20;
console.log(matematica.somar(n1, n2));
console.log(matematica.subtrair(n1, n2));
console.log(matematica.multiplicar(n1, n2));
console.log(matematica.dividir(n1, n2));
