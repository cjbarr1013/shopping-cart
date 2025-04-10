import PropTypes from 'prop-types';
import styles from '../styles/ShopCard.module.css';
import { StoreCardQuantityCounter } from './QuantityCounter';
import cartPlus from '../assets/icons/cart-plus.svg';
import defaultShopProducts from '../data/defaultShopProducts';

import { useState } from 'react';

function ShopCard({ product = defaultShopProducts[0], handleCartChange }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.card}>
      <img src={product.image} alt=""></img>
      <div className={styles.textContent}>
        <div className={styles.info}>
          <h2>{product.title}</h2>
          <p>${product.price.toFixed(2)}</p>
        </div>
        <div className={styles.interact}>
          <StoreCardQuantityCounter
            quantity={quantity}
            handleQuantityChange={(value) => setQuantity(value)}
          ></StoreCardQuantityCounter>
          <button
            className={styles.addToCartBtn}
            onClick={() =>
              handleCartChange({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: quantity,
                image: product.image,
              })
            }
          >
            <img src={cartPlus} alt="add to cart"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ShopCard;
