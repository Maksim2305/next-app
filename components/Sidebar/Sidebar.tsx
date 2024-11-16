import cn from 'classnames';
import styles from './Sidebar.module.css';
import { CommonNodeProps } from '@/types/components';

export const Sidebar = ({ ...props }: CommonNodeProps): JSX.Element => {
  return <aside className={cn(styles)} {...props}></aside>;
};
