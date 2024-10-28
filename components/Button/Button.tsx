import { IButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.scss";
import ArrowIcon from "./arrow.svg";

export const Button = ({
  appearance,
  arrow = "none",
  children,
  className,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, styles[appearance])}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, styles[arrow])}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
