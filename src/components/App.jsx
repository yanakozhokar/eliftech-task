import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Order } from '../pages/Order/Order';
import { Cart } from '../pages/Cart/Cart';

export const App = () => {
  return (
    <BrowserRouter basename="eliftech-task">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Order />} />
          <Route path="cart" element={<Cart />} />
          <Route path="offers" element={<Offers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
