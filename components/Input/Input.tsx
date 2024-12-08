import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

interface InputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  button?: boolean;
}

export const Input: FC<PropsWithChildren<InputProps>> = ({
  className,
  value,
  children,
  onChange,
  onKeyDown,
  button,
  ...props
}) => {
  return (
    <div className={cn(styles['input-wrapper'], className)}>
      <input
        className={styles['input-wrapper__input']}
        {...props}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {button && <div className={styles['input-wrapper__button']}>{children}</div>}
    </div>
  );
};
