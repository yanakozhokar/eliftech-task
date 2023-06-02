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
    <div className="sidebar-left__menu">
      <p className="sidebar-left__menu-title">
        Menu
        <ForkAndKnife
          width={18}
          height={18}
          className="sidebar-left__menu-icon"
        />
      </p>
      <ul className="sidebar-left__menu-list">
        <li className="sidebar-left__menu-item">
          <a href="#special-burgers" className="sidebar-left__menu-item-link">
            <SpecialBurgers
              width={18}
              height={18}
              className="sidebar-left__menu-icon"
            />
            Special burgers
          </a>
        </li>
        <li className="sidebar-left__menu-item">
          <a href="#chicken-burgers" className="sidebar-left__menu-item-link">
            <ChickenBurgers
              width={18}
              height={18}
              className="sidebar-left__menu-icon"
            />
            Chicken burgers
          </a>
        </li>
        <li className="sidebar-left__menu-item">
          <a href="#burgers" className="sidebar-left__menu-item-link">
            <Burgers
              width={18}
              height={18}
              className="sidebar-left__menu-icon"
            />
            Burgers
          </a>
        </li>
        <li className="sidebar-left__menu-item">
          <a href="#sandwiches" className="sidebar-left__menu-item-link">
            <Sandwiches
              width={18}
              height={18}
              className="sidebar-left__menu-icon"
            />
            Sandwiches
          </a>
        </li>
        <li className="sidebar-left__menu-item">
          <a href="#wraps" className="sidebar-left__menu-item-link">
            <Wraps width={18} height={18} className="sidebar-left__menu-icon" />
            Wraps
          </a>
        </li>
        <li className="sidebar-left__menu-item">
          <a href="#grills" className="sidebar-left__menu-item-link">
            <Grills
              width={18}
              height={18}
              className="sidebar-left__menu-icon"
            />
            Grills
          </a>
        </li>
        <li className="sidebar-left__menu-item">
          <a href="#desserts" className="sidebar-left__menu-item-link">
            <Desserts
              width={18}
              height={18}
              className="sidebar-left__menu-icon"
            />
            Desserts
          </a>
        </li>
        <li className="sidebar-left__menu-item">
          <a href="#sides" className="sidebar-left__menu-item-link">
            <Sides width={18} height={18} className="sidebar-left__menu-icon" />
            Sides
          </a>
        </li>
        <li className="sidebar-left__menu-item">
          <a href="#drinks" className="sidebar-left__menu-item-link">
            <Drinks
              width={18}
              height={18}
              className="sidebar-left__menu-icon"
            />
            Drinks
          </a>
        </li>
      </ul>
    </div>
  );
};
