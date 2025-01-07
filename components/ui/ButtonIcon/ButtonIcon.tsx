import cn from 'classnames';
import styles from './ButtonIcon.module.scss';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import { FC } from 'react';

export const ButtonIcon: FC<ButtonIconProps> = ({
  fill,
  children,
  className,
  disabled,
  icon,
  ...props
}): JSX.Element => {
  const IconComponent = icons[icon];
  return (
    <button
      className={cn(styles.button, className, styles[fill], {
        [styles.disabled]: disabled,
      })}
      {...props}
    >
      <IconComponent />
    </button>
  );
};
