export abstract class Politico {
    private nome: string;
    private partido: string;
    private esfera: string;
    private poder: string;
    private localTrabalho: string;
    private enderecoTrabalho: string;
    private remuneracao: number;
    private projetos: string[];

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[]
    ) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPartido(): string {
        return this.partido;
    }

    public getEsfera(): string {
        return this.esfera;
    }

    public getPoder(): string {
        return this.poder;
    }

    public getLocalTrabalho(): string {
        return this.localTrabalho;
    }

    public getEnderecoTrabalho(): string {
        return this.enderecoTrabalho;
    }

    public getRemuneracao(): number {
        return this.remuneracao;
    }

    public getProjetos(): string[] {
        return this.projetos;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setPartido(partido: string): void {
        this.partido = partido;
    }

    public setRemuneracao(remuneracao: number): void {
        this.remuneracao = remuneracao;
    }

    public adicionarProjeto(projeto: string): void {
        this.projetos.push(projeto);
    }

    public abstract mandato(): string;

    public mostrarDados(): void {
        console.log("----------------------------------------");
        console.log("Nome: " + this.nome);
        console.log("Partido: " + this.partido);
        console.log("Esfera: " + this.esfera);
        console.log("Poder: " + this.poder);
        console.log("Local de trabalho: " + this.localTrabalho);
        console.log("Endereço: " + this.enderecoTrabalho);
        console.log("Remuneração: R$ " + this.remuneracao);

        console.log("Projetos:");

        for (let projeto of this.projetos) {
            console.log("- " + projeto);
        }

        console.log("----------------------------------------");
    }
}
