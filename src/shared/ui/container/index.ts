import React, { createElement } from 'react';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className = '', children }: Props) => {
  const classes = `${styles['container']} ${className}`;
  return createElement('div', { className: classes }, children);
};

export default Container;
