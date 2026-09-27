import { Politico } from "./Politico";

export class DeputadoEstadual extends Politico {

    private estado: string;
    private comissoes: string[];

    constructor(
        nome: string,
        partido: string,
        estado: string,
        comissoes: string[],
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[]
    ) {
        super(
            nome,
            partido,
            "Estadual",
            "Legislativo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        if (comissoes.length < 1) {
            throw new Error(
                "O deputado estadual deve participar de pelo menos uma comissão."
            );
        }

        this.estado = estado;
        this.comissoes = comissoes;
    }

    public mandato(): string {
        return "Legisla sobre assuntos de interesse do estado e fiscaliza o governador.";
    }

    public votarPPA(): string {
        return "Votar o PPA do estado de " + this.estado + ".";
    }

    public votarLOA(): string {
        return "Votar a LOA do estado de " + this.estado + ".";
    }

    public votarLDO(): string {
        return "Votar a LDO do estado de " + this.estado + ".";
    }

    public proporEmendaConstituicao(): string {
        return "Propor emendas à Constituição Estadual.";
    }

    public criarCPI(): string {
        return "Criar uma CPI estadual.";
    }

    public getEstado(): string {
        return this.estado;
    }

    public getComissoes(): string[] {
        return this.comissoes;
    }
}
