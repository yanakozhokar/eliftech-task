import { useDispatch, useSelector } from 'react-redux';
import { IoMdTrash } from 'react-icons/io';
import { deleteOrderItem } from 'redux/orderSlice';
import './CartProductsTable.css';

export const CartProductsTable = () => {
  const order = useSelector(state => state.order);
  const dispatch = useDispatch();

  return (
    <table className="cart__complete-table">
      <thead className="cart__complete-table-head">
        <tr className="cart__complete-table-head-row">
          <th className="cart__complete-table-head-title">Product</th>
          <th className="cart__complete-table-head-title">Amount</th>
          <th className="cart__complete-table-head-title">Total</th>
          <th className="cart__complete-table-head-title"></th>
        </tr>
      </thead>
      <tbody className="cart__complete-table-body">
        {order.items.map(item => (
          <tr className="cart__complete-table-body-row" key={item.id}>
            <td className="cart__complete-table-body-item">{item.name}</td>
            <td className="cart__complete-table-body-item">{item.amount}</td>
            <td className="cart__complete-table-body-item">{item.price}</td>
            <td className="cart__complete-table-body-item">
              <button
                className="cart__complete-table-body-delete-btn"
                onClick={() => dispatch(deleteOrderItem(item))}
              >
                <IoMdTrash
                  width={18}
                  height={18}
                  className="cart__complete-table-body-trash-bin"
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
