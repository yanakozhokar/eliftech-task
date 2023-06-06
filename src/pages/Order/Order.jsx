import { useSelector } from 'react-redux';
import { SidebarLeft } from 'components/SidebarLeft/SidebarLeft';
import { Gallery } from 'components/Gallery/Gallery';
import { SidebarRight } from 'components/SidebarRight/SidebarRight';
import { MyOrderBtn } from 'components/MyOrderBtn/MyOrderBtn';
import './Order.css';
import { useState } from 'react';

export const Order = () => {
  const [filter, setFilter] = useState('');
  const order = useSelector(state => state.order);

  const onFilterChange = newValue => {
    return setFilter(newValue);
  };

  return (
    <div className="order-page">
      <div className="container">
        <SidebarLeft onFilterChange={onFilterChange} />
        <Gallery filter={filter} />
        <SidebarRight />
        {order.items.length !== 0 && <MyOrderBtn />}
      </div>
    </div>
  );
};
