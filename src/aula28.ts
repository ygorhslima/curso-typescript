function f_teste100<T>(v:T):T{
    return v
}
console.log(f_teste100<number>(10));
console.log(f_teste100<string>("OLÁ"));
console.log(f_teste100<boolean>(true));