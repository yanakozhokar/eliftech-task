import { ProductsTop } from 'components/ProductsTop/ProductsTop';
import { ProductsList } from 'components/ProductsList/ProductsList';

export const Grills = ({ products }) => {
  return (
    <section className="products">
      <ProductsTop title={'Grilles'} />
      <ProductsList products={products} />
    </section>
  );
};
