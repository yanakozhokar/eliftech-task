import { ProductsTop } from 'components/ProductsTop/ProductsTop';
import { ProductsList } from 'components/ProductsList/ProductsList';

export const Desserts = ({ products }) => {
  return (
    <section className="products">
      <ProductsTop title={'Desserts'} />
      <ProductsList products={products} />
    </section>
  );
};
