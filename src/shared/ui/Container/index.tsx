import React from 'react';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className = '', children }: Props) => (
  <div className={`${styles['container']} ${className}`}>{children}</div>
);

export default Container;
