"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Governador = void 0;
const Politico_1 = require("./Politico");
class Governador extends Politico_1.Politico {
    constructor(nome, partido, estado, localTrabalho, enderecoTrabalho, remuneracao, projetos, secretarios) {
        super(nome, partido, "Estadual", "Executivo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.secretarios = secretarios;
    }
    mandato() {
        return "Sanciona leis estaduais, veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.";
    }
    gerirPoliciaMilitar() {
        return "Gerir a Polícia Militar do estado de " + this.estado + ".";
    }
    administrarRodovias() {
        return "Administrar as rodovias estaduais de " + this.estado + ".";
    }
    coordenarEducacao() {
        return "Coordenar a educação do estado de " + this.estado + ".";
    }
    coordenarSaude() {
        return "Coordenar a saúde do estado de " + this.estado + ".";
    }
    elaborarPPA() {
        return "Elaborar e enviar à Assembleia Legislativa o PPA estadual.";
    }
    elaborarLDO() {
        return "Elaborar e enviar à Assembleia Legislativa a LDO estadual.";
    }
    elaborarLOA() {
        return "Elaborar e enviar à Assembleia Legislativa a LOA estadual.";
    }
    getEstado() {
        return this.estado;
    }
    getSecretarios() {
        return this.secretarios;
    }
}
exports.Governador = Governador;
