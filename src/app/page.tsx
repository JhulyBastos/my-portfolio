import { skills } from "@/Data/skills";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col bg-dark-10">
      {/* parte de cima */}
      <header className="bg-dark-20 flex justify-between items-center px-80 py-6">
        <h1 className="text-brand-color text-2xl">{`<Jhuly Bastos/>`}</h1>
        <nav>
          <ol className="flex justify-center items-center gap-7">
            <li>Inicio</li>
            <li>Sobre mim</li>
            <li>Projetos</li>
            <li>Serviços</li>
            <li>Habilidades</li>
          </ol>
        </nav>
      </header>
      {/* parte de cima acaba aq */}

      {/* meio */}
      <div className="flex items-center gap-48">
        <div className="flex flex-col justify-star px-80 py-24 gap-1">
          <p>Olá, eu sou</p>
          <h1 className="text-5xl text-brand-color">Jhuly Bastos</h1>
          <p className="mt-4">Desenvolvedora Front-end e Designer</p>
          <div className="mt-4 w-[193px] h-[37px] flex items-center justify-center bg-brand-color text-dark-10 font-semibold text-sm rounded  hover:scale-105 duration-300">
            <a href="/assets/my-document/curriculo.pdf" target="_blank">
              <Button>Baixar currículo</Button>
            </a>
          </div>
        </div>
        <div className="mt-4  hover:scale-105 duration-300">
          <a href="https://github.com/JhulyBastos" target="_blank">
            <img
              className="w-[400px] h-[400px] rounded-full border-brand-color border-4 p-2 mt-12"
              src="/assets/imagens/perfil.jpg"
              alt="Imagem de perfil"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-2xl text-brand-color">Sobre mim</h1>
        <p className="w-1/2 text-[16px] text-center mt-5">
          Entusiasta da tecnologia, com foco no desenvolvimento front-end, busco
          aprimorar constantemente minhas habilidades para oferecer experiências
          digitais envolventes e intuitivas. Sou graduada em Design gráfico e
          graduanda em Análise e desenvolvimento de sistemas.
        </p>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-brand-color mt-16">Habilidades</h1>
          <div className="">
            <div className="grid grid-cols-7 place-items-cente py-8 gap-4">
              {skills.map((skill) => (
                <Card skills={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
