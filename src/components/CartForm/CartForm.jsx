import './CartForm.css';

export const CartForm = () => {
  return (
    <form className="cart__complete-form">
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
