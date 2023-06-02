import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import './TopMenu.css';

export const TopMenu = () => {
  const [isMenuDropdowOpen, setIsMenuDropdownOpen] = useState(false);

  const onOpenMenuBtnClick = () => {
    setIsMenuDropdownOpen(prevState => {
      return !prevState;
    });
  };

  return (
    <>
      <div className="top-menu">
        <div className="desktop container">
          <ul className="top-menu__list">
            <li className="top-menu__item">Menu</li>
            <li className="top-menu__item">Payment methods</li>
            <li className="top-menu__item">Service hours</li>
            <li className="top-menu__item">Reservation</li>
            <li className="top-menu__item">Feedback</li>
            <li className="top-menu__item">Contact</li>
          </ul>
          <button className="top-menu__open-btn" onClick={onOpenMenuBtnClick}>
            <FiMenu className="top-menu__open-icon" />
            <p className="top__menu-open-text">Menu</p>
          </button>
        </div>
        {isMenuDropdowOpen && (
          <div className="mobile container">
            <ul className="top-menu__dropdown-menu">
              <li className="top-menu__dropdown-menu-item">Menu</li>
              <li className="top-menu__dropdown-menu-item">Payment methods</li>
              <li className="top-menu__dropdown-menu-item">Service hours</li>
              <li className="top-menu__dropdown-menu-item">Reservation</li>
              <li className="top-menu__dropdown-menu-item">Feedback</li>
              <li className="top-menu__dropdown-menu-item">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
