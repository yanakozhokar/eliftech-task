import { IoClose } from 'react-icons/io5';
import { Modal } from 'components/Modal/Modal';
import './ModalServiceHours.css';

export const ModalServiceHours = ({ toggleServiceHoursModal }) => {
  return (
    <Modal>
      <div className="modal__top">
        <h2 className="modal__top-title">Service houre</h2>
        <button
          type="button"
          className="modal__top-close-btn"
          onClick={toggleServiceHoursModal}
        >
          <IoClose className="modal__top-close-icon" />
        </button>
      </div>
      <div className="modal__main">
        <h3 className="modal__main-title">Rest burger</h3>
        <p className="modal__main-subtitle">Service hours</p>
        <table className="modal__table">
          <thead className="modal__table-head">
            <tr className="modal__table-head-row">
              <td className="modal__table-head-item">Days</td>
              <td className="modal__table-head-item">Opening</td>
              <td className="modal__table-head-item">Closing</td>
            </tr>
          </thead>
          <tbody className="modal__table-body">
            <tr className="modal__table-body-row">
              <td className="modal__table-body-item" colspan={3}>
                Restaurant is open 7 days 24 hours.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="modal__back-container">
        <button
          type="button"
          className="modal__back-btn"
          onClick={toggleServiceHoursModal}
        >
          Back
        </button>
      </div>
    </Modal>
  );
};
