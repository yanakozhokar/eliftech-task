import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>
        <a href="tel:+12122100020" className="header__tel">
          +12122100020
        </a>
      </div>
    </header>
  );
};
