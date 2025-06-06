import PropTypes from 'prop-types';
import styles from '../styles/CartCard.module.css';
import { CartCardQuantityCounter } from './QuantityCounter';
import { toUSD } from '../utils/utils';

function CartCard({ product, handleCartChange }) {
  function handleQuantityChange(value) {
    handleCartChange(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: value,
        image: product.image,
      },
      'cart'
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt="product image"></img>
      </div>
      <div className={styles.textContent}>
        <div className={styles.info}>
          <h2>{product.title}</h2>
          <p>{toUSD.format(product.price * product.quantity)}</p>
        </div>
        <div className={styles.interact}>
          <CartCardQuantityCounter
            quantity={product.quantity}
            handleQuantityChange={handleQuantityChange}
          ></CartCardQuantityCounter>
        </div>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  handleCartChange: PropTypes.func.isRequired,
};

export default CartCard;
