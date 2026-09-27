"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeputadoFederal = void 0;
const Politico_1 = require("./Politico");
class DeputadoFederal extends Politico_1.Politico {
    constructor(nome, partido, estado, bancada, localTrabalho, enderecoTrabalho, remuneracao, projetos) {
        super(nome, partido, "Federal", "Legislativo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.bancada = bancada;
    }
    mandato() {
        return "Legisla sobre assuntos federais e fiscaliza o Presidente da República.";
    }
    votarPEC() {
        return "Votar PECs (Projetos de Emenda à Constituição Federal).";
    }
    criarCPI() {
        return "Criar uma CPI nacional.";
    }
    votarPPA() {
        return "Votar o PPA nacional.";
    }
    votarLDO() {
        return "Votar a LDO nacional.";
    }
    votarLOA() {
        return "Votar a LOA nacional.";
    }
    proporLeiComplementar() {
        return "Propor leis complementares.";
    }
    getEstado() {
        return this.estado;
    }
    getBancada() {
        return this.bancada;
    }
}
exports.DeputadoFederal = DeputadoFederal;
