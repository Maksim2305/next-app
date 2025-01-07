import cn from 'classnames';
import styles from './Button.module.scss';
import ArrowIcon from './arrow.svg';
import { ButtonProps } from '@/types/components';

export const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,
  disabled,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, styles[appearance], {
        [styles.disabled]: disabled,
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span className={cn(styles.arrow, styles[arrow])}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
