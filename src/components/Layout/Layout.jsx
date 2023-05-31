import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
// import css from './Layout.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
