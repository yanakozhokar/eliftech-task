import { AiFillInfoCircle } from 'react-icons/ai';
import './SpecialOfferBanner.css';

export const SpecialOfferBanner = () => {
  return (
    <section className="special-offer__container">
      <div className="special-offer__card">
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
    </section>
  );
};
