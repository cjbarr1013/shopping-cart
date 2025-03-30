import styles from '../styles/Button.module.css';

function Button({ text, handleClick, type }) {
  return (
    <button className={styles[type]} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
