"use strict";
/**==================================================== */
function login(user, pass) {
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass} \n`);
}
login("joão", "12345");
/**==================================================== */
/**==================================================== */
/**PARÂMETRO OPCIONAL */
function novoUser(user, pass, nome) {
    return `User: ${user} \nPass: ${pass} \nNome: ${nome}`;
}
let usuario1 = novoUser("Júlia", "123");
console.log(usuario1);
/**==================================================== */
/**==================================================== */
/**PARÂMETROS COM VALORES ATRIBUIDOS */
function f_soma(n1 = 0, n2 = 0) {
    let r = n1 + n2;
    return r;
}
let res = f_soma(10, 10);
let s_res = f_soma(10, 30).toString();
console.log(res);
console.log(s_res);
/**==================================================== */ 
