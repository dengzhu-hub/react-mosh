import { ReactNode } from 'react';
interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  color?: 'primary' | 'close' | 'secondary' | 'danger' | 'info';
}
const Button = ({ children, onClick, color = 'danger' }: ButtonProps) => {
  return (
    <button
     
      type="button"
      className={`btn btn-${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
