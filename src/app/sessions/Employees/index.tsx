import { Card, CardDescription, CardTitle } from "@/components/ui/card";

function Employees() {
  const employees = [
    {
      name: "TriadeTech Análise e Desenvolvimento de Sistemas LTDA",
      period: "jan/2023...",
      func: "Fullstack Developer",
      resume:
        "Atuando como freelancer em projetos pontuais de frontend para o cliente Rubbercon Solutions, JMG Acessoria, Catedral Metropolitana do Rio de Janeiro.",
    },
    {
      name: "Grupo SOMA de Moda LTDA",
      period: "abr/2021 - dez/2022",
      func: "Desenvolvedor Mobile",
      resume:
        "Atuei no squad do App mobile Animale, utilizando React Native, desenvolvendo novas funcionalidades e mantendo o versionamento de código. Atuei também na passagem de conhecimento do aplicativo mobile Hering, recém adquirido pelo Grupo Soma na época. Esses dois aplicativos tem todo o fluxo de e-commerce utilizando como gerenciador de conteúdo a plataforma VTEX, com estado global utilizando arquitetura Flux com a biblioteca/framework Redux. Finalizando, atuei na criação e desenvolvimento do aplicativo SomaBox, que se trata de um PDV na palma da mão onde o vendedor das lojas das marcas do Grupo efetua vendas, verifica status de produção, venda, comissão e etc... O mesmo utiliza react native e gerenciamento de estado com redux.",
    },
    {
      name: "Corebiz",
      period: "jan/2021 - mai/2021",
      func: "Desenvolvedor Web",
      resume:
        "Na CoreBiz pude conhecer a plataforma VTEX (Legado e IO), dando manutenção nos frontends dos seguintes clientes: Carrefour, Maria Filó, Rede Big - atualmente parte do Grupo Carrefour que faz parte de um conjunto de redes que incluem também o Big Bompreço, Super Bompreço, Nacional, Maxxi Atacado, Sam's Club e TodoDia. Todos são geridos em e-commerce pela VTEX",
    },
    {
      name: "K2 Partnering Solutions LTDA",
      period: "out/2020 - mar/2021",
      func: "Desenvolvedor Frontend",
      resume:
        "Trabalhando como terceirizado da K2 no desenvolvimento do Sistema BoxUp,para o cliente Votorantim. O sistema BoxUp consiste em uma ferramenta para colaboradores registrarem suas idéias para que a equipe de Inovação, após avaliação, as implementassem nas empresas do Grupo. A plataforma foi desenvolvida com ReactJS no frontend e NestJS substituindo o Strapi V4 (backend anterior)",
    },
    {
      name: "Agência Frog",
      period: "jan/2019 - jul/2020",
      func: "Desenvolvedor Frontend",
      resume:
        "Desenvolvimento de sites e manutençãoi de sites existentes utilizando a plataforma CMS Wordpress. Atuei em clientes grandes, tais como: Oi (Portal Oi Futuro), Comgás, Unisuam, Juçaí, dentre outros.",
    },
  ];
  return (
    <div className="flex-col laptop:flex-row pt-4 pb-4">
      <div className="flex-col content-center px-5 bp2:flex bp2:flex-row bp2:items-center bp2:justify-center bp3:px-40 bp4:px-80">
        <Card className="p-5">
          <CardTitle>Histórico Profissional</CardTitle>
          {employees.map((employer) => (
            <div key={employer.name}>
              <CardDescription className="font-bold mb-0.5 hover:text-blue-600">
                {employer.name}
              </CardDescription>
              <CardDescription className="mb-0.5">
                Período: {employer.period}
              </CardDescription>
              <CardDescription className="mb-0.5">
                Função: {employer.func}
              </CardDescription>
              <CardDescription className="mb-0.5 hover:text-gray-200">
                Principais atividades: {employer.resume}
              </CardDescription>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

export { Employees };
