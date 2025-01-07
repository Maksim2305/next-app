import arrow from './icons/arrow.svg';
import cross from './icons/cross.svg';
import burger from './icons/burger-menu.svg';
import { ButtonHTMLAttributes } from 'react';

export const icons = {
  arrow,
  cross,
  burger,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  fill: 'primary' | 'white';
}
