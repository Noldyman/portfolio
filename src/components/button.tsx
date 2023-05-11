import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const Button = (props: Props) => {
  return (
    <button type="button" {...props}>
      [ {props.children} ]
    </button>
  );
};
