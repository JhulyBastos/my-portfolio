import { skills } from "@/Data/skills";
import { Card } from "@/components/Card";

export default function Skills() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 id="habilidades" className="text-2xl text-brand-color mt-16">
          Habilidades
        </h1>
        <div className="">
          <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6   sm py-8 gap-4 ">
            {skills.map((skill, index) => (
              <Card
                key={index}
                skills={skill}
                projects={{
                  imagem: "",
                  nome: "",
                  projeto: "",
                  repositorio: "",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
