import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import './ProductsList.css';

export const ProductsList = ({ products }) => {
  return (
    <ul className="products__list">
      {products.map(product => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
