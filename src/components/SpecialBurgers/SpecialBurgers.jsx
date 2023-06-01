import { ProductsTop } from 'components/ProductsTop/ProductsTop';
import { ProductsList } from 'components/ProductsList/ProductsList';

export const SpecialBurgers = ({ products }) => {
  return (
    <section className="products" id="special-burgers">
      <ProductsTop title={'Special burgers'} />
      <ProductsList products={products} />
    </section>
  );
};
