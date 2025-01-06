import { FC, forwardRef } from 'react';
import cn from 'classnames';
import styles from './Textarea.module.scss';
import React from 'react';
import { FieldError } from 'react-hook-form';

interface TextareaProps {
  className?: string;
  placeholder?: string;
  error?: FieldError;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error, ...props }, ref) => {
  return (
    <div className={cn(styles['input-wrapper'], className)}>
      <textarea
        ref={ref}
        className={cn(styles['input-wrapper__input'], {
          [styles['input-wrapper__input--error']]: error,
        })}
        {...props}
      />
      {error && <span className={styles['error-message']}>{error.message}</span>}
    </div>
  );
});

export default Textarea;
