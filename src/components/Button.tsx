import { ReactNode } from "react";

const cssPrimary = "p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors";
const cssSecondary = "p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors";

interface ButtonProps {
  icon: ReactNode;
  title: string;
  href?: string;
  variant: "primary" | "secondary";
}

export function Button({icon, title, variant}: ButtonProps) {
  let variantSelected;
  variant === "primary" ? variantSelected = cssPrimary : variantSelected = cssSecondary;
  return (
    <a
      href="#"
      className={variantSelected}
    >
      {icon}
      {title}
    </a>
  );
}
