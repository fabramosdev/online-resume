import { CardDescription } from "@/components/ui/card";

function Footer() {
  return (
    <div className="text-center my-6">
      <CardDescription>
        Desenvolvido em{" "}
        <a
          className="hover:text-blue-600"
          href="https://nextjs.org/"
          target="_blank"
        >
          NextJS
        </a>{" "}
        por Fabiano Ramos
      </CardDescription>
    </div>
  );
}

export { Footer };
