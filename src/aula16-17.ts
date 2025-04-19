class Computador{
    /**ATRIBUTOS */
    nome:string="";
    ram:number=0;
    cpu:number=0;
    ligado:boolean=false;

    /**MÉTODO CONSTRUTOR */
    constructor(nome:string,ram:number,cpu:number){
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }

}

/**INSTÂNCIAS DE OBJETOS */
const comp_1 = new Computador("PCdaNASA",64,70);
const comp_2 = new Computador("Baratão",8,10);
const comp_3 = new Computador("GAMER",32,20);

const array_de_obj = [comp_1,comp_2,comp_3].forEach((e)=>console.log(e))

