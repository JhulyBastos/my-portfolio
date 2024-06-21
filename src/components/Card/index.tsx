import { Skills } from "@/types/Skills";
interface CardProps {
  skills: Skills;
}

export function Card({ skills }: CardProps) {
  return (
    <div className="bg-dark-20  border-dark-30 border-[1px] w-[136px] h-[100px] p-4">
      <div className="flex justify-center items-center">
        <img className="" src={skills.imagem} alt="" />
      </div>
    </div>
  );
}
