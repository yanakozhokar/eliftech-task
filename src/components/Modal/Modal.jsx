import './Modal.css';

export const Modal = ({ children }) => {
  return (
    <div className="modal__backdrop">
      <div className="modal__window">{children}</div>
    </div>
  );
};
