import Link, { LinkProps } from 'next/link';

import { Icon } from "../Icon";

type ButtonVariant = 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary' | 'attach' | 'loading' | 'attached';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  href?: LinkProps['href'];
}

export function Button(props: Readonly<ButtonProps>) {
  return (
    props.href ? (
      <Link href={props.href} className={["c-button", `c-button-${props.variant ?? 'primary'}`, props.disabled && 'disabled'].join(' ')} aria-disabled={props.disabled}>
        {props.children}
      </Link>
    ) : (
      <button className={["c-button", `c-button-${props.variant ?? 'primary'}`, props.disabled && 'disabled'].join(' ')} aria-disabled={props.disabled} {...props}>
        {props.variant !== 'loading'
          ? props.children
          : <Icon name="loading" />}
      </button>
    )
  );
}