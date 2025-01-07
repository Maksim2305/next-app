import cn from 'classnames';
import styles from './Footer.module.scss';
import { CommonNodeProps } from '@/types/components';

export const Footer = ({ className, ...props }: CommonNodeProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - 2024 Все права защищены</div>
      <a href="#">Пользовательское соглашение</a>
      <a href="#">Политика конфиденциальности</a>
    </footer>
  );
};
