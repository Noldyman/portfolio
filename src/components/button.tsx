import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  highlight?: boolean;
}

export const Button = (props: Props) => {
  const { children, highlight } = props;

  return (
    <button type="button" className={highlight ? "highlighted" : ""} {...props}>
      [ {children} ]
    </button>
  );
};
