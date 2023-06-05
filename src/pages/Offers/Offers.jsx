import { useState } from 'react';
import { ModalSpecialOffer } from 'components/ModalSpecialOffer/ModalSpecialOffer';
import { ReturnBtn } from 'components/ReturnBtn/ReturnBtn';
import './Offers.css';

export const Offers = () => {
  const [isEarnPointsOfferOpen, setEarnPointsOffer] = useState(false);

  const toggleEarnPointsModalOpen = () => {
    setEarnPointsOffer(prevState => {
      return !prevState;
    });
  };

  return (
    <div className="offers-page">
      <div className="container">
        <ReturnBtn />
      </div>
      <section className="offers">
        <div className="container">
          <div className="offers__container">
            <div className="offers__top">
              <h2 className="offers__title">Offers</h2>
            </div>
            <ul className="offers__list">
              <li className="offers__item">
                <h2 className="offers__item-title">Earn 10% Reward Points</h2>
                <p className="offers__item-description">
                  You will earn 10% reward points from your orders, you can
                  spend your reward points on future orders.
                </p>
                <button
                  type="button"
                  className="offers__item-btn"
                  onClick={toggleEarnPointsModalOpen}
                >
                  View offer
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {isEarnPointsOfferOpen && (
        <ModalSpecialOffer
          title={'Your earning'}
          subtitle={
            'All customers will earn %10 points from their order total.'
          }
          terms={'06.06.2023-07.06.2023'}
          toggleSpecialOfferModal={toggleEarnPointsModalOpen}
        />
      )}
    </div>
  );
};
