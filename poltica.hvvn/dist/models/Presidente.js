"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presidente = void 0;
const Politico_1 = require("./Politico");
class Presidente extends Politico_1.Politico {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, ministros) {
        super(nome, partido, "Federal", "Executivo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.ministros = ministros;
    }
    mandato() {
        return "Propõe, sanciona e veta leis e edita medidas provisórias.";
    }
    nomearMinistro() {
        return "Nomear Ministros de Estado.";
    }
    exonerarMinistro() {
        return "Exonerar Ministros de Estado.";
    }
    comandarForcasArmadas() {
        return "Comandar as Forças Armadas.";
    }
    representarPais() {
        return "Representar o país em eventos internacionais.";
    }
    elaborarPPA() {
        return "Elaborar e enviar ao Congresso o Plano Plurianual nacional (PPA).";
    }
    elaborarLDO() {
        return "Elaborar e enviar ao Congresso a Lei de Diretrizes Orçamentárias nacional (LDO).";
    }
    elaborarLOA() {
        return "Elaborar e enviar ao Congresso a proposta de Lei Orçamentária Anual nacional (LOA).";
    }
    getMinistros() {
        return this.ministros;
    }
}
exports.Presidente = Presidente;
