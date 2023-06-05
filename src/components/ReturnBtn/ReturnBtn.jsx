import { Link } from 'react-router-dom';
import { IoMdReturnLeft } from 'react-icons/io';
import './ReturnBtn.css';

export const ReturnBtn = () => {
  return (
    <Link to="/" href="/" className="return-btn">
      <IoMdReturnLeft width={16} height={16} />
      Return
    </Link>
  );
};
