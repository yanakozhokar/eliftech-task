import { ReactComponent as Bell } from '../../images/bell.svg';
import './SpecialOffersLink.css';

export const SpecialOffersLink = () => {
  return (
    <a href="/" className="special-offers">
      <div className="special-orders-icon-container">
        <Bell width={30} height={30} className="special-offers-icon" />
      </div>
      <p className="special-orders-text">Special offers</p>
    </a>
  );
};
