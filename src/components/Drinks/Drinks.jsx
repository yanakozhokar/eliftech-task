import { ProductsTop } from 'components/ProductsTop/ProductsTop';
import { ProductsList } from 'components/ProductsList/ProductsList';

export const Drinks = ({ products }) => {
  return (
    <section className="products">
      <ProductsTop title={'Drinks'} />
      <ProductsList products={products} />
    </section>
  );
};
