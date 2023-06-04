import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im';
import { BsPinterest } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import './Socials.css';

export const Socials = () => {
  return (
    <ul className="socials-list">
      <li className="socials__item">
        <a href="https://www.facebook.com/" className="socials__link">
          <ImFacebook className="socials__icon" />
        </a>
      </li>
      <li className="socials__item">
        <a href="https://twitter.com/" className="socials__link">
          <ImTwitter className="socials__icon" />
        </a>
      </li>
      <li className="socials__item">
        <a href="https://www.instagram.com/" className="socials__link">
          <RiInstagramFill className="socials__icon" />
        </a>
      </li>
      <li className="socials__item">
        <a href="https://www.youtube.com/" className="socials__link">
          <ImYoutube className="socials__icon" />
        </a>
      </li>
      <li className="socials__item">
        <a href="https://www.pinterest.com/" className="socials__link">
          <BsPinterest className="socials__icon" />
        </a>
      </li>
    </ul>
  );
};
