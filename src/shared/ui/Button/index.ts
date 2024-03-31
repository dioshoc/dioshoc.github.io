import React, { createElement } from 'react';
import cn from 'classname';
import styles from './styles.module.scss';

interface Props {
  href?: string;
  children: React.ReactNode;
  type?: 'text' | 'outlined' | 'contained' | 'gradient';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  href,
  children,
  type = 'contained',
  className = '',
  onClick,
}: Props) => {
  const typeClass = {
    text: 'button_text',
    outlined: 'button_outlined',
    contained: 'button_contained',
    gradient: 'button_gradient',
  }[type];

  const arg = {
    href,
    className: cn(styles.button, styles[typeClass], className),
    onClick,
  };
  const component = href ? 'a' : 'button';

  return createElement(component, arg, children);
};

export default Button;
