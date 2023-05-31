import { BiSearch } from 'react-icons/bi';
import './MenuForm.css';

export const MenuForm = () => {
  return (
    <form className="menu-form">
      <input
        type="text"
        name="dish-request"
        placeholder="Search"
        className="menu-form__input"
      />
      <button type="submit" width="40" height="44" className="menu-form__btn">
        <BiSearch className="menu-form__icon" />
      </button>
    </form>
  );
};
