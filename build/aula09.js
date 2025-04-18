"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
console.log(dias.domingo); //0
console.log(dias["domingo"]); //0
console.log(dias[0]); /*obtendo a chave do valor 0 que é: domingo*/
const d = new Date();
console.log(d.getDate());
console.log(dias[d.getDay()]);
