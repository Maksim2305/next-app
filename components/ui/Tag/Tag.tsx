import { IPProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.scss';

export const Tag = ({ size = 'small', color = 'ghost', href, children, className, ...props }: IPProps): JSX.Element => {
  return (
    <div className={cn(styles.p, styles[size], styles[color])} {...props}>
      {href ? <a href={href}>children</a> : <>{children}</>}
    </div>
  );
};
