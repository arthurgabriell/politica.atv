import { Politico } from "./models/Politico";
import { Presidente } from "./models/Presidente";
import { Governador } from "./models/Governador";
import { DeputadoEstadual } from "./models/DeputadoEstadual";
import { DeputadoFederal } from "./models/DeputadoFederal";
import { Senador } from "./models/Senador";


const presidente = new Presidente(
    "Luiz Inácio Lula da Silva",
    "PT",
    "Palácio do Planalto",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    [
        "Programa de Desenvolvimento Nacional",
        "Projeto de Infraestrutura Federal"
    ],
    [
        "Ministro da Fazenda",
        "Ministro da Justiça",
        "Ministro da Defesa"
    ]
);

const governadorPE = new Governador(
    "Raquel Lyra",
    "PSD",
    "Pernambuco",
    "Palácio do Campo das Princesas",
    "Praça da República, Recife - PE",
    42000,
    [
        "Projeto de Desenvolvimento de Pernambuco",
        "Programa Estadual de Segurança"
    ],
    [
        "Secretário de Educação",
        "Secretário de Saúde"
    ]
);

const governadorPB = new Governador(
    "João Azevêdo",
    "PSB",
    "Paraíba",
    "Palácio da Redenção",
    "Praça João Pessoa, João Pessoa - PB",
    35000,
    [
        "Projeto de Desenvolvimento da Paraíba",
        "Projeto Estadual de Infraestrutura"
    ],
    [
        "Secretário de Educação",
        "Secretário de Saúde"
    ]
);


const deputadoFederalPE1 = new DeputadoFederal(
    "André Ferreira",
    "PL",
    "Pernambuco",
    "Bancada Evangélica",
    "Câmara dos Deputados",
    "Palácio do Congresso Nacional, Brasília - DF",
    46366.19,
    [
        "Projeto de Lei sobre Segurança Pública"
    ]
);

const deputadoFederalPE2 = new DeputadoFederal(
    "Carlos Veras",
    "PT",
    "Pernambuco",
    "Bancada do PT",
    "Câmara dos Deputados",
    "Palácio do Congresso Nacional, Brasília - DF",
    46366.19,
    [
        "Projeto de Lei sobre Direitos Trabalhistas"
    ]
);

const deputadoFederalPE3 = new DeputadoFederal(
    "Felipe Carreras",
    "PSB",
    "Pernambuco",
    "Bancada do Turismo",
    "Câmara dos Deputados",
    "Palácio do Congresso Nacional, Brasília - DF",
    46366.19,
    [
        "Projeto de Desenvolvimento do Turismo"
    ]
);



const deputadoFederalPB1 = new DeputadoFederal(
    "Hugo Motta",
    "Republicanos",
    "Paraíba",
    "Bancada do Republicanos",
    "Câmara dos Deputados",
    "Palácio do Congresso Nacional, Brasília - DF",
    46366.19,
    [
        "Projeto de Desenvolvimento Regional"
    ]
);

const deputadoFederalPB2 = new DeputadoFederal(
    "Ruy Carneiro",
    "Podemos",
    "Paraíba",
    "Bancada do Podemos",
    "Câmara dos Deputados",
    "Palácio do Congresso Nacional, Brasília - DF",
    46366.19,
    [
        "Projeto de Incentivo à Saúde Pública"
    ]
);



const deputadoEstadualPE1 = new DeputadoEstadual(
    "Cayo Albino",
    "PSB",
    "Pernambuco",
    [
        "Comissão de Constituição, Legislação e Justiça",
        "Comissão de Educação"
    ],
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, 439, Recife - PE",
    30000,
    [
        "Projeto de Educação Estadual"
    ]
);

const deputadoEstadualPE2 = new DeputadoEstadual(
    "Junior Matuto",
    "PSB",
    "Pernambuco",
    [
        "Comissão de Saúde",
        "Comissão de Administração Pública"
    ],
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, 439, Recife - PE",
    30000,
    [
        "Projeto de Saúde Pública"
    ]
);

const deputadoEstadualPE3 = new DeputadoEstadual(
    "Edson Vieira",
    "União Brasil",
    "Pernambuco",
    [
        "Comissão de Desenvolvimento Econômico"
    ],
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, 439, Recife - PE",
    30000,
    [
        "Projeto de Desenvolvimento Econômico"
    ]
);



const deputadoEstadualPB1 = new DeputadoEstadual(
    "Adriano Galdino",
    "Republicanos",
    "Paraíba",
    [
        "Comissão de Constituição, Justiça e Redação"
    ],
    "Assembleia Legislativa da Paraíba",
    "Praça João Pessoa, João Pessoa - PB",
    20042,
    [
        "Projeto de Desenvolvimento Regional"
    ]
);

const deputadoEstadualPB2 = new DeputadoEstadual(
    "Inácio Falcão",
    "PCdoB",
    "Paraíba",
    [
        "Comissão de Educação"
    ],
    "Assembleia Legislativa da Paraíba",
    "Praça João Pessoa, João Pessoa - PB",
    20042,
    [
        "Projeto de Educação Pública"
    ]
);


const senadorPE1 = new Senador(
    "Humberto Costa",
    "PT",
    "Pernambuco",
    2018,
    "Senado Federal",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    [
        "Projeto de Lei sobre Saúde Pública"
    ]
);

const senadorPE2 = new Senador(
    "Teresa Leitão",
    "PT",
    "Pernambuco",
    2022,
    "Senado Federal",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    [
        "Projeto de Lei sobre Educação"
    ]
);



const senadorPB = new Senador(
    "Efraim Filho",
    "União Brasil",
    "Paraíba",
    2022,
    "Senado Federal",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    [
        "Projeto de Lei sobre Desenvolvimento Regional"
    ]
);


const politicos: Politico[] = [
    presidente,

    governadorPE,
    governadorPB,

    deputadoFederalPE1,
    deputadoFederalPE2,
    deputadoFederalPE3,

    deputadoFederalPB1,
    deputadoFederalPB2,

    deputadoEstadualPE1,
    deputadoEstadualPE2,
    deputadoEstadualPE3,

    deputadoEstadualPB1,
    deputadoEstadualPB2,

    senadorPE1,
    senadorPE2,
    senadorPB
];



console.log("========================================");
console.log("       SISTEMA DE POLÍTICOS");
console.log("========================================");

for (let politico of politicos) {

    politico.mostrarDados();

    console.log("Mandato:");
    console.log(politico.mandato());

    console.log();
}



console.log("========================================");
console.log("              AÇÕES");
console.log("========================================");

console.log("\nPRESIDENTE:");
console.log(presidente.nomearMinistro());
console.log(presidente.exonerarMinistro());
console.log(presidente.comandarForcasArmadas());
console.log(presidente.representarPais());
console.log(presidente.elaborarPPA());
console.log(presidente.elaborarLDO());
console.log(presidente.elaborarLOA());


console.log("\nGOVERNADOR:");
console.log(governadorPE.gerirPoliciaMilitar());
console.log(governadorPE.administrarRodovias());
console.log(governadorPE.coordenarEducacao());
console.log(governadorPE.coordenarSaude());
console.log(governadorPE.elaborarPPA());
console.log(governadorPE.elaborarLDO());
console.log(governadorPE.elaborarLOA());


console.log("\nDEPUTADO ESTADUAL:");
console.log(deputadoEstadualPE1.votarPPA());
console.log(deputadoEstadualPE1.votarLOA());
console.log(deputadoEstadualPE1.votarLDO());
console.log(deputadoEstadualPE1.proporEmendaConstituicao());
console.log(deputadoEstadualPE1.criarCPI());


console.log("\nDEPUTADO FEDERAL:");
console.log(deputadoFederalPE1.votarPEC());
console.log(deputadoFederalPE1.criarCPI());
console.log(deputadoFederalPE1.votarPPA());
console.log(deputadoFederalPE1.votarLDO());
console.log(deputadoFederalPE1.votarLOA());
console.log(deputadoFederalPE1.proporLeiComplementar());


console.log("\nSENADOR:");
console.log(senadorPE1.aprovarAutoridades());
console.log(senadorPE1.julgarCrimesResponsabilidade());
console.log(senadorPE1.representarEstado());

