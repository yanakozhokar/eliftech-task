import { IoClose } from 'react-icons/io5';
import { Modal } from 'components/Modal/Modal';

export const ModalSpecialOffer = ({
  title,
  subtitle,
  terms,
  toggleSpecialOfferModal,
}) => {
  return (
    <Modal>
      <div className="modal__top">
        <h2 className="modal__top-title">Offer details</h2>
        <button
          type="button"
          className="modal__top-close-btn"
          onClick={toggleSpecialOfferModal}
        >
          <IoClose className="modal__top-close-icon" />
        </button>
      </div>
      <div className="modal__main">
        <p className="modal__main-title">{title}</p>
        <p className="modal__main-subtitle">{subtitle}</p>
        <p className="modal__main-terms">Terms</p>
        <p className="modal__main-subtitle">{terms}</p>
      </div>
      <div className="modal__back-container">
        <button
          type="button"
          className="modal__back-btn"
          onClick={toggleSpecialOfferModal}
        >
          Back
        </button>
      </div>
    </Modal>
  );
};
