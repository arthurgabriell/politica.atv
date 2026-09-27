"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Senador = void 0;
const Politico_1 = require("./Politico");
class Senador extends Politico_1.Politico {
    constructor(nome, partido, estado, anoEleicao, localTrabalho, enderecoTrabalho, remuneracao, projetos) {
        super(nome, partido, "Federal", "Legislativo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }
    mandato() {
        return "Sabatinam autoridades, legislam sobre leis federais e autorizam operações financeiras externas.";
    }
    aprovarAutoridades() {
        return "Aprovar autoridades de alto escalão.";
    }
    julgarCrimesResponsabilidade() {
        return "Julgar crimes de responsabilidade.";
    }
    representarEstado() {
        return "Representar os interesses do estado de " + this.estado + ".";
    }
    getEstado() {
        return this.estado;
    }
    getAnoEleicao() {
        return this.anoEleicao;
    }
}
exports.Senador = Senador;
