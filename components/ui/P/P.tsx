import cn from 'classnames';
import styles from './P.module.css';
import { PProps } from '@/types/components';

export const P = ({ size = 'medium', children, ...props }: PProps): JSX.Element => {
  return (
    <p className={cn(styles.p, styles[size])} {...props}>
      {children}
    </p>
  );
};
