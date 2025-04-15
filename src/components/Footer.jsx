import githubIcon from '../assets/icons/github.svg';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Made by:</p>
      <a href="https://github.com/cjbarr1013/shopping-cart" target="_blank">
        <span>cjbarr1013</span>
        <img src={githubIcon} alt="github icon" />
      </a>
    </footer>
  );
}

export default Footer;
