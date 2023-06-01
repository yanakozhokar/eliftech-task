import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EmptyCart from '../../images/empty-cart.png';
import './SidebarRight.css';

export const SidebarRight = () => {
  const order = useSelector(state => state.order);

  const totalPrice = () => {
    return order.items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <aside className="sidebar-right">
      <div className="sidebar-right__order">
        <p className="sidebar-right__order-title">My order</p>
        <div className="sidebar-right__order-container">
          {order.items.length === 0 && (
            <div className="sidebar-right__empty-cart">
              <div className="sidebar-right__empty-cart-img-container">
                <img
                  src={EmptyCart}
                  alt="Empty cart"
                  width={174}
                  height={108}
                  className="sidebar-right__empty-cart-img"
                />
              </div>
              <p className="sidebar-right__empty-cart-text">Cart empty</p>
            </div>
          )}
          {order.items.length !== 0 && (
            <div className="sidebar-right__full-cart">
              <p className="sidebar-right__full-cart-title">Total</p>
              <p className="sidebar-right__fukk-cart-price">${totalPrice()}</p>
            </div>
          )}
          <Link
            to="/cart"
            className="sidebar-right__order-confirm"
            style={
              order.items.length !== 0
                ? { pointerEvents: 'all', backgroundColor: '#4CAF50' }
                : null
            }
          >
            Confirm order
          </Link>
        </div>
      </div>
    </aside>
  );
};
