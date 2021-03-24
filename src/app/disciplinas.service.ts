import { Injectable } from '@angular/core';

interface Disciplina {
  title: string;
}

@Injectable()
export class DisciplinasService {
  lista: Array<Disciplina> = [];
  disciplina: Array<string> = 
  [
    "Negócios e Marketing e Eletrônicos", 
    "Desenvolvimento para Servidores II",
    "Inglês V",
    "Projeto de Prototipagem e Testes de Usabilidade",
    "Desenvolvimento para Dispositivos Móveis I",
    "Tópicos Especiais em Sistemas para Internet II",
    "Projeto de Trabalho de Graduação em Sistemas para Internet I"
  ]


  constructor() { }

  getDisciplina() {
    return this.disciplina;
  }

  removeDisciplina(index: number) {
    this.disciplina.splice(index, 1);
  }

  getLista() {
    return this.lista;
  }

  add(title: string) {
    this.lista.push({ title });
  }

  remove(index: number) {
    this.lista.splice(index, 1);
  }

}