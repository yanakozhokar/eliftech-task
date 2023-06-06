import { BiSearch } from 'react-icons/bi';
import debounce from 'lodash.debounce';
import './SidebarLeftMenuForm.css';

export const SidebarLeftMenuForm = ({ onFilterChange }) => {
  const onFilterFormSubmit = event => {
    event.preventDefault();
    const inputValue = Array.from(event.target.elements).find(
      el => el.nodeName === 'INPUT'
    ).value;
    onFilterChange(inputValue);
  };

  const debouncedFilterChange = debounce(value => onFilterChange(value), 300);

  return (
    <form className="menu-form" onSubmit={onFilterFormSubmit}>
      <input
        type="text"
        name="dish-request"
        placeholder="Search"
        className="menu-form__input"
        onChange={event => debouncedFilterChange(event.target.value)}
      />
      <button type="submit" width="40" height="44" className="menu-form__btn">
        <BiSearch className="menu-form__icon" />
      </button>
    </form>
  );
};
