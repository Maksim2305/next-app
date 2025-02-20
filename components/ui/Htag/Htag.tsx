import React from 'react';
import styles from './Htag.module.css';
import { HtagProps } from '@/types/components';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={styles.h1}>{children}</h1>;
    case 'h2':
      return <h2>{children}</h2>;
    case 'h3':
      return <h3>{children}</h3>;
    case 'h4':
      return <h4>{children}</h4>;
    default:
      throw new Error(`Invalid tag: ${tag}`);
  }
};
