import { SidebarLeftMenuForm } from 'components/SidebarLeftMenuForm/SidebarLeftMenuForm';
import { SidebarLeftMenu } from 'components/SidebarLeftMenu/SidebarLeftMenu';

import './SidebarLeft.css';
import { SpecialOffersLink } from 'components/SpecialOffersLink/SpecialOffersLink';

export const SidebarLeft = () => {
  return (
    <aside className="sidebar-left">
      <SidebarLeftMenuForm />
      <SidebarLeftMenu />
      <SpecialOffersLink />
    </aside>
  );
};
