export default function Header() {
  return (
    <div>
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
              <li className="text-white hover:text-dark-50 duration-300">
                <a href="#inicio">Inicio</a>
              </li>
              <li className="text-white hover:text-dark-50 duration-300">
                <a href="#sobre-mim">Sobre mim</a>
              </li>

              <li className="text-white hover:text-dark-50 duration-300">
                <a href="#habilidades">Habilidades</a>
              </li>
              <li className="text-white hover:text-dark-50 duration-300">
                <a href="#projetos">Projetos</a>
              </li>
            </ol>
          </nav>
        </div>
      </header>
    </div>
  );
}
