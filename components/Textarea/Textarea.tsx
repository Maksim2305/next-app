import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './Textarea.module.scss';

interface TextareaProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  button?: boolean;
}

export const Textarea: FC<PropsWithChildren<TextareaProps>> = ({
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
      <textarea
        className={styles['input-wrapper__input']}
        {...props}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
