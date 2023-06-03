import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { deleteOrder } from 'redux/orderSlice';
import { AmountControls } from 'components/AmountControls/AmountControls';
import { default as EmptyCart } from '../../images/empty-cart.png';
import './SidebarRight.css';


export const SidebarRight = () => {
  const order = useSelector(state => state.order);
  const dispatch = useDispatch();

  const totalPrice = () => {
    return order.items.reduce((total, item) => total + item.totalPrice, 0);
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
            <div className="sidebar-right__cart">
              <ul className="sidebar-right__cart-list">
                {order.items.map(item => (
                  <li className="sidebar-right__cart-item" key={item.id}>
                    <div className="sidebar-right__cart-item-title-container">
                      <p className="sidebar-right__cart-item-title">
                        {item.name}
                      </p>
                      <button
                        type="button"
                        className="sidebar-right__cart-item-close-btn"
                        onClick={() => dispatch(deleteOrder(item))}
                      >
                        <IoCloseSharp className="sidebar-right_cart-item-close-icon" />
                      </button>
                    </div>
                    <div className="sidebar-right__cart-item-total-container">
                      <p className="sidebar-right__cart-item-total-price">
                        ${item.totalPrice}
                      </p>
                      <AmountControls item={item} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="sidebar-right__total">
            <p className="sidebar-right__total-title">Total</p>
            <p className="sidebar-right__total-price">${totalPrice()}</p>
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
      </div>
    </aside>
  );
};
