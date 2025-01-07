'use client';

import cn from 'classnames';
import styles from './Header.module.scss';
import { CommonNodeProps } from '@/types/components';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonIcon } from '../ui/ButtonIcon/ButtonIcon';
import { motion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const Header = ({ ...props }: CommonNodeProps): JSX.Element => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isSidebar) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }

    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, [isSidebar]);

  useEffect(() => {
    if (pathname.split('/').length > 2 || pathname === '/') {
      setIsSidebar(false);
    }
  }, [pathname]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: { type: 'tween', ease: [0.43, 0.13, 0.23, 0.96] },
    },
    closed: {
      opacity: 0,
      x: '100%',
    },
  };

  return (
    <header className={cn(styles.header)} {...props}>
      <Link href={'/'}>
        <Image src="/icons/logo.png" alt="logo" width={160} height={42} />
      </Link>
      <ButtonIcon icon="burger" fill="white" onClick={() => setIsSidebar(true)} />
      <motion.div
        className={cn(styles['mobile-menu'])}
        variants={variants}
        animate={isSidebar ? 'opened' : 'closed'}
        initial="closed"
      >
        <Sidebar />
        <ButtonIcon icon="cross" fill="white" onClick={() => setIsSidebar(false)} />
      </motion.div>
    </header>
  );
};
