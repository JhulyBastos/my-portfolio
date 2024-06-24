import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="mt-4 w-[140px] h-[37px] flex items-center justify-center bg-brand-color text-dark-10 font-semibold text-sm rounded  hover:scale-105 duration-300"
    >
      {children}
    </button>
  );
}
