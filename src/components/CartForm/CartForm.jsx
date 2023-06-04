import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { confirmOrder, deleteAllOrders } from 'redux/orderSlice';
import './CartForm.css';

export const CartForm = () => {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const onFormSubmit = event => {
    event.preventDefault();
    let formData = {};

    Array.from(event.target.elements).forEach(el => {
      if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
        formData = { ...formData, [el.name]: el.value };
      }
    });

    dispatch(confirmOrder(formData));
    dispatch(deleteAllOrders());
    formRef.current.reset();
    Notify.success('Your order has been successfully received!', {
      position: 'right-bottom',
      timeout: 5000,
    });
  };

  return (
    <form className="cart__complete-form" onSubmit={onFormSubmit} ref={formRef}>
      <label className="cart__complete-form-label">
        Name:
        <input
          type="text"
          name="name"
          className="cart__complete-form-input"
          required
        />
      </label>
      <label className="cart__complete-form-label">
        Phone:
        <input
          type="tel"
          name="phone"
          className="cart__complete-form-input"
          required
        />
      </label>
      <label className="cart__complete-form-label">
        Email:
        <input
          type="email"
          name="email"
          className="cart__complete-form-input"
          required
        />
      </label>
      <label className="cart__complete-form-label">
        Address:
        <input
          type="text"
          name="address"
          className="cart__complete-form-input"
          required
        />
      </label>
      <label className="cart__complete-form-label">
        Comment (optional):
        <textarea
          name="comment"
          className="cart__complete-form-comment"
        ></textarea>
      </label>
      <button type="submit" className="cart__complete-form-submit-btn">
        Submit
      </button>
    </form>
  );
};
