import { ReactComponent as Bell } from '../../images/bell.svg';
import './SpecialOffersLink.css';

export const SpecialOffersLink = () => {
  return (
    <a href="/" className="special-offers">
      <div className="special-offers-icon-container">
        <Bell width={30} height={30} className="special-offers-icon" />
      </div>
      <p className="special-offers-text">Special offers</p>
    </a>
  );
};
