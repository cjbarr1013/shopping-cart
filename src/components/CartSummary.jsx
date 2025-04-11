import PropTypes from 'prop-types';
import styles from '../styles/CartSummary.module.css';
import Button from './Button';
import { toUSD } from '../utils/utils';

function CartSummary({ subtotal = 105.67 }) {
  const tax = subtotal * 0.065;
  const shipping = subtotal >= 100 ? 0 : 7.99;
  const total = subtotal + tax + shipping;

  return (
    <div className={styles.summary}>
      <div>
        <h3>Subtotal</h3>
        <p>{toUSD.format(subtotal)}</p>
      </div>
      <hr></hr>
      <div>
        <h3>Est. Tax</h3>
        <p>{toUSD.format(tax)}</p>
      </div>
      <div>
        <h3>Est. Shipping</h3>
        <p>{shipping ? `${toUSD.format(shipping)}` : 'FREE'}</p>
      </div>
      <hr></hr>
      <div>
        <h3>Total</h3>
        <p>{toUSD.format(total)}</p>
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
