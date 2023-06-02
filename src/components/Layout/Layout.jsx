import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { TopMenu } from 'components/TopMenu/TopMenu';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <TopMenu />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
