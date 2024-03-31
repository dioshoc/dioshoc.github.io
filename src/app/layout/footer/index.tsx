import RocketImg from '@assets/images/rocketImg.png';
import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <img
      src={RocketImg}
      alt=""
    />
    <p className={styles.footer__title}>Exciting space adventure!</p>
  </footer>
);

export default Footer;
