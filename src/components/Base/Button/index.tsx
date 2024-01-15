import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, type, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className ? className : styles.baseBtn}
    >
      {children}
    </button>
  );
};

export default Button;
