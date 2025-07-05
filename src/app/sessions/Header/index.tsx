import Image from "next/image";
import avatar from "@/assets/fabiano.jpg";
import { ModeToggle } from "../ThemeSelect";

function Header() {
  return (
    <div className="flex-col laptop:flex-row">
      <div className="absolute right-3.5 top-3.5">
        <ModeToggle />
      </div>
      <div className="flex-col content-center py-5 bp2:flex bp2:flex-row bp2:items-center bp2:justify-center">
        <div className="flex justify-center">
          <Image
            src={avatar}
            alt="Fabiano"
            width={120}
            height={120}
            className="border-4 bg-blue-600 rounded-[50%]"
          />
        </div>
        <div className="flex-col my-2">
          <h1 className="flex justify-center text-2xl font-semibold bp2:ml-6 bp2:justify-start bp2:text-3xl">
            Fabiano Santos Ramos
          </h1>
          <p className="flex justify-center text-sm bp2:ml-6 bp2:justify-start bp2:text-[16px]">
            React | React Native | NodeJS | Elixir
          </p>
          <p className="flex justify-center text-sm bp2:ml-6 bp2:justify-start bp2:text-[16px]">
            <a
              href="https://wa.me/5521976722755"
              target="_blank"
              className="hover:text-blue-600"
            >
              (21)976722755
            </a>
            |
            <a
              href="mailto:fabianosantosramos1978@gmail.com"
              className="hover:text-blue-600"
            >
              fabianosantosramos1978@gmail.com
            </a>
            |{" "}
            <a
              href="https://www.linkedin.com/in/fabiano-ramos-dev/"
              target="_blank"
              className="hover:text-blue-600"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export { Header };
