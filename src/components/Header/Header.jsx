import { Logo } from 'components/Logo/Logo';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <a href="tel:+12122100020" className="header__tel">
          +12122100020
        </a>
      </div>
    </header>
  );
};
