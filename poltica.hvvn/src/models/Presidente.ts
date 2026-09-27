import { Politico } from "./Politico";

export class Presidente extends Politico {

    private ministros: string[];

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        ministros: string[]
    ) {
        super(
            nome,
            partido,
            "Federal",
            "Executivo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.ministros = ministros;
    }

    public mandato(): string {
        return "Propõe, sanciona e veta leis e edita medidas provisórias.";
    }

    public nomearMinistro(): string {
        return "Nomear Ministros de Estado.";
    }

    public exonerarMinistro(): string {
        return "Exonerar Ministros de Estado.";
    }

    public comandarForcasArmadas(): string {
        return "Comandar as Forças Armadas.";
    }

    public representarPais(): string {
        return "Representar o país em eventos internacionais.";
    }

    public elaborarPPA(): string {
        return "Elaborar e enviar ao Congresso o Plano Plurianual nacional (PPA).";
    }

    public elaborarLDO(): string {
        return "Elaborar e enviar ao Congresso a Lei de Diretrizes Orçamentárias nacional (LDO).";
    }

    public elaborarLOA(): string {
        return "Elaborar e enviar ao Congresso a proposta de Lei Orçamentária Anual nacional (LOA).";
    }

    public getMinistros(): string[] {
        return this.ministros;
    }
}
