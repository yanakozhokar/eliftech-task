import logo from '../../images/logo.png';
import './Logo.css';

export const Logo = () => {
  return (
    <div className="logo__container">
      <img
        src={logo}
        alt="Logo"
        width="224"
        height="128"
        className="logo__img"
      />
    </div>
  );
};
