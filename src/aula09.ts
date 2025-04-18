enum dias {
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
}
console.log(dias.domingo); //0
console.log(dias["domingo"]); //0
console.log(dias[0]) /*obtendo a chave do valor 0 que é: domingo*/
const d=new Date();
console.log(d.getDate());
console.log(dias[d.getDay()]);