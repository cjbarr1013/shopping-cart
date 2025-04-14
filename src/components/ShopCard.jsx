import PropTypes from 'prop-types';
import styles from '../styles/ShopCard.module.css';
import { StoreCardQuantityCounter } from './QuantityCounter';
import cartPlus from '../assets/icons/cart-plus.svg';
import { toUSD } from '../utils/utils';

import { useState } from 'react';

function ShopCard({ product, handleCartChange }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.card}>
      <img src={product.image} alt=""></img>
      <div className={styles.textContent}>
        <div className={styles.info}>
          <h2>{product.title}</h2>
          <p>{toUSD.format(product.price)}</p>
        </div>
        <div className={styles.interact}>
          <StoreCardQuantityCounter
            quantity={quantity}
            handleQuantityChange={(value) => setQuantity(value)}
          ></StoreCardQuantityCounter>
          <button
            className={styles.addToCartBtn}
            onClick={() =>
              handleCartChange(
                {
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  quantity: quantity,
                  image: product.image,
                },
                'shop'
              )
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
    image: PropTypes.string.isRequired,
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ShopCard;
