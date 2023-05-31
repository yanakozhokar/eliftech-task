import { SidebarLeft } from 'components/SidebarLeft/SidebarLeft';
import './Order.css';
import { Gallery } from 'components/Gallery/Gallery';
import { SidebarRight } from 'components/SidebarRight/SidebarRight';

export const Order = () => {
  return (
    <div className="order container">
      <SidebarLeft />
      <Gallery />
      <SidebarRight />
    </div>
  );
};
