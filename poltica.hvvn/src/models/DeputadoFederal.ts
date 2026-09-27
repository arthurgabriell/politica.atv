import { Politico } from "./Politico";

export class DeputadoFederal extends Politico {

    private estado: string;
    private bancada: string;

    constructor(
        nome: string,
        partido: string,
        estado: string,
        bancada: string,
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
        this.bancada = bancada;
    }

    public mandato(): string {
        return "Legisla sobre assuntos federais e fiscaliza o Presidente da República.";
    }

    public votarPEC(): string {
        return "Votar PECs (Projetos de Emenda à Constituição Federal).";
    }

    public criarCPI(): string {
        return "Criar uma CPI nacional.";
    }

    public votarPPA(): string {
        return "Votar o PPA nacional.";
    }

    public votarLDO(): string {
        return "Votar a LDO nacional.";
    }

    public votarLOA(): string {
        return "Votar a LOA nacional.";
    }

    public proporLeiComplementar(): string {
        return "Propor leis complementares.";
    }

    public getEstado(): string {
        return this.estado;
    }

    public getBancada(): string {
        return this.bancada;
    }
}
