import { FiMenu } from 'react-icons/fi';
import './TopMenu.css';

export const TopMenu = () => {
  return (
    <>
      <div className="top-menu">
        <div className="container">
          <ul className="top-menu__list">
            <li className="top-menu__item">Menu</li>
            <li className="top-menu__item">Payment methods</li>
            <li className="top-menu__item">Service hours</li>
            <li className="top-menu__item">Reservation</li>
            <li className="top-menu__item">Feedback</li>
            <li className="top-menu__item">Contact</li>
          </ul>
          <button className="top-menu__open-btn">
            <FiMenu className="top-menu__open-icon" />
            <p className="top__menu-open-text">Menu</p>
          </button>
        </div>
      </div>
    </>
  );
};
