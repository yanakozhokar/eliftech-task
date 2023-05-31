import { MenuForm } from 'components/MenuForm/MenuForm';
import { Menu } from 'components/Menu/Menu';

import './SidebarLeft.css';
import { SpecialOffersLink } from 'components/SpecialOffersLink/SpecialOffersLink';

export const SidebarLeft = () => {
  return (
    <aside className="sidebar-left">
      <MenuForm />
      <Menu />
      <SpecialOffersLink />
    </aside>
  );
};
