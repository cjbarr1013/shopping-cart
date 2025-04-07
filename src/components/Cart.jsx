import PropTypes from 'prop-types';
import styles from '../styles/Cart.module.css';
import CartCard from './CartCard';
import CartSummary from './CartSummary';
import defaultCartProducts from '../data/defaultCartProducts';

function Cart({ cart = defaultCartProducts, subtotal = 105.67 }) {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cart}>
        <div className={styles.cardContainer}>
          {cart.map((product) => (
            <CartCard key={product.id} product={product}></CartCard>
          ))}
        </div>
        <CartSummary subtotal={subtotal}></CartSummary>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  subtotal: PropTypes.number.isRequired,
};

export default Cart;
