import { Projects } from "@/types/projects";
import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  projects: Projects;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="mt-4 w-[140px] h-[37px] flex items-center justify-center bg-brand-color  text-dark-10 font-semibold text-sm rounded  hover:bg-dark-50 duration-300"
    >
      {children}
    </button>
  );
}

export function ButtonProjects({ children, projects, ...props }: ButtonProps) {
  return (
    <a href={projects.repositorio} target="_blank">
      <button
        {...props}
        className="mt-4 w-[160px] h-[30px] flex items-center justify-center bg-dark-10 text-brand-color font-normal text-sm rounded border-brand-color border-[1px]  hover:bg-brand-color hover:text-dark-10 hover:font-semibold "
      >
        {children}
      </button>
    </a>
  );
}
