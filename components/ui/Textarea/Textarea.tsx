import { FC, forwardRef } from 'react';
import cn from 'classnames';
import styles from './Textarea.module.scss';
import React from 'react';

interface TextareaProps {
  className?: string;
  placeholder?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <div className={cn(styles['input-wrapper'], className)}>
      <textarea ref={ref} className={styles['input-wrapper__input']} {...props} />
    </div>
  );
});

export default Textarea;
