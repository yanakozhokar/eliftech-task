import { ReturnBtn } from 'components/ReturnBtn/ReturnBtn';
import './Delivery.css';

export const Delivery = () => {
  return (
    <div className="delivery-page">
      <div className="container">
        <ReturnBtn />
      </div>
      <section className="delivery">
        <div className="container">
          <div className="delivery__top">
            <h2 className="delivery__top-title">Delivery zones</h2>
          </div>
          <div className="delivery__main">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.109311103758!2d-74.01153292419811!3d40.71561007139294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1f18fddceb%3A0xc1bc46b19e9aee0d!2zOTUgVyBCcm9hZHdheSwgTmV3IFlvcmssIE5ZIDEwMDA3LCDQodCo0JA!5e0!3m2!1sru!2sua!4v1686040572775!5m2!1sru!2sua"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Delivery map"
              className="delivery__map"
            ></iframe>
            <div className="delivery__zones">
              <table className="delivery__table">
                <thead className="delivery__table-head">
                  <tr className="delivery__table-head-row">
                    <td className="delivery__table-head-item">Area</td>
                    <td className="delivery__table-head-item">Delivery fee</td>
                    <td className="delivery__table-head-item">Min. order</td>
                  </tr>
                </thead>
                <tbody className="delively__table-body">
                  <tr className="delivery__table-body-row">
                    <td className="delivery__table-body-item">New York</td>
                    <td className="delivery__table-body-item">$0.00</td>
                    <td className="delivery__table-body-item">$10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
