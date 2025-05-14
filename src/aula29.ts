function identidade<T>(valor: T):T{
    return valor;
}

console.log(identidade<string>("olá"));
console.log(identidade<number>(100));
console.log(identidade<number>(10.8));
console.log(identidade<boolean>(true));