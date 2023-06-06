import { ProductsTop } from 'components/ProductsTop/ProductsTop';
import { ProductsList } from 'components/ProductsList/ProductsList';

export const FilteredProducts = ({ products }) => {
  return (
    <section className="products">
      <ProductsTop title={'Search results'} />
      <ProductsList products={products} />
    </section>
  );
};
