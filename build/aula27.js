"use strict";
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
class Cursos {
    titulo;
    descricao;
    aula;
    maxAlunos;
    constructor(titulo, descricao, aula, maxAlunos) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.aula = aula;
        this.maxAlunos = maxAlunos;
    }
    iniciarCurso() {
        console.log("iniciando um novo curso");
    }
}
