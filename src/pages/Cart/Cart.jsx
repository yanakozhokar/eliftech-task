import { CartForm } from 'components/CartForm/CartForm';
import { CartProductsTable } from 'components/CartProductsTable/CartProductsTable';
import './Cart.css';
import { ReturnBtn } from 'components/ReturnBtn/ReturnBtn';

export const Cart = () => {
  return (
    <div className="cart-page">
      <div className="container">
        <ReturnBtn />
      </div>
      <section className="cart__complete">
        <div className="container">
          <CartForm />
          <CartProductsTable />
        </div>
      </section>
    </div>
  );
};
