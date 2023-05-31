import { MdViewList } from 'react-icons/md';
import './ProductsTop.css';

export const ProductsTop = ({ title }) => {
  return (
    <div className="products__top">
      <h2 className="products__top-title">{title}</h2>
      <MdViewList width={20} height={20} className="products__top-icon" />
    </div>
  );
};
