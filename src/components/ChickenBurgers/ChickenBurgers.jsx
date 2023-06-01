import { ProductsTop } from 'components/ProductsTop/ProductsTop';
import { ProductsList } from 'components/ProductsList/ProductsList';

export const ChickenBurgers = ({ products }) => {
  return (
    <section className="products" id="chicken-burgers">
      <ProductsTop title={'Chicken burgers'} />
      <ProductsList products={products} />
    </section>
  );
};
