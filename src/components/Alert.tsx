import { ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div
      role="alert"
      className="alert alert-danger show fade alert-dismissible"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
