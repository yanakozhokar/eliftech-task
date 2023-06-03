import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ImMinus, ImPlus } from 'react-icons/im';
import { IoCloseSharp } from 'react-icons/io5';
import { default as EmptyCart } from '../../images/empty-cart.png';
import {
  addOrderItem,
  deleteOrderItem,
  updateOrderItemAmount,
} from 'redux/orderSlice';
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
                      >
                        <IoCloseSharp className="sidebar-right_cart-item-close-icon" />
                      </button>
                    </div>
                    <div className="sidebar-right__cart-item-total-container">
                      <p className="sidebar-right__cart-item-total-price">
                        ${item.totalPrice}
                      </p>
                      <div className="amount">
                        <button
                          type="button"
                          className="amount-minus-btn"
                          onClick={() => dispatch(deleteOrderItem(item))}
                        >
                          <ImMinus className="amount-icon" />
                        </button>
                        <input
                          type="number"
                          min={1}
                          max={99}
                          value={item.amount}
                          className="amount-input"
                          onChange={e => updateOrderItemAmount(e.target.value)}
                        />
                        <button
                          type="button"
                          className="amount-plus-btn"
                          onClick={() => dispatch(addOrderItem(item))}
                        >
                          <ImPlus className="amount-icon" />
                        </button>
                      </div>
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
