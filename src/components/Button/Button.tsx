import { ReactNode } from 'react';
import styles from './Button.module.css';
interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'close' | 'secondary' | 'danger' | 'info';
}
const Button = ({
  children,
  onClick,
  color = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={[styles.btn, styles[`btn-${color}`]].join(' ')}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
