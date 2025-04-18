
let numeros:Array<number> = [30,40,50,60];
let numeros2:number[]=[40,50,60,70,80];

numeros.push(60);
numeros.unshift(100);
console.log(numeros);

/**Readonly array: leitura de um array somente, isto é, um array cujo elemento não são alteráveis, para permanecer imutável */
let numeros_readonly:ReadonlyArray<number> = [100,200,300];
console.log(numeros_readonly);
