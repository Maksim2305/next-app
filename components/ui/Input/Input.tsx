import { FC } from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';
import React from 'react';

interface InputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  button?: boolean;
  children?: React.ReactNode;
}

const Input: FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, value, onChange, onKeyDown, button, children, ...props }, ref) => {
    return (
      <div className={cn(styles['input-wrapper'], className)}>
        <input
          ref={ref}
          className={styles['input-wrapper__input']}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          {...props}
        />
        {button && <div className={styles['input-wrapper__button']}>{children}</div>}
      </div>
    );
  }
);

export default Input;
