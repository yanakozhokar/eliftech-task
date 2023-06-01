import { ProductsTop } from 'components/ProductsTop/ProductsTop';
import { ProductsList } from 'components/ProductsList/ProductsList';

export const Sandwiches = ({ products }) => {
  return (
    <section className="products" id="sandwiches">
      <ProductsTop title={'Sandwiches'} />
      <ProductsList products={products} />
    </section>
  );
};
