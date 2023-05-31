import { Logo } from 'components/Logo/Logo';
import { HeaderMenu } from 'components/HeaderMenu/HeaderMenu';
import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <Logo />
            <a href="tel:+12122100020" className="header__tel">
              +12122100020
            </a>
          </div>
        </div>
        <div className="container">
          <HeaderMenu />
        </div>
      </header>
    </>
  );
};
