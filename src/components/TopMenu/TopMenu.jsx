import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { ModalPayment } from 'components/ModalPayment/ModalPayment';
import { ModalServiceHours } from 'components/ModalServiceHours/ModalServiceHours';
import './TopMenu.css';

export const TopMenu = () => {
  const [isMenuDropdowOpen, setIsMenuDropdownOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isServiceHoursModalOpen, setIsServiceHoursOpen] = useState(false);

  const toggleMenuDropdown = () => {
    setIsMenuDropdownOpen(prevState => {
      return !prevState;
    });
  };

  const togglePaymentModal = () => {
    setIsPaymentModalOpen(prevState => {
      return !prevState;
    });
  };

  const toggleServiceHoursModal = () => {
    setIsServiceHoursOpen(prevState => {
      return !prevState;
    });
  };

  return (
    <>
      <div className="top-menu">
        <div className="desktop container">
          <ul className="top-menu__list">
            <li className="top-menu__item">
              <Link to="/">Menu</Link>
            </li>
            <li className="top-menu__item" onClick={togglePaymentModal}>
              Payment methods
            </li>
            <li className="top-menu__item">
              <Link to="/delivery">Delivery zones</Link>
            </li>
            <li className="top-menu__item" onClick={toggleServiceHoursModal}>
              Service hours
            </li>
            <li className="top-menu__item">Reservation</li>
            <li className="top-menu__item">Feedback</li>
            <li className="top-menu__item">Contact</li>
          </ul>
          <button className="top-menu__open-btn" onClick={toggleMenuDropdown}>
            <FiMenu className="top-menu__open-icon" />
            <p className="top__menu-open-text">Menu</p>
          </button>
        </div>
        {isMenuDropdowOpen && (
          <div className="mobile container">
            <ul className="top-menu__dropdown-menu">
              <li className="top-menu__dropdown-menu-item">
                <Link to="/">Menu</Link>
              </li>
              <li
                className="top-menu__dropdown-menu-item"
                onClick={togglePaymentModal}
              >
                Payment methods
              </li>
              <li
                className="top-menu__dropdown-menu-item"
                onClick={toggleServiceHoursModal}
              >
                Service hours
              </li>
              <li className="top-menu__dropdown-menu-item">Reservation</li>
              <li className="top-menu__dropdown-menu-item">Feedback</li>
              <li className="top-menu__dropdown-menu-item">Contact</li>
            </ul>
          </div>
        )}
      </div>
      {isPaymentModalOpen && (
        <ModalPayment togglePaymentModal={togglePaymentModal} />
      )}
      {isServiceHoursModalOpen && (
        <ModalServiceHours toggleServiceHoursModal={toggleServiceHoursModal} />
      )}
    </>
  );
};
