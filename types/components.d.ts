import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type ButtonElementProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type ParagraphProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export interface CommonNodeProps extends DivProps {
  children?: ReactNode;
}

export interface ButtonProps extends ButtonElementProps {
  appearance: 'primary' | 'ghost';
  arrow?: 'left' | 'right' | 'up' | 'down' | 'none';
}

export interface HtagProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4';
  children: ReactNode;
}

export interface PProps extends ParagraphProps {
  size?: 'small' | 'medium' | 'large';
}

export interface TagProps extends DivProps {
  size?: 'small' | 'medium';
  color?: 'gray' | 'green' | 'primary' | 'red' | 'ghost';
  href?: string;
}

export interface RatingProps extends DivProps {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}
