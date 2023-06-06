import { IoClose } from 'react-icons/io5';
import { Modal } from 'components/Modal/Modal';

export const ModalRefundPolicy = ({ togglePrivacyPolicy }) => {
  return (
    <Modal>
      <div className="modal__top">
        <h2 className="modal__top-title">Refund policy</h2>
        <button
          type="button"
          className="modal__top-close-btn"
          onClick={togglePrivacyPolicy}
        >
          <IoClose className="modal__top-close-icon" />
        </button>
      </div>
      <div className="modal__main">
        <p className="modal__document-text">
          For refunds, charge-backs or disputes for online paid orders, please
          contact us on the details mention below. If an unrecognised
          transaction appears on your card / statement from{' '}
          <span className="bold">RestBurger,</span> please contact us on the
          follow details.
        </p>
        <address className="modal__address">
          <p>RestBurger</p>
          <a href="maito:info@restburger.com">info@restburger.com</a>
          <p>95 West Broadway New York, NY 12122100020</p>
        </address>

        <div className="modal__back-container">
          <button
            type="button"
            className="modal__back-btn"
            onClick={togglePrivacyPolicy}
          >
            Back
          </button>
        </div>
      </div>
    </Modal>
  );
};
