'use client';

import cn from 'classnames';
import styles from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';
import { CommonNodeProps } from '@/types/components';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from '../Search/Search';

export const Sidebar = ({ ...props }: CommonNodeProps) => {
  return (
    <aside className={cn(styles)} {...props}>
      <Link href={'/'}>
        <Image src="/icons/logo.png" alt="logo" width={160} height={42} />
      </Link>
      <Search />
      <Menu />
    </aside>
  );
};
