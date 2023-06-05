import { useState } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import { ModalSpecialOffer } from 'components/ModalSpecialOffer/ModalSpecialOffer';
import './SpecialOfferBanner.css';

export const SpecialOfferBanner = () => {
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  const toggleSpecialOfferBannerModal = () => {
    setIsOfferModalOpen(prevState => {
      return !prevState;
    });
  };

  return (
    <section className="special-offer__container">
      <div
        className="special-offer__card"
        onClick={toggleSpecialOfferBannerModal}
      >
        <h2 className="special-offer__title">Earn 10% Reward Points</h2>
        <p className="special-offer__description">
          You will earn 10% reward points from your orders, you can spend your
          reward points on future orders.
        </p>
        <button type="button" className="special-offer__btn">
          View offer
        </button>
        <AiFillInfoCircle
          width={20}
          height={20}
          className="special-offer__info-icon"
        />
      </div>
      {isOfferModalOpen && (
        <ModalSpecialOffer
          title={'Your earning'}
          subtitle={
            'All customers will earn %10 points from their order total.'
          }
          terms={'06.06.2023-07.06.2023'}
          toggleSpecialOfferModal={toggleSpecialOfferBannerModal}
        />
      )}
    </section>
  );
};
