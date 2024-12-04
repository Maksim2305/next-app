'use client';

import cn from 'classnames';
import styles from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';
import { CommonNodeProps } from '@/types/components';

export const Sidebar = ({ ...props }: CommonNodeProps) => {
  return (
    <aside style={{ maxHeight: '100vh', overflow: 'auto' }} className={cn(styles)} {...props}>
      <Menu />
    </aside>
  );
};
