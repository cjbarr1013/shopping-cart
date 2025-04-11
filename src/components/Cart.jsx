import PropTypes from 'prop-types';
import styles from '../styles/Cart.module.css';
import CartCard from './CartCard';
import CartSummary from './CartSummary';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, handleCartChange, subtotal } = useOutletContext();

  return (
    <>
      {cart.length === 0 ?
        <div className={styles.emptyCart}>
          <h2>Your cart is empty.</h2>
          <Link to="/store/shop">Go back to store</Link>
        </div>
      : <div className={styles.cartContainer}>
          <div className={styles.cart}>
            <div className={styles.cardContainer}>
              {cart.map((product) => (
                <CartCard
                  key={product.id}
                  product={product}
                  handleCartChange={handleCartChange}
                ></CartCard>
              ))}
            </div>
            <CartSummary subtotal={subtotal}></CartSummary>
          </div>
        </div>
      }
    </>
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
