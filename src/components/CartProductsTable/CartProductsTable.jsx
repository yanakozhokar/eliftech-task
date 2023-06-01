import { useSelector } from 'react-redux';
import './CartProductsTable.css';

export const CartProductsTable = () => {
  const order = useSelector(state => state.order);

  return (
    <table className="cart__complete-table">
      <thead className="cart__complete-table-head">
        <tr className="cart__complete-table-head-row">
          <th className="cart__complete-table-head-title">Product</th>
          <th className="cart__complete-table-head-title">Amount</th>
          <th className="cart__complete-table-head-title">Total</th>
        </tr>
      </thead>
      <tbody className="cart__complete-table-body">
        {order.items.map(item => (
          <tr className="cart__complete-table-body-row" key={item.id}>
            <td className="cart__complete-table-body-item">{item.name}</td>
            <td className="cart__complete-table-body-item">{item.amount}</td>
            <td className="cart__complete-table-body-item">{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
