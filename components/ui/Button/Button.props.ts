import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: 'primary' | 'ghost';
  arrow?: 'left' | 'right' | 'up' | 'down' | 'none';
  children: ReactNode;
}
