import cn from 'classnames';
import styles from './Tag.module.scss';
import { TagProps } from '@/types/components';

export const Tag = ({ size = 'small', color = 'ghost', href, children, ...props }: TagProps): JSX.Element => {
  return (
    <div className={cn(styles.p, styles[size], styles[color])} {...props}>
      {href ? <a href={href}>children</a> : <>{children}</>}
    </div>
  );
};
