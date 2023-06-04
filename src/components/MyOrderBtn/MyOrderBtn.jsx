import { TiShoppingCart } from 'react-icons/ti';
import './MyOrderBtn.css';
import { Link } from 'react-router-dom';

export const MyOrderBtn = () => {
  return (
    <Link to="/cart" className="my-order-btn">
      <TiShoppingCart className="my-order-btn__cart-icon" />
      My order
    </Link>
  );
};
