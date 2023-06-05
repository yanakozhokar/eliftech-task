import { IoClose } from 'react-icons/io5';
import { Modal } from 'components/Modal/Modal';
import './ModalPayment.css';

export const ModalPayment = ({ togglePaymentModal }) => {
  return (
    <Modal>
      <div className="modal__top">
        <h2 className="modal__top-title">Payment methods</h2>
        <button
          type="button"
          className="modal__top-close-btn"
          onClick={togglePaymentModal}
        >
          <IoClose className="modal__top-close-icon" />
        </button>
      </div>
      <div className="modal__main">
        <h3 className="modal__main-title">Rest burger</h3>
        <p className="modal__main-subtitle">Payment methods</p>
        <ul className="modal__main-payment-list">
          <li className="modal__main-payment-item">Online payment</li>
          <li className="modal__main-payment-item">Cash</li>
          <li className="modal__main-payment-item">
            Credit/debit card at delivery
          </li>
        </ul>
      </div>
      <div className="modal__back-container">
        <button
          type="button"
          className="modal__back-btn"
          onClick={togglePaymentModal}
        >
          Back
        </button>
      </div>
    </Modal>
  );
};
