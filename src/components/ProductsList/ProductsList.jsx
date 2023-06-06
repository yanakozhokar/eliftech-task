import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import './ProductsList.css';

export const ProductsList = ({ products }) => {
  if (products.length !== 0) {
    return (
      <ul className="products__list">
        {products.map(product => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </ul>
    );
  } else {
    return <p className="products__empty-list">There are no results</p>;
  }
};
