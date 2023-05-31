import './HeaderMenu.css';

export const HeaderMenu = () => {
  return (
    <ul className="header-menu__list">
      <li className="header-menu__item">Menu</li>
      <li className="header-menu__item">Payment methods</li>
      <li className="header-menu__item">Service hours</li>
      <li className="header-menu__item">Reservation</li>
      <li className="header-menu__item">Feedback</li>
      <li className="header-menu__item">Contact</li>
    </ul>
  );
};
