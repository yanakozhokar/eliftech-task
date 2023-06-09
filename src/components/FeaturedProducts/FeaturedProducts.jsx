import React, { useEffect, useRef, useState } from 'react';
import { MdStar } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import './FeaturedProducts.css';

export const FeaturedProducts = ({ products }) => {
  const [slides, setSlides] = useState(() => slidesAmount());
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setSlides(slidesAmount());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: slides,
    slidesToScroll: 1,
  };

  const onPrevBtnClick = () => {
    sliderRef.current.slickPrev();
  };

  const onNextBtnClick = () => {
    sliderRef.current.slickNext();
  };

  function slidesAmount() {
    if (window.innerWidth < 768) {
      return 2;
    } else {
      return 3;
    }
  }

  return (
    <section className="featured-products">
      <div className="featured-products__top">
        <div className="featured-products__top-title-container">
          <MdStar width={20} height={20} className="featured-products__star" />
          <h2 className="featured-products__top-title">Featured products</h2>
        </div>
        <div className="featured-products__top-controls">
          <button
            type="button"
            className="featured-products__top-btn-prev"
            onClick={onPrevBtnClick}
          >
            <IoIosArrowBack className="featured-products__top-arrow" />
          </button>
          <button
            type="button"
            className="featured-products__top-btn-next"
            onClick={onNextBtnClick}
          >
            <IoIosArrowForward className="featured-products__top-arrow" />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {products.map(product => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </Slider>
    </section>
  );
};
