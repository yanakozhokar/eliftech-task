import { useEffect, useState } from 'react';
import { SpecialOfferBanner } from 'components/SpecialOfferBanner/SpecialOfferBanner';
import { FeaturedProducts } from 'components/FeaturedProducts/FeaturedProducts';
import { SpecialBurgers } from 'components/SpecialBurgers/SpecialBurgers';
import { ChickenBurgers } from 'components/ChickenBurgers/ChickenBurgers';
import { Burgers } from 'components/Burgers/Burgers';
import { Sandwiches } from 'components/Sandwiches/Sandwiches';
import { Wraps } from 'components/Wraps/Wraps';
import { Grills } from 'components/Grills/Grills';
import { Desserts } from 'components/Desserts/Desserts';
import { Sides } from 'components/Sides/Sides';
import { Drinks } from 'components/Drinks/Drinks';
import './Gallery.css';

export const Gallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://64748ef77de100807b1b337b.mockapi.io/products')
      .then(data => data.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="gallery">
      <SpecialOfferBanner />
      <FeaturedProducts
        products={products.filter(product => product.type === 'featured')}
      />
      <SpecialBurgers
        products={products.filter(product => product.type === 'special')}
      />
      <ChickenBurgers
        products={products.filter(product => product.type === 'chicken-burger')}
      />
      <Burgers
        products={products.filter(product => product.type === 'burger')}
      />
      <Sandwiches
        products={products.filter(product => product.type === 'sandwich')}
      />
      <Wraps products={products.filter(product => product.type === 'wrap')} />
      <Grills products={products.filter(product => product.type === 'grill')} />
      <Desserts
        products={products.filter(product => product.type === 'dessert')}
      />
      <Sides products={products.filter(product => product.type === 'side')} />
      <Drinks products={products.filter(product => product.type === 'drink')} />
    </div>
  );
};
