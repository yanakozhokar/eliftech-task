import { ReactComponent as ForkAndKnife } from '../../images/fork-and-knife.svg';
import { ReactComponent as SpecialBurgers } from '../../images/special-burgers.svg';
import { ReactComponent as ChickenBurgers } from '../../images/chicken-burgers.svg';
import { ReactComponent as Burgers } from '../../images/burgers.svg';
import { ReactComponent as Sandwiches } from '../../images/sandwiches.svg';
import { ReactComponent as Wraps } from '../../images/wraps.svg';
import { ReactComponent as Grills } from '../../images/grills.svg';
import { ReactComponent as Desserts } from '../../images/desserts.svg';
import { ReactComponent as Sides } from '../../images/sides.svg';
import { ReactComponent as Drinks } from '../../images/drinks.svg';
import './Menu.css';

export const Menu = () => {
  return (
    <div className="menu">
      <p className="menu__title">
        Menu
        <ForkAndKnife width={18} height={18} className="menu__icon" />
      </p>
      <ul className="menu__list">
        <li className="menu__item">
          <SpecialBurgers width={18} height={18} className="menu__icon" />
          Special burgers
        </li>
        <li className="menu__item">
          <ChickenBurgers width={18} height={18} className="menu__icon" />
          Chicken burgers
        </li>
        <li className="menu__item">
          <Burgers width={18} height={18} className="menu__icon" />
          Burgers
        </li>
        <li className="menu__item">
          <Sandwiches width={18} height={18} className="menu__icon" />
          Sandwiches
        </li>
        <li className="menu__item">
          <Wraps width={18} height={18} className="menu__icon" />
          Wraps
        </li>
        <li className="menu__item">
          <Grills width={18} height={18} className="menu__icon" />
          Grills
        </li>
        <li className="menu__item">
          <Desserts width={18} height={18} className="menu__icon" />
          Desserts
        </li>
        <li className="menu__item">
          <Sides width={18} height={18} className="menu__icon" />
          Sides
        </li>
        <li className="menu__item">
          <Drinks width={18} height={18} className="menu__icon" />
          Drinks
        </li>
      </ul>
    </div>
  );
};
