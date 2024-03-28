import React, {createElement} from 'react';
import classes from './style.module.scss';

interface Props {
	href?: string,
	children: React.ReactNode,
	type?: 'text' | 'outlined' | 'contained' | 'gradient',
	className?: string,
}

const Button = ({
  href,
  children,
  type = 'contained',
  className,
}: Props) => {
  const additionalClasses = className ? `${className}` : '';

  const typeClasses = {
    text: 'button_text',
    outlined: 'button_outlined',
    contained: 'button_contained',
    gradient: 'button_gradient'
  };

  const typeClass  = typeClasses[type]

  const arg = {
    href,
    className: `${classes.button} ${classes[typeClass as keyof typeof classes]} ${additionalClasses}`,
  }
  const component = href ? 'a' : 'button';

  return createElement(component, arg, children)
};

export default Button;