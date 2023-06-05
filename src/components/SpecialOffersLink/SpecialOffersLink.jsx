import { Link } from 'react-router-dom';
import { ReactComponent as Bell } from '../../images/bell.svg';
import './SpecialOffersLink.css';

export const SpecialOffersLink = () => {
  return (
    <Link to="/offers" className="special-offers">
      <div className="special-offers-icon-container">
        <Bell width={30} height={30} className="special-offers-icon" />
      </div>
      <p className="special-offers-text">Special offers</p>
    </Link>
  );
};
