import { ImMinus, ImPlus } from 'react-icons/im';
import {
  addOrderItem,
  deleteOrderItem,
  updateOrderItemAmount,
} from 'redux/orderSlice';
import './AmountControls.css';
import { useDispatch } from 'react-redux';

export const AmountControls = ({ item }) => {
  const dispatch = useDispatch();

  return (
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
  );
};
