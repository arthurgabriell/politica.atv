import { Politico } from "./Politico";

export class Governador extends Politico {

    private estado: string;
    private secretarios: string[];

    constructor(
        nome: string,
        partido: string,
        estado: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        secretarios: string[]
    ) {
        super(
            nome,
            partido,
            "Estadual",
            "Executivo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.estado = estado;
        this.secretarios = secretarios;
    }

    public mandato(): string {
        return "Sanciona leis estaduais, veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.";
    }

    public gerirPoliciaMilitar(): string {
        return "Gerir a Polícia Militar do estado de " + this.estado + ".";
    }

    public administrarRodovias(): string {
        return "Administrar as rodovias estaduais de " + this.estado + ".";
    }

    public coordenarEducacao(): string {
        return "Coordenar a educação do estado de " + this.estado + ".";
    }

    public coordenarSaude(): string {
        return "Coordenar a saúde do estado de " + this.estado + ".";
    }

    public elaborarPPA(): string {
        return "Elaborar e enviar à Assembleia Legislativa o PPA estadual.";
    }

    public elaborarLDO(): string {
        return "Elaborar e enviar à Assembleia Legislativa a LDO estadual.";
    }

    public elaborarLOA(): string {
        return "Elaborar e enviar à Assembleia Legislativa a LOA estadual.";
    }

    public getEstado(): string {
        return this.estado;
    }

    public getSecretarios(): string[] {
        return this.secretarios;
    }
}
