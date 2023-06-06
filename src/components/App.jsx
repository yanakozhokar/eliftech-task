import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Order } from '../pages/Order/Order';
import { Cart } from '../pages/Cart/Cart';
import { Offers } from 'pages/Offers/Offers';
import { Delivery } from 'pages/Delivery/Delivery';

export const App = () => {
  return (
    <BrowserRouter basename="eliftech-task">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Order />} />
          <Route path="cart" element={<Cart />} />
          <Route path="offers" element={<Offers />} />
          <Route path="delivery" element={<Delivery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
