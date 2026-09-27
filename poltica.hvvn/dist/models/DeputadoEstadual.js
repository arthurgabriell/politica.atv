"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeputadoEstadual = void 0;
const Politico_1 = require("./Politico");
class DeputadoEstadual extends Politico_1.Politico {
    constructor(nome, partido, estado, comissoes, localTrabalho, enderecoTrabalho, remuneracao, projetos) {
        super(nome, partido, "Estadual", "Legislativo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        if (comissoes.length < 1) {
            throw new Error("O deputado estadual deve participar de pelo menos uma comissão.");
        }
        this.estado = estado;
        this.comissoes = comissoes;
    }
    mandato() {
        return "Legisla sobre assuntos de interesse do estado e fiscaliza o governador.";
    }
    votarPPA() {
        return "Votar o PPA do estado de " + this.estado + ".";
    }
    votarLOA() {
        return "Votar a LOA do estado de " + this.estado + ".";
    }
    votarLDO() {
        return "Votar a LDO do estado de " + this.estado + ".";
    }
    proporEmendaConstituicao() {
        return "Propor emendas à Constituição Estadual.";
    }
    criarCPI() {
        return "Criar uma CPI estadual.";
    }
    getEstado() {
        return this.estado;
    }
    getComissoes() {
        return this.comissoes;
    }
}
exports.DeputadoEstadual = DeputadoEstadual;
