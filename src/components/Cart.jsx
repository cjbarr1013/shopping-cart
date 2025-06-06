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
          <div className={styles.msg}>
            <h2>Your cart is empty.</h2>
            <Link to="/store/shop">Go back to store</Link>
          </div>
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

export default Cart;
