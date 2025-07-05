import { Card, CardDescription, CardTitle } from "@/components/ui/card";

function About() {
  return (
    <div className="flex-col laptop:flex-row">
      <div className="flex-col content-center px-5 bp2:flex bp2:flex-row bp2:items-center bp2:justify-center bp3:px-40 bp4:px-80">
        <Card className="p-5">
          <CardTitle>Sobre</CardTitle>
          <CardDescription>
            Sou desenvolvedor com experiência em projetos mobile, web e backend,
            atuando com tecnologias como React, React Native, NodeJS, NestJS,
            Strapi e Elixir. Tenho histórico de contribuição em grandes empresas
            como o{" "}
            <a
              href="https://www.somagrupo.com.br/"
              target="_blank"
              className="font-semibold hover:text-red-600"
            >
              Grupo SOMA
            </a>
            , onde participei ativamente do desenvolvimento dos aplicativos{" "}
            <a
              href="https://apps.apple.com/br/app/animale-moda-feminina/id1509138635"
              target="_blank"
              className="font-semibold hover:text-red-600"
            >
              Animale
            </a>
            ,{" "}
            <a
              href="https://apps.apple.com/br/app/hering-o-b%C3%A1sico-do-brasil/id1536420324"
              target="_blank"
              className="font-semibold hover:text-red-600"
            >
              Hering
            </a>{" "}
            e SomaBox, com foco em e-commerce e soluções inovadoras para o
            varejo. Atualmente, colaboro como desenvolvedor freelancer em
            projetos frontend, e estou em constante evolução profissional,
            cursando Análise de Sistemas de Computação na Anhanguera
            Educacional, com previsão de término em 2027. Possuo também
            certificações voltadas para APIs em NodeJS e desenvolvimento Java e
            busco sempre entregar soluções práticas e eficientes, com foco em
            qualidade de código, escalabilidade e boa experiência do usuário.
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}

export { About };
