import { SidebarLeftMenuForm } from 'components/SidebarLeftMenuForm/SidebarLeftMenuForm';
import { SidebarLeftMenu } from 'components/SidebarLeftMenu/SidebarLeftMenu';

import './SidebarLeft.css';
import { SpecialOffersLink } from 'components/SpecialOffersLink/SpecialOffersLink';

export const SidebarLeft = ({ onFilterChange }) => {
  return (
    <aside className="sidebar-left">
      <SidebarLeftMenuForm onFilterChange={onFilterChange} />
      <SidebarLeftMenu />
      <SpecialOffersLink />
    </aside>
  );
};
