import { SidebarLeft } from 'components/SidebarLeft/SidebarLeft';
import { Gallery } from 'components/Gallery/Gallery';
import { SidebarRight } from 'components/SidebarRight/SidebarRight';
import './Order.css';

export const Order = () => {
  return (
    <div className="order">
      <div className="container">
        <SidebarLeft />
        <Gallery />
        <SidebarRight />
      </div>
    </div>
  );
};
