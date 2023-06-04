import { Socials } from 'components/Socials/Socials';
import PaymentMethods from '../../images/payment.png';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__top-payment">
            <p className="footer__top-title">Payment methods</p>
            <div className="footer__top-payment-img-container">
              <img
                src={PaymentMethods}
                alt="Cards"
                className="footer__top-payment-img"
              />
            </div>
          </div>
          <div className="footer__top-restburger">
            <p className="footer__top-title">Rest burger</p>
            <ul className="footer__top-list">
              <li className="footer__top-item">Delivery zones</li>
              <li className="footer__top-item">Special offers</li>
            </ul>
          </div>
          <div className="footer__top-documents">
            <p className="footer__top-title">Documents</p>
            <ul className="footer__top-list">
              <li className="footer__top-item">Privacy policy</li>
              <li className="footer__top-item">Terms of use</li>
              <li className="footer__top-item">Refund policy</li>
            </ul>
          </div>
        </div>
        <address className="footer__bottom">
          <Socials />
          <p className="footer__bottom-copyright">
            RestBurger &copy; 2023 - Created by Yana Kozhokar
          </p>
        </address>
      </div>
    </footer>
  );
};
