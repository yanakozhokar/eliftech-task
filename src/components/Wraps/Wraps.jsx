import { ProductsTop } from 'components/ProductsTop/ProductsTop';
import { ProductsList } from 'components/ProductsList/ProductsList';

export const Wraps = ({ products }) => {
  return (
    <section className="products" id="wraps">
      <ProductsTop title={'Wraps'} />
      <ProductsList products={products} />
    </section>
  );
};
