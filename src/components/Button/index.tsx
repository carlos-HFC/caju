import { Icon } from "../Icon";

type ButtonVariant = 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary' | 'attach' | 'loading' | 'attached';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={["c-button", `c-button-${variant}`, props.disabled && 'disabled'].join(' ')} aria-disabled={props.disabled} {...props}>
      {variant !== 'loading'
        ? props.children
        : <Icon name="loading" />}
    </button>
  );
}