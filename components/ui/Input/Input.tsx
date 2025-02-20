import { FC } from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';
import React from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  button?: boolean;
  children?: React.ReactNode;
  error?: FieldError;
}

const Input: FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, value, onChange, onKeyDown, button, children, error, ...props }, ref) => {
    return (
      <div className={cn(styles['input-wrapper'], className)}>
        <input
          ref={ref}
          className={cn(styles['input-wrapper__input'], {
            [styles['input-wrapper__input--error']]: error,
          })}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          {...props}
        />
        {button && <div className={styles['input-wrapper__button']}>{children}</div>}
        {error && <span className={styles['error-message']}>{error.message}</span>}
      </div>
    );
  }
);

export default Input;
