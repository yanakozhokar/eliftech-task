import { Link } from 'react-router-dom';
import { IoMdReturnLeft } from 'react-icons/io';
import { CartForm } from 'components/CartForm/CartForm';
import { CartProductsTable } from 'components/CartProductsTable/CartProductsTable';
import './Cart.css';

export const Cart = () => {
  return (
    <div className="cart container">
      <Link to="/" href="/" className="cart__return-btn">
        <IoMdReturnLeft width={16} height={16} />
        Return
      </Link>
      <section className="cart__complete">
        <CartForm />
        <CartProductsTable />
      </section>
    </div>
  );
};
