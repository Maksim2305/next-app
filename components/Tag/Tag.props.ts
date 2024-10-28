import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IPProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "small" | "medium";
  color?: "gray" | "green" | "primary" | "red" | "ghost";
  href?: string;
  children: ReactNode;
}
