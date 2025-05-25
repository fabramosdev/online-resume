import { Card, CardDescription, CardTitle } from "@/components/ui/card";

function Skills() {
  const skills = [
    { name: "Desenvolvimento de interfaces modernas com React e React Native" },
    { name: "Criação e manutenção de APIs com NodeJS e NestJS" },
    { name: "APIs em php, tais como CakePhp/Laravel" },
    { name: "Fontends com CMS Wordpress Integração com plataformas como VTEX" },
    { name: "Uso de Redux, Flux e gerenciamento de estado" },
    { name: "Experiência em ambientes ágeis e voltados ao produto" },
  ];

  return (
    <div className="flex-col pt-4">
      <div className="flex-col content-center px-5 bp2:flex bp2:flex-row bp2:items-center bp2:justify-center bp3:px-40 bp4:px-80">
        <Card className="p-5 w-full">
          <CardTitle>Competências</CardTitle>
          <CardDescription>
            {skills.map((skill) => (
              <div key={skill.name}>
                <span className="text-sm">- {skill.name}</span>
              </div>
            ))}
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}

export { Skills };
