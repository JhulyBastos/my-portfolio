import { Button } from "@/components/Button";

export default function Section() {
  return (
    <div>
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
            <a href="https://social-tree-five-tau.vercel.app/" target="_blank">
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
              alt="Imagem de perfil."
            />
          </a>
        </div>
      </div>
    </div>
  );
}
