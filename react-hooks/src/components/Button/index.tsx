import { MyButton } from "./styles";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return <MyButton {...props}>{children}</MyButton>;
}

export default Button;
