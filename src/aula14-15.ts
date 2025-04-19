const teste=(txt:string="..."):void => {
    console.log(txt);
}
teste("Olá mundo");
teste();



const fsoma2=(n:number[]):number =>{
    let s:number = 0;
    n.forEach((e:number) => s+=e);
    return s;
}
let n_valores:number[] = [10,20,30,40];
console.log(fsoma2(n_valores));




/**UTILIZANDO O OPERADOR SPREAD */
function fsoma3(...n2:number[]){
    let s:number= 0;
    n2.forEach((en)=>{
        s+=en;
    })
    return s;
}

console.log(fsoma3(10,20,30,40,50,60,70,80,90,100))
