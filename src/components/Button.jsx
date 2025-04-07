import PropTypes from 'prop-types';
import styles from '../styles/Button.module.css';

function Button({ text = 'Click me!', handleClick, type = 'primary' }) {
  return (
    <button className={styles[type]} onClick={handleClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};

export default Button;
