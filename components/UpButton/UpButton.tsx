'use client';

import cn from 'classnames';
import styles from './UpButton.module.scss';
import ArrowIcon from './arrow.svg';
import { ButtonProps } from '@/types/components';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useScrollY } from '@/hooks/useScroll';
import { ButtonIcon } from '../ui/ButtonIcon/ButtonIcon';

export const UpButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const y = useScrollY();

  useEffect(() => {
    if (y >= window.innerHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [y]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      className={cn(styles['up-button'])}
      animate={{
        opacity: isVisible ? 1 : 0,
        translateY: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      onClick={scrollToTop}
    >
      <ButtonIcon icon="arrow" fill="primary" />
    </motion.div>
  );
};
