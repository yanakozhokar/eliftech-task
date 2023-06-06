import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Socials } from 'components/Socials/Socials';
import { ModalPrivacyPolicy } from 'components/ModalPrivacyPolicy/ModalPrivacyPolicy';
import { ModalTermsOfUse } from 'components/ModalTermsOfUse/ModalTermsOfUse';
import { ModalRefundPolicy } from 'components/ModalRefundPolicy/ModalRefundPolicy';
import PaymentMethods from '../../images/payment.png';
import './Footer.css';

export const Footer = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfUseOpen, setIsTermsOfUseOpen] = useState(false);
  const [isRefundPolicyOpen, setIsRefundPolicyOpen] = useState(false);

  const togglePrivacyPolicy = () => {
    return setIsPrivacyPolicyOpen(prevState => !prevState);
  };

  const toggleTermsOfUse = () => {
    return setIsTermsOfUseOpen(prevState => !prevState);
  };

  const toggleRefundPolicy = () => {
    return setIsRefundPolicyOpen(prevState => !prevState);
  };

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
              <li className="footer__top-item">
                <Link to="/delivery">Delivery zones</Link>
              </li>
              <li className="footer__top-item">
                <Link to="/offers">Special offers</Link>
              </li>
            </ul>
          </div>
          <div className="footer__top-documents">
            <p className="footer__top-title">Documents</p>
            <ul className="footer__top-list">
              <li className="footer__top-item" onClick={togglePrivacyPolicy}>
                Privacy policy
              </li>
              <li className="footer__top-item" onClick={toggleTermsOfUse}>
                Terms of use
              </li>
              <li className="footer__top-item" onClick={toggleRefundPolicy}>
                Refund policy
              </li>
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
      {isPrivacyPolicyOpen && (
        <ModalPrivacyPolicy togglePrivacyPolicy={togglePrivacyPolicy} />
      )}
      {isTermsOfUseOpen && (
        <ModalTermsOfUse togglePrivacyPolicy={toggleTermsOfUse} />
      )}
      {isRefundPolicyOpen && (
        <ModalRefundPolicy togglePrivacyPolicy={toggleRefundPolicy} />
      )}
    </footer>
  );
};
