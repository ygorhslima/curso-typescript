namespace matematica{
    export function somar(a:number, b:number):number{
        return a+b;
    }
    export function subtrair(a:number, b:number):number{
        return a-b;
    }
    export function multiplicar(a:number, b:number):number{
        return a*b;
    }
    export function dividir(a:number, b:number):number{
        return a/b;
    }
}

let n1:number = 50;
let n2:number = 20;

console.log(matematica.somar(n1,n2));
console.log(matematica.subtrair(n1,n2));
console.log(matematica.multiplicar(n1,n2));
console.log(matematica.dividir(n1,n2));