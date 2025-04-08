import styles from '../styles/StorePages.module.css';
import Header from './Header';
import Cart from './Cart';
import Shop from './Shop';
import defaultCartProducts from '../data/defaultCartProducts';

function StorePages({ cart = defaultCartProducts }) {
  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className={styles.shopContainer}>
      <Header subtotal={subtotal}></Header>
      {/* <Cart subtotal={subtotal}></Cart> */}
      <Shop></Shop>
    </div>
  );
}

export default StorePages;
