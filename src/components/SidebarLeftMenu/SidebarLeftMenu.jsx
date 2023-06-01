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
import './SidebarLeftMenu.css';

export const SidebarLeftMenu = () => {
  return (
    <div className="menu">
      <p className="menu__title">
        Menu
        <ForkAndKnife width={18} height={18} className="menu__icon" />
      </p>
      <ul className="menu__list">
        <li className="menu__item">
          <a href="#special-burgers" className="menu__item-link">
            <SpecialBurgers width={18} height={18} className="menu__icon" />
            Special burgers
          </a>
        </li>
        <li className="menu__item">
          <a href="#chicken-burgers" className="menu__item-link">
            <ChickenBurgers width={18} height={18} className="menu__icon" />
            Chicken burgers
          </a>
        </li>
        <li className="menu__item">
          <a href="#burgers" className="menu__item-link">
            <Burgers width={18} height={18} className="menu__icon" />
            Burgers
          </a>
        </li>
        <li className="menu__item">
          <a href="#sandwiches" className="menu__item-link">
            <Sandwiches width={18} height={18} className="menu__icon" />
            Sandwiches
          </a>
        </li>
        <li className="menu__item">
          <a href="#wraps" className="menu__item-link">
            <Wraps width={18} height={18} className="menu__icon" />
            Wraps
          </a>
        </li>
        <li className="menu__item">
          <a href="#grills" className="menu__item-link">
            <Grills width={18} height={18} className="menu__icon" />
            Grills
          </a>
        </li>
        <li className="menu__item">
          <a href="#desserts" className="menu__item-link">
            <Desserts width={18} height={18} className="menu__icon" />
            Desserts
          </a>
        </li>
        <li className="menu__item">
          <a href="#sides" className="menu__item-link">
            <Sides width={18} height={18} className="menu__icon" />
            Sides
          </a>
        </li>
        <li className="menu__item">
          <a href="#drinks" className="menu__item-link">
            <Drinks width={18} height={18} className="menu__icon" />
            Drinks
          </a>
        </li>
      </ul>
    </div>
  );
};
