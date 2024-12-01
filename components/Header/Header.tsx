import cn from 'classnames';
import styles from './Header.module.css';
import { CommonNodeProps } from '@/types/components';

export const Header = ({ children, ...props }: CommonNodeProps): JSX.Element => {
  return (
    <header className={cn(styles)} {...props}>
      {children}
    </header>
  );
};
