import { Politico } from "./Politico";

export class Senador extends Politico {

    private estado: string;
    private anoEleicao: number;

    constructor(
        nome: string,
        partido: string,
        estado: string,
        anoEleicao: number,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[]
    ) {
        super(
            nome,
            partido,
            "Federal",
            "Legislativo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }

    public mandato(): string {
        return "Sabatinam autoridades, legislam sobre leis federais e autorizam operações financeiras externas.";
    }

    public aprovarAutoridades(): string {
        return "Aprovar autoridades de alto escalão.";
    }

    public julgarCrimesResponsabilidade(): string {
        return "Julgar crimes de responsabilidade.";
    }

    public representarEstado(): string {
        return "Representar os interesses do estado de " + this.estado + ".";
    }

    public getEstado(): string {
        return this.estado;
    }

    public getAnoEleicao(): number {
        return this.anoEleicao;
    }
}
