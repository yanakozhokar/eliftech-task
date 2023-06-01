import { ProductsTop } from 'components/ProductsTop/ProductsTop';
import { ProductsList } from 'components/ProductsList/ProductsList';

export const Wraps = ({ products }) => {
  return (
    <section className="products">
      <ProductsTop title={'Wraps'} />
      <ProductsList products={products} />
    </section>
  );
};
