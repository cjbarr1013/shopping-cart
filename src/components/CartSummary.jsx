import PropTypes from 'prop-types';
import styles from '../styles/CartSummary.module.css';
import Button from './Button';

function CartSummary({ subtotal = 105.67 }) {
  const tax = subtotal * 0.065;
  const shipping = subtotal >= 100 ? 0 : 7.99;
  const total = subtotal + tax + shipping;

  return (
    <div className={styles.summary}>
      <div>
        <h3>Subtotal</h3>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <hr></hr>
      <div>
        <h3>Est. Tax</h3>
        <p>${tax.toFixed(2)}</p>
      </div>
      <div>
        <h3>Est. Shipping</h3>
        <p>{shipping ? `$${shipping}` : 'FREE'}</p>
      </div>
      <hr></hr>
      <div>
        <h3>Total</h3>
        <p>${total.toFixed(2)}</p>
      </div>
      <Button
        text="Checkout"
        handleClick={() => console.log('Not functional')}
        type="primary"
      ></Button>
    </div>
  );
}

CartSummary.propTypes = {
  subtotal: PropTypes.number.isRequired,
};

export default CartSummary;
