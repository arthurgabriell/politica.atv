"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Politico = void 0;
class Politico {
    constructor(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }
    getNome() {
        return this.nome;
    }
    getPartido() {
        return this.partido;
    }
    getEsfera() {
        return this.esfera;
    }
    getPoder() {
        return this.poder;
    }
    getLocalTrabalho() {
        return this.localTrabalho;
    }
    getEnderecoTrabalho() {
        return this.enderecoTrabalho;
    }
    getRemuneracao() {
        return this.remuneracao;
    }
    getProjetos() {
        return this.projetos;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setPartido(partido) {
        this.partido = partido;
    }
    setRemuneracao(remuneracao) {
        this.remuneracao = remuneracao;
    }
    adicionarProjeto(projeto) {
        this.projetos.push(projeto);
    }
    mostrarDados() {
        console.log("----------------------------------------");
        console.log("Nome: " + this.nome);
        console.log("Partido: " + this.partido);
        console.log("Esfera: " + this.esfera);
        console.log("Poder: " + this.poder);
        console.log("Local de trabalho: " + this.localTrabalho);
        console.log("Endereço: " + this.enderecoTrabalho);
        console.log("Remuneração: R$ " + this.remuneracao);
        console.log("Projetos:");
        for (let projeto of this.projetos) {
            console.log("- " + projeto);
        }
        console.log("----------------------------------------");
    }
}
exports.Politico = Politico;
