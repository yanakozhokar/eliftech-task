import { useSelector } from 'react-redux';
import { SidebarLeft } from 'components/SidebarLeft/SidebarLeft';
import { Gallery } from 'components/Gallery/Gallery';
import { SidebarRight } from 'components/SidebarRight/SidebarRight';
import { MyOrderBtn } from 'components/MyOrderBtn/MyOrderBtn';
import './Order.css';

export const Order = () => {
  const order = useSelector(state => state.order);

  return (
    <div className="order">
      <div className="container">
        <SidebarLeft />
        <Gallery />
        <SidebarRight />
        {order.items.length !== 0 && <MyOrderBtn />}
      </div>
    </div>
  );
};
