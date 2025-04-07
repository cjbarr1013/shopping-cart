import PropTypes from 'prop-types';
import styles from '../styles/CartCard.module.css';
import { CartCardQuantityCounter } from './QuantityCounter';
import defaultCartProducts from '../data/defaultCartProducts';

function CartCard({
  product = defaultCartProducts[0],
  handleQuantityChange,
  handleRemoveFromCart,
}) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt=""></img>
      <div className={styles.textContent}>
        <div className={styles.info}>
          <h2>{product.title}</h2>
          <p>${(product.price * product.quantity).toFixed(2)}</p>
        </div>
        <div className={styles.interact}>
          <CartCardQuantityCounter
            quantity={product.quantity}
            handleQuantityChange={(value) =>
              handleQuantityChange(value, product.id)
            }
            handleRemoveFromCart={() => handleRemoveFromCart(product.id)}
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
  handleQuantityChange: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default CartCard;
