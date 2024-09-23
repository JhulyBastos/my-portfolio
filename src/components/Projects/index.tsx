import { projects } from "@/Data/projects";
import { CardProjects } from "@/components/Card";

export default function Projects() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 id="projetos" className="text-2xl text-brand-color mt-4 mb-12">
          Projetos
        </h1>
        <div className=" grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3  gap-14 mb-20">
          {projects.map((project, index) => (
            <CardProjects
              key={index}
              projects={project}
              skills={{
                imagem: "",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
