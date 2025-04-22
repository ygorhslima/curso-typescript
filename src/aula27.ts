interface curso{
    titulo:string;
    descricao:string;
    aula:number;
    maxAlunos?:number;
    iniciarCurso():void;
}
/**É POSSÍVEL EXTENDER OUTRA INTERFACE */
interface cursoProg extends curso{
    linguagem:string;
}
/** 
let curso1:curso;
let curso2:curso;
let curso3:curso;

EM OBJETOS

curso1={titulo:"Typescript",descricao:"Curso de TypeScript",aula:100,maxAlunos:50}
curso2={titulo:"JavaScript",descricao:"Curso de JavaScript",aula:200,maxAlunos:80}
curso3={titulo:"C++",descricao:"Curso de C++",aula:150,maxAlunos:100}

console.log(curso1)
*/

/**EM PROGRAMAÇÃO ORIENTADA A OBJETO */
class Cursos implements curso{
    titulo:string;
    descricao: string;
    aula: number;
    maxAlunos: number;
    
    constructor(titulo:string,descricao:string,aula:number,maxAlunos:number){
        this.titulo = titulo;
        this.descricao = descricao;
        this.aula = aula;
        this.maxAlunos = maxAlunos;
    }

    iniciarCurso(): void {
        console.log("iniciando um novo curso");
    }
}