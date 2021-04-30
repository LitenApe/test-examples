import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export default function Button({ children, ...props }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return <button {...props}>{children}</button>;
}
