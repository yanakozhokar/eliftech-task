import { ProductsTop } from 'components/ProductsTop/ProductsTop';
import { ProductsList } from 'components/ProductsList/ProductsList';

export const Burgers = ({ products }) => {
  return (
    <section className="products" id="burgers">
      <ProductsTop title={'Burgers'} />
      <ProductsList products={products} />
    </section>
  );
};
