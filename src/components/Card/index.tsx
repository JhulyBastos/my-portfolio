"use client";
import { Skills } from "@/types/Skills";
import { Projects } from "@/types/projects";
import { ButtonProjects } from "../Button";
import { useRouter } from "next/navigation";
interface CardProps {
  skills: Skills;
  projects: Projects;
}

export function Card({ skills }: CardProps) {
  return (
    <div className="bg-dark-20  border-dark-30 border-[1px] w-[136px] h-[100px] p-9 flex  ">
      <div className="flex justify-center items-center">
        <img className="" src={skills.imagem} alt="" />
      </div>
    </div>
  );
}

export function CardProjects({ projects }: CardProps) {
  const router = useRouter();
  return (
    <div>
      <div className="bg-dark-20  border-dark-30 border-[1px] w-[380px] h-[230px] p-5 flex justify-center items-center ">
        <div>
          <img
            className="w-[360px] h-[190px] hover:scale-105 duration-300"
            src={projects.imagem}
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 px-2">
        <p className="mt-4">{projects.nome}</p>
        <ButtonProjects onClick={() => router.push(`${projects.repositorio}`)}>
          Acessar repositório
        </ButtonProjects>
      </div>
    </div>
  );
}
