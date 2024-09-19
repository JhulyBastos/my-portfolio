import { projects } from "@/Data/projects";
import { skills } from "@/Data/skills";
import { Button } from "@/components/Button";
import { Card, CardProjects } from "@/components/Card";

export default function Home() {
  return (
    <div className=" flex flex-1 flex-col bg-dark-10">
      {/* parte de cima */}
      <header
        id="inicio"
        className="bg-dark-20 justify-between flex items-center lg:px-20 sm:px-10 py-6 sm:gap-2"
      >
        <div>
          <h1 className="text-brand-color xl:text-2xl sm:text-xl">{`<Jhuly Bastos/>`}</h1>
        </div>
        <div>
          <nav className="lg:text-base sm:text-sm">
            <ol className="flex justify-center items-center gap-7">
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#sobre-mim">Sobre mim</a>
              </li>

              <li>
                <a href="#habilidades">Habilidades</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
            </ol>
          </nav>
        </div>
      </header>
      {/* parte de cima acaba aq */}

      {/* meio */}
      <div className=" flex items-center justify-between w-full max-w-[1300px] mx-auto xl:px-20 md:px-14 sm:px-10   ">
        <div className="flex flex-col justify-start gap-1 max-w-full max-h-full ">
          <div>
            <p>Olá, eu sou</p>
            <h1 className="xl:text-5xl md:text-4xl sm:text-3xl text-brand-color">
              Jhuly Bastos
            </h1>
            <p className="mt-4 ">Desenvolvedora Front-end e Designer</p>
          </div>
          <div className="flex gap-2 ">
            <a
              href="https://social-tree-gqhqp38yd-jhulybastos.vercel.app/"
              target="_blank"
            >
              <Button>Contato</Button>
            </a>
            <a href="/assets/my-document/curriculo.pdf" target="_blank">
              <Button>Baixar currículo</Button>
            </a>
          </div>
        </div>
        <div className="mt-4  hover:scale-105 duration-300 ">
          <a href="https://github.com/JhulyBastos" target="_blank">
            <img
              className=" lg:w-[400px] lg:h-[400px] md:w-[320px] md:h-[320px] sm:w-[250px] sm:h-[250px]  w-[200px] h-[200px] rounded-full border-brand-color border-4 p-2 mt-12"
              src="/assets/imagens/perfil.jpg"
              alt="Imagem de perfil"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center mt-16">
        <h1 id="sobre-mim" className="text-2xl text-brand-color">
          Sobre mim
        </h1>
        <p className="lg:w-1/2 md:w-4/5 sm:w-4/5 text-[16px]   text-center mt-5">
          Entusiasta da tecnologia, com foco no desenvolvimento front-end, busco
          aprimorar constantemente minhas habilidades para oferecer experiências
          digitais envolventes e intuitivas. Sou graduada em Design gráfico e
          graduanda em Análise e desenvolvimento de sistemas. Minhas paixões
          incluem jogos eletrônicos, música, ficção científica e cubo mágico.
        </p>
        <div className="flex flex-col items-center">
          <h1 id="habilidades" className="text-2xl text-brand-color mt-16">
            Habilidades
          </h1>
          <div className="">
            <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6   sm py-8 gap-4 ">
              {skills.map((skill) => (
                <Card
                  skills={skill}
                  projects={{
                    imagem: "",
                    nome: "",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 id="projetos" className="text-2xl text-brand-color mt-4 mb-12">
            Projetos
          </h1>
          <div className=" grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3  gap-14 mb-20">
            {projects.map((project) => (
              <CardProjects
                projects={project}
                skills={{
                  imagem: "",
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-dark-20 justify-between flex items-center px-20 py-6">
        {" "}
        <div>2024 - Jhuly Bastos</div>
      </footer>
    </div>
  );
}
