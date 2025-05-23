import Image from "next/image";
import avatar from '@/assets/fabiano.jpg'

function Header() {
  return (
    <div className="flex-col laptop:flex-row bg-amber-300 bp1:bg-green-700 bp2:bg-red-400 bp3:bg-[#7159c1] bp4:bg-blue-600">
      <div className="flex-col content-center py-5 bp2:flex bp2:flex-row bp2:items-center bp2:justify-center">
        <div className="flex justify-center">
          <Image src={avatar} alt="Fabiano" width={120} height={120} className="border-4 bg-blue-600 rounded-[50%]"/>
        </div>
        <div className="flex-col my-2">
          <h1 className="flex justify-center text-2xl font-semibold bp2:ml-6 bp2:justify-start bp2:text-3xl">Fabiano Santos Ramos</h1>
          <p className="flex justify-center text-sm bp2:ml-6 bp2:justify-start bp2:text-[16px]">React | React Native | NodeJS | Elixir</p>
        </div>
      </div>
    </div>
  );
}

export { Header };
