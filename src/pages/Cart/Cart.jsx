import { Link } from 'react-router-dom';
import { CartForm } from 'components/CartForm/CartForm';
import { CartProductsTable } from 'components/CartProductsTable/CartProductsTable';
import './Cart.css';

export const Cart = () => {
  return (
    <div className="cart container">
      <Link to="/" href="/" className="cart__return-btn">
        Return
      </Link>
      <section className="cart__complete">
        <CartForm />
        <CartProductsTable />
      </section>
    </div>
  );
};
